import styles from './index.module.css';
import classNames from "classnames";

export type TCvBioBlockProps = {

};

export const CvBioBlock = ({}: TCvBioBlockProps) => {
    return (
        <div className={classNames(styles.BioBlock)}>
            <h1>BioBlock</h1>
        </div>
    );
};
