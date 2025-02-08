import {StrictMode, useEffect} from 'react';
import {createRoot} from 'react-dom/client';
import {ErrorBoundary} from 'react-error-boundary';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {TemplateFooter} from '@/components/Template/Footer/TemplateFooter';
import {TemplateHeader} from '@/components/Template/Header/TemplateHeader';
import {TemplatePage} from '@/components/Template/Page/TemplatePage';
import {AppContext, useAppState} from "@/effects/useAppState.tsx";

import './index.css';
import {TemplateHelmet} from "@/components/Template/Helmet/Helmet.tsx";
import {useResize} from "@/effects/useResize.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
);

function App() {
    const {appState, setAppState} = useAppState();
    const [width, height] = useResize();
    useEffect(() => {
        setAppState({...appState, ...{isFancyMode: width > 1024}});
    }, [width, height]);

    return (
        <ErrorBoundary fallbackRender={({error}) => <div>{error.message}</div>}>
            <AppContext.Provider value={{appState, setAppState}}>
                <TemplateHelmet isDev={appState.isDev}/>
                <TemplateHeader/>
                {/*<BcgGlslPurple />*/}
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={(
                            <TemplatePage/>
                        )}/>
                    </Routes>
                </BrowserRouter>
                <TemplateFooter/>
            </AppContext.Provider>
        </ErrorBoundary>
    );
}

export default App;

