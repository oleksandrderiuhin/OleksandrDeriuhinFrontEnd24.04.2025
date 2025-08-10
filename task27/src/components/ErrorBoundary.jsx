import { Component } from "react";

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary спіймав помилку:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h2>Упс! Щось пішло не так.</h2>;
        }
        return this.props.children;
    }
}
