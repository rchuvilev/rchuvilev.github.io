import {Button} from "@/components/ui/button.tsx";
import {LucideMoonStar, LucideSunMedium} from "lucide-react";
import styles from './index.module.css';
import {useContext} from "react";
import {AppContext, TAppContext} from "@/effects/useAppState.tsx";

export const ModeButton = () => {
    const { appState, setAppState } = useContext<TAppContext>(AppContext);
    const { isDarkMode } = appState;
    const clickHandler = () => {
        localStorage.setItem('darkScheme', String(Boolean(!isDarkMode)));
        setAppState({...appState, ...{isDarkMode: !isDarkMode}});

    };
    return (
        <Button className={styles.ModeButton} asChild={true} onClick={clickHandler}>
            {isDarkMode ? <LucideMoonStar stroke={'var(--color-link)'}/> : <LucideSunMedium stroke={'var(--color-link)'}/>}
        </Button>
    );
}
