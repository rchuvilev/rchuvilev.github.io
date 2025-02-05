import {ModeButton} from "@/components/Atoms/ModeButton/ModeButton.tsx";
import styles from './index.module.css';
import classNames from "classnames";

export type TTemplateHeaderProps = {};

export const TemplateHeader = ({}: TTemplateHeaderProps) => {
    return <header className={classNames(styles.TemplateHeader, '__screen-only')}>
        <ModeButton/>
    </header>;
};
