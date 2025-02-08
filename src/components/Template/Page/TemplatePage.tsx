import classNames from 'classnames';

import styles from './index.module.css';
import {useLocation} from "react-router-dom";
import {PageAccessDenied} from "@/components/PageViews/AccessDenied/PageAccessDenied.tsx";
import {PageHomeCv} from "@/components/PageViews/HomeCv/PageHomeCv.tsx";
import {useContext} from "react";
import {AppContext, TAppContext} from "@/effects/useAppState.tsx";
import {BcgGlslPurple} from "@/components/Widgets/BcgGlslPurple.tsx";

export type TTemplatePageProps = {};

export const TemplatePage = ({}: TTemplatePageProps) => {
    const {appState} = useContext<TAppContext>(AppContext);
    const {isDarkMode, isFancyMode} = appState;
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const accessGranted = params.get('accessGrantedBro') !== null;
    return (
        <>
            <main className={classNames(styles.Page, {__dark: isDarkMode, ['__glsl-on']: isFancyMode})}>
                {accessGranted ? <PageHomeCv/> : <PageAccessDenied/>}
            </main>
            <BcgGlslPurple/>
        </>
    );
};
