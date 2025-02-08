import styles from './index.module.css';
import {MenuButton} from "@/components/Atoms/MenuButton/MenuButton.tsx";
import classNames from "classnames";
import {LucideNotebookText, LucidePrinter, LucideSparkles} from "lucide-react";
import {useContext} from "react";
import {AppContext, TAppContext} from "@/effects/useAppState.tsx";

export type TCvQrButtonsProps = {

};

export const CvQrButtons = ({}: TCvQrButtonsProps) => {
    const { appState, setAppState } = useContext<TAppContext>(AppContext);
    const { isDarkMode, isFancyMode } = appState;
    const readText = isFancyMode ? 'To read mode' : 'To fancy mode';
    const readIcon = isFancyMode ? <LucideNotebookText /> : <LucideSparkles />;
    const clickPrintHandler = () => window?.print();
    const clickReadHandler = () => {
        const next = !isFancyMode;
        setAppState({...appState, ...{isFancyMode: next}, ...{isDarkMode: !next && isDarkMode}});
    }
    return (
        <div className={classNames(styles.CvQrButtons, '__screen-only')}>
            <MenuButton text={'Print CV'} onClick={clickPrintHandler} icon={<LucidePrinter />}/>
            <MenuButton text={readText} onClick={clickReadHandler} icon={readIcon}/>
        </div>
    );
};
