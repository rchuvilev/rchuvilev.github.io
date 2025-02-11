import classNames from 'classnames';

import styles from './index.module.css';
import {useContext} from "react";
import {AppContext, TAppContext} from "@/effects/useAppState.tsx";

export type TTemplateFooterProps = {
    
};

export const TemplateFooter = ({}: TTemplateFooterProps) => {
    const {appState} = useContext<TAppContext>(AppContext);
    const {featureToggleMetrics} = appState;
    return featureToggleMetrics && (
        <footer className={classNames(styles.Footer, '__screen-only')}>
            <h1>Footer</h1>
        </footer>
    );
};
