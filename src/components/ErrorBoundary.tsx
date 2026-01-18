import { Component, ReactNode } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: any;
}

/**
 * Error Boundary Component
 * Catches React errors and displays a fallback UI
 * Prevents the entire app from crashing
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error("Error Boundary caught error:", error);
    console.error("Error info:", errorInfo);
    
    // Track error in analytics
    if ((window as any).trackEvent) {
      (window as any).trackEvent("error_boundary_triggered", {
        error: error.message,
        stack: error.stack?.substring(0, 200),
      });
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6">
          <div className="text-center glass-red p-12 rounded-3xl max-w-md border-2 border-red-500 brutalist-shadow">
            <AlertTriangle 
              className="w-16 h-16 mx-auto mb-6" 
              style={{ color: "#ff3737" }}
              aria-hidden="true"
            />
            <h2 className="mb-4">Something went wrong</h2>
            <p className="opacity-80 mb-6">
              We're really sorry about this. The page encountered an unexpected error. 
              Don't worry though - your data is safe, and we can fix this quickly.
            </p>
            {this.state.error && (
              <div className="mb-6 p-4 rounded-xl bg-black bg-opacity-30 border border-red-500 border-opacity-30">
                <p className="text-sm opacity-60 font-mono text-left break-words">
                  {this.state.error.message}
                </p>
              </div>
            )}
            <button
              onClick={this.handleReset}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border-2 border-red-500 hover:bg-red-500 hover:bg-opacity-20 transition-all duration-300 group"
              aria-label="Refresh the page"
            >
              <RefreshCw 
                className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" 
                aria-hidden="true"
              />
              Refresh Page
            </button>
            <p className="text-sm opacity-60 mt-6">
              If this keeps happening, please{" "}
              <a 
                href="mailto:hello@aigency.limited" 
                className="underline hover:opacity-100 transition-opacity"
                style={{ color: "#ff3737" }}
              >
                contact support
              </a>
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
