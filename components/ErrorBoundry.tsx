import React, { Component, ErrorInfo, ReactNode } from "react";
import DefaultErrorFallback from "./DefaultErrorFallback";

interface Props {
  children: ReactNode;
}

interface State {
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State;

  constructor(props) {
    super(props)

    // Define a state variable to track whether is an error or not
    this.state = {
      error: undefined
    }
  }

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.error) {
      return <DefaultErrorFallback />;
    }

    return this.props.children;
  }
}