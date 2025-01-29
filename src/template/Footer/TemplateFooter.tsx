import classNames from 'classnames';

import styles from './index.module.css';

export type TTemplateFooterProps = {
    
};

export const TemplateFooter = ({}: TTemplateFooterProps) => {
    return (
        <footer className={classNames(styles.Footer, '__screen-only')}>
            <h1>Footer</h1>
        </footer>
    );
};
