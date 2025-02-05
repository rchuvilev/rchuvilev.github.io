import styles from './index.module.css';
import {MenuButton} from "@/components/MenuButton/MenuButton.tsx";
import {ModeButton} from "@/components/ModeButton/ModeButton.tsx";
import classNames from "classnames";
import {LucidePrinter} from "lucide-react";

export type TCvTopButtonsProps = {

};

export const CvTopButtons = ({}: TCvTopButtonsProps) => {
    return (
        <div className={classNames(styles.TopButtons, '__screen-only')}>
            <ModeButton />
            <MenuButton text={'Print CV'} onClick={() => window?.print()} icon={<LucidePrinter />}/>
        </div>
    );
};
