import styles from './index.module.css';
import classNames from "classnames";
import {CvGallery} from "@/components/BlocksCv/CvGallery/CvGallery.tsx";

export type TCvProcrastinate = {};

export const CvProcrastinate = ({}: TCvProcrastinate) => {
    return (
        <div className={classNames(styles.CvProcrastinate, '__screen-only')}>
            <div className={styles.div1}><CvGallery /></div>
            <div className={styles.div5}><CvGallery /></div>
            <div className={styles.div7}><CvGallery /></div>
            <div className={styles.div8}><CvGallery /></div>
            <div className={styles.div9}><CvGallery /></div>
        </div>
    );
};
