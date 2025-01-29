import {ErrorBoundary} from 'react-error-boundary';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {TemplateFooter} from './template/Footer/TemplateFooter';
import {TemplateHeader} from './template/Header/TemplateHeader';
import {TemplatePage} from './template/Page/TemplatePage';
import {AppContext, useStore} from "@/effects/useStore.tsx";

function App() {
    const {appState, setAppState} = useStore();

    return (
        <ErrorBoundary fallbackRender={({error}) => <div>{error.message}</div>}>
            <AppContext.Provider value={{appState, setAppState}}>
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
