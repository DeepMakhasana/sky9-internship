import React, { Component, ErrorInfo } from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error("Error caught by Error Boundary: ", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>Something went wrong.</h1>
          {this.props?.fallback && <p>Error: {this.props.fallback}</p>}
        </>
      );
    }

    return this.props.children;
  }
}
