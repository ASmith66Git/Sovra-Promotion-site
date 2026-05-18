# Threat Model

## Project Overview

Sovra is a mostly static marketing site built with React/Vite and served by a small Express server. In production, the meaningful server-side attack surface is a single public API endpoint, `POST /api/support`, which accepts untrusted user input and relays it to the Resend email API. The deployment assumptions for this project are that `NODE_ENV=production`, TLS is provided by the platform, and the mockup/video workspaces are not production surfaces unless explicitly wired into the live server.

## Assets

- **Support inbox availability and integrity** — support requests must remain usable for legitimate customers. Abuse of the support channel can bury real requests, degrade sender reputation, and consume paid email quota.
- **Application secrets** — the Resend API key and any future environment secrets must remain server-only. Compromise would allow unauthorized mail delivery or abuse of third-party services.
- **Brand and trust signals** — public pages make privacy and security claims. Server-side behaviors that enable spoofing, spam, or misleading submissions can undermine those claims even without exposing user data.
- **Static site content** — the public marketing pages and assets are low-sensitivity, but they are internet-facing and should not become a path to script injection or malicious redirects.

## Trust Boundaries

- **Browser to Express server** — all data sent to `/api/support` is untrusted and must be validated, bounded, and protected against abuse.
- **Express server to Resend API** — the server uses a privileged API key to trigger outbound email. Any public route that can reach this boundary can create cost and delivery-risk exposure.
- **Production app to dev-only workspaces** — `videos/` and the unregistered `server/replit_integrations/` code are present in the repo but are not part of the current production request path unless later imported and registered.
- **Public web to internal support workflow** — messages received through the support route influence internal human workflows. Unauthenticated submissions can therefore affect operations even when they do not access data.

## Scan Anchors

- Production entry points: `server/index.ts`, `server/routes.ts`, `server/static.ts`, `client/src/App.tsx`
- Highest-risk production area: `POST /api/support` in `server/routes.ts`
- Public surfaces: all frontend routes plus `POST /api/support`
- Dev-only or currently out of scope unless proven reachable: `videos/`, `server/replit_integrations/`, template auth/storage leftovers in `shared/schema.ts` and `server/storage.ts`

## Threat Categories

### Spoofing

The application has no user authentication surface today, so the main spoofing risk is abuse of public contact channels. The support endpoint must not allow attackers to cheaply impersonate large numbers of senders or inject misleading support traffic into internal workflows. Any future inbound webhook or auth feature must be explicitly verified server-side before it is considered in scope.

### Tampering

User-controlled fields submitted to `/api/support` cross directly into an outbound email template and third-party mail API call. The server must validate field structure and length, and any content inserted into rendered HTML must remain safely encoded. Client-side constraints are not security controls.

### Information Disclosure

This project stores little user data in production, but secrets such as `RESEND_API_KEY` and any operational error details must stay server-side. Error responses and logs must avoid exposing stack traces, tokens, or third-party API details to the public.

### Denial of Service

The most relevant production risk is abuse of the public support endpoint. Because that route can trigger outbound email and internal support noise, it must have anti-automation protections such as rate limiting, bot resistance, or equivalent abuse controls. Public endpoints that initiate third-party calls are especially sensitive because they amplify attacker traffic into cost and reputation impact.

### Elevation of Privilege

There is no current authenticated/admin production surface. The main privilege boundary to protect is the server's ability to use privileged third-party credentials on behalf of the public internet. Public routes must not let anonymous users exercise that privilege without tight scoping and abuse controls.