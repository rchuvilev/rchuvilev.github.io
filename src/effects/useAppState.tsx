import {createContext, useEffect, useState} from "react";

export type TAppState = {
    isDev: boolean;
    isDarkMode: boolean;
};

export const appStateInitial: TAppState = {
    isDev: window.location.hostname === 'localhost' || window.location.search.includes('devMode'),
    isDarkMode: localStorage?.getItem?.('darkScheme') === 'true' ? true : window?.matchMedia?.('(prefers-color-scheme: dark)')?.matches ?? false,
};


export type TAppContext = {
    appState: TAppState;
    setAppState: (state: TAppState) => void;
};

export const AppContext: React.Context<TAppContext> = createContext({
    appState: appStateInitial,
    setAppState: (state: TAppState) => { `${state}`},
});

const STATE_UPDATE_EVENT_NAME: string = `APP_STATE_UPDATE_${new Date().getTime()}`;
let STATE_UPDATE_QUEUE: TAppState = {...appStateInitial};
let STATE_UPDATE_TIMEOUT: any = null;

export const useAppState = () => {
    const [appState, setAppState] = useState<TAppState>(appStateInitial);
    const stateUpdate = (state: TAppState) => {
        window.dispatchEvent(new CustomEvent(STATE_UPDATE_EVENT_NAME, {detail: {...state}}));
    }
    const stateUpdateHandler = (e: Event) => {
        STATE_UPDATE_QUEUE = {...STATE_UPDATE_QUEUE, ...(e as CustomEvent).detail};
        if (STATE_UPDATE_TIMEOUT) {
            clearTimeout(STATE_UPDATE_TIMEOUT);
        }
        STATE_UPDATE_TIMEOUT = setTimeout(() => {
            setAppState({...appState, ...STATE_UPDATE_QUEUE});
        }, 10);
    }
    useEffect(() => {
        window.addEventListener(STATE_UPDATE_EVENT_NAME, stateUpdateHandler);
        return () => {
            window.removeEventListener(STATE_UPDATE_EVENT_NAME, stateUpdateHandler);
        }
    }, []);
    return {appState, setAppState: stateUpdate};
}
