import React from 'react';
import { AxiosError } from 'axios';
// import { ProductNotFoundError } from './components';

// eslint-disable-next-line no-shadow
export enum ErrorCode {
    NOT_FOUND = 'NOT_FOUND',
    INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
    GENERAL_ERROR = 'GENERAL_ERROR',
}

interface ErrorContextProps {
    errorCode?: ErrorCode;
    error?: Error;
    requestURL?: string;
}

interface ErrorContextState {
    errorCode?: ErrorCode;
    error?: Error;
    requestURL?: string;
}

export const ErrorContext = React.createContext<ErrorContextProps>({});
export const ErrorContextConsumer = ErrorContext.Consumer;
export class ErrorContextProvider extends React.Component<React.PropsWithChildren<any>, ErrorContextState> {
    private static hasError = false;

    constructor(props: React.PropsWithChildren<any>) {
        super(props);
        this.state = {};
    }

    static getDerivedStateFromError(error: Error | AxiosError): ErrorContextState {
        console.log('error', error);
        let errorCode: ErrorCode;
        let requestURL: string | undefined;
        if ('isAxiosError' in error && error.isAxiosError) {
            requestURL = error.config.url;
            const status = error.response?.status;
            errorCode = status === 404 ? ErrorCode.NOT_FOUND : ErrorCode.INTERNAL_SERVER_ERROR;
        // } else if (error instanceof ProductNotFoundError) {
        //     errorCode = ErrorCode.NOT_FOUND;
        } else {
            errorCode = ErrorCode.GENERAL_ERROR;
        }

        ErrorContextProvider.hasError = true;
        return { errorCode, error, requestURL };
    }

    componentDidCatch(): void {
        ErrorContextProvider.hasError = false;
    }

    render() {
        const { errorCode, error, requestURL } = this.state;
        const value: ErrorContextProps = ErrorContextProvider.hasError ? { errorCode, error, requestURL } : {};
        const { children } = this.props;
        return <ErrorContext.Provider value={value}>{children}</ErrorContext.Provider>;
    }
}
