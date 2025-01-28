import {createContext, useState} from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {TemplateFooter} from './template/Footer/TemplateFooter';
import {TemplateHeader} from './template/Header/TemplateHeader';
import {TemplatePage} from './template/Page/TemplatePage';

export type TAppState = {};

export type TAppContext = {
    appState: TAppState;
    setAppState: (state: TAppState) => void;
};

const appStateInitial: TAppState = {};


function App() {
    const [appState, setAppState] = useState<TAppState>(appStateInitial);
    const AppContext = createContext({appState, setAppState});

    return (
        <ErrorBoundary fallbackRender={({error}) => <div>{error.message}</div>}>
            <AppContext.Provider value={{appState, setAppState}}>
                <TemplateHeader/>
                <TemplatePage>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<></>}/>
                            <Route path="/login" element={<></>}/>
                            <Route path="/register" element={<></>}/>
                        </Routes>
                    </BrowserRouter>
                </TemplatePage>
                <TemplateFooter/>
            </AppContext.Provider>
        </ErrorBoundary>
    );
}

export default App;
