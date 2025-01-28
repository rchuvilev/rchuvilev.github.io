import classNames from 'classnames';

import styles from './index.module.css';
export type TTemplateFooterProps = {
    
};

export const TemplateFooter = ({}: TTemplateFooterProps) => {
    return (
        <footer className={classNames(styles.Footer)}>
            Footer
        </footer>
    );
};