import classNames from 'classnames';

import styles from './index.module.css';
import {useLocation} from "react-router-dom";
import {PageAccessDenied} from "@/pages/AccessDenied/PageAccessDenied.tsx";
import {PageHome} from "@/pages/Home/PageHome.tsx";
import {useContext} from "react";
import {AppContext, TAppContext} from "@/effects/useStore.tsx";

export type TTemplatePageProps = {

};

export const TemplatePage = ({}: TTemplatePageProps) => {
    const { appState } = useContext<TAppContext>(AppContext);
    const { isDarkMode } = appState;
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const accessGranted = params.get('accessGranted') !== null;
    return (
        <main className={classNames(styles.Page, {__dark: isDarkMode})}>
            {accessGranted ? <PageHome/> : <PageAccessDenied/>}
        </main>
    );
};
