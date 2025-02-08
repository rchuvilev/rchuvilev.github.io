import styles from './index.module.css';
import {MenuButton} from "@/components/Atoms/MenuButton/MenuButton.tsx";
import classNames from "classnames";
import {
    LucideConstruction,
    LucideMessageCircleQuestion,
    LucideMoonStar,
    LucideNotebookText,
    LucidePrinter,
    LucideSparkles,
    LucideSunMedium
} from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import {useContext} from "react";
import {AppContext, TAppContext} from "@/effects/useAppState.tsx";
import {useResize} from "@/effects/useResize.tsx";
import {ScrollArea} from "@/components/ui/scroll-area.tsx";

export type TCvQrButtonsProps = {

};

export const CvQrButtons = ({}: TCvQrButtonsProps) => {
    const { appState, setAppState } = useContext<TAppContext>(AppContext);
    const { isDarkMode, isFancyMode } = appState;
    const readText = isFancyMode ? 'To read mode' : 'To fancy mode';
    const readIcon = isFancyMode ? <LucideNotebookText /> : <LucideSparkles />;
    const schemeText = isDarkMode ? 'To light mode' : 'To dark mode';
    const schemeIcon = isDarkMode ? <LucideSunMedium /> : <LucideMoonStar />;
    const clickPrintHandler = () => window?.print();
    const clickReadHandler = () => {
        const next = !isFancyMode;
        setAppState({...appState, ...{isFancyMode: next}, ...{isDarkMode: !next && isDarkMode}});
    }
    const clickSchemeHandler = () => {
        localStorage.setItem('darkScheme', String(Boolean(!isDarkMode)));
        const next = !isDarkMode;
        setAppState({...appState, ...{isDarkMode: next, ...{isFancyMode: !next && appState.isFancyMode}}});
    };
    const [width] = useResize();
    const isMobile = width <= 1024;
    const procrastinateText = 'Procrastinate!';
    const procrastinateIcon = <LucideMessageCircleQuestion />;
    return (
        <div className={classNames(styles.CvQrButtons, '__screen-only')}>
            <MenuButton text={'Print CV'} onClick={clickPrintHandler} icon={<LucidePrinter />}/>
            {!isMobile && <MenuButton text={readText} onClick={clickReadHandler} icon={readIcon}/>}
            <MenuButton text={schemeText} onClick={clickSchemeHandler} icon={schemeIcon}/>
            <Dialog>
                <DialogTrigger>
                    <MenuButton text={procrastinateText} icon={procrastinateIcon}/>
                </DialogTrigger>
                <DialogContent className={styles.ProcrastinateModalContent}>
                    <ScrollArea className={classNames(styles.ProcrastinateModalScrollable, 'inverted')}>
                        <DialogHeader className={styles.ProcrastinateModalHeader}>
                            <DialogTitle className={styles.ProcrastinateModalTitle}>Some more facts about me </DialogTitle>
                            <DialogDescription className={styles.ProcrastinateModalDesct}>...if You have some time.</DialogDescription>
                        </DialogHeader>
                        <div><LucideConstruction/><h5>WIP...</h5></div>
                    </ScrollArea>
                </DialogContent>
            </Dialog>

        </div>
    );
};
