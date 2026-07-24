import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Landing from "@/pages/landing";
import Philosophy from "@/pages/philosophy";
import Video from "@/pages/video";
import Support from "@/pages/support";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import VoiceSamples from "@/pages/voice-samples";
import VideoPlan from "@/pages/video-plan";
import Security from "@/pages/security";
import AiPage from "@/pages/ai";
import Blog from "@/pages/blog";
import PostWhyEmail from "@/pages/blog/why-email-became-your-second-job";
import Roadmap from "@/pages/roadmap";
import IntelligentAutomation from "@/pages/roadmap/intelligent-automation";
import MultiLanguage from "@/pages/roadmap/multi-language";
import UpdatedAiModels from "@/pages/roadmap/updated-ai-models";
import UnifiedInbox from "@/pages/roadmap/unified-inbox";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/philosophy" component={Philosophy} />
      <Route path="/video" component={Video} />
      <Route path="/support" component={Support} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/voice-samples" component={VoiceSamples} />
      <Route path="/video-plan" component={VideoPlan} />
      <Route path="/security" component={Security} />
      <Route path="/ai" component={AiPage} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/why-email-became-your-second-job" component={PostWhyEmail} />
      <Route path="/roadmap" component={Roadmap} />
      <Route path="/roadmap/intelligent-automation" component={IntelligentAutomation} />
      <Route path="/roadmap/multi-language" component={MultiLanguage} />
      <Route path="/roadmap/updated-ai-models" component={UpdatedAiModels} />
      <Route path="/roadmap/unified-inbox" component={UnifiedInbox} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
