import styles from './index.module.css';
import classNames from "classnames";

export type TCareerBlockProps = {

};

export const CareerBlock = ({}: TCareerBlockProps) => {
    return (
        <div className={classNames(styles.CareerBlock)}>
            <h1>CareerBlock</h1>
        </div>
    );
};
