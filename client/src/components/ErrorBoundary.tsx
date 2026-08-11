import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ errorInfo });
    console.error("React render error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: "100vh",
            background: "#0F172A",
            color: "#F1F5F9",
            fontFamily: "monospace",
            padding: "40px 24px",
            boxSizing: "border-box",
          }}
        >
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <div
              style={{
                background: "#7F1D1D",
                border: "1px solid #EF4444",
                borderRadius: 8,
                padding: "16px 20px",
                marginBottom: 24,
              }}
            >
              <strong style={{ color: "#FCA5A5", fontSize: "1.1rem" }}>
                ⚠ Application Error
              </strong>
            </div>
            <pre
              style={{
                background: "#1E293B",
                border: "1px solid #334155",
                borderRadius: 8,
                padding: 20,
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                fontSize: "0.85rem",
                color: "#F87171",
                marginBottom: 16,
              }}
            >
              {this.state.error?.toString()}
            </pre>
            {this.state.errorInfo && (
              <pre
                style={{
                  background: "#1E293B",
                  border: "1px solid #334155",
                  borderRadius: 8,
                  padding: 20,
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                  fontSize: "0.75rem",
                  color: "#94A3B8",
                }}
              >
                {this.state.errorInfo.componentStack}
              </pre>
            )}
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
