import styles from './index.module.css';
import classNames from "classnames";

export type TBioBlockProps = {

};

export const BioBlock = ({}: TBioBlockProps) => {
    return (
        <div className={classNames(styles.BioBlock)}>
            <h1>BioBlock</h1>
        </div>
    );
};
