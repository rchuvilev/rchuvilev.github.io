import styles from './index.module.css';
import {MenuButton} from "@/components/Atoms/MenuButton/MenuButton.tsx";
import classNames from "classnames";
import {LucidePrinter} from "lucide-react";

export type TCvQrButtonsProps = {

};

export const CvQrButtons = ({}: TCvQrButtonsProps) => {
    return (
        <div className={classNames(styles.CvQrButtons, '__screen-only')}>
            <MenuButton text={'Print CV'} onClick={() => window?.print()} icon={<LucidePrinter />}/>
        </div>
    );
};
