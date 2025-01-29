import styles from './index.module.css';
import {MenuButton} from "@/components/MenuButton/MenuButton.tsx";
import {ModeButton} from "@/components/ModeButton/ModeButton.tsx";
import classNames from "classnames";
import {LucideLinkedin, LucidePrinter} from "lucide-react";

export type THomePageTopButtonsProps = {

};

export const HomePageTopButtons = ({}: THomePageTopButtonsProps) => {
    return (
        <div className={classNames(styles.TopButtons, '__screen-only')}>
            <MenuButton text={'LinkedIn'} href={'https://www.linkedin.com/in/rchuvilev/'} icon={<LucideLinkedin style={{transform: 'scale(1.2)'}} />}/>
            <MenuButton text={'Print CV'} onClick={() => window?.print()} icon={<LucidePrinter />}/>
            <ModeButton />
        </div>
    );
};
