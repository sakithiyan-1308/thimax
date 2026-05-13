import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

class WebGLErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("WebGL Context Error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <div className="w-full h-full flex flex-col items-center justify-center bg-onyx border border-white/10 rounded-xl p-6 text-center">
                    <AlertTriangle className="text-yellow-500 mb-2" size={32} />
                    <h3 className="text-white font-bold mb-1">3D View Unavailable</h3>
                    <p className="text-gray-400 text-sm">WebGL context was lost or blocked.</p>
                </div>
            );
        }

        return this.props.children;
    }
}

export default WebGLErrorBoundary;
