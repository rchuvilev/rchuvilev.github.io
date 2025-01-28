import classNames from 'classnames';

import styles from './index.module.css';

export type TTemplateHeaderProps = {
    
};

export const TemplateHeader = ({}: TTemplateHeaderProps) => {
    return (
        <header className={classNames(styles.Header)}>
            Header
        </header>
    );
};
