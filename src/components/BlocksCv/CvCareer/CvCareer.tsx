import styles from './index.module.css';
import classNames from "classnames";

export type TCareerProps = {

};

export const CvCareer = ({}: TCareerProps) => {
    return (
        <div className={classNames(styles.CvCareer)}>
            <h1>CareerBlock</h1>
        </div>
    );
};
