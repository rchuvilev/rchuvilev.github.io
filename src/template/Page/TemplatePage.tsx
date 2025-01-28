import classNames from 'classnames';

import styles from './index.module.css';

export type TTemplatePageProps = {
    children: React.ReactNode;
};

export const TemplatePage = ({children}: TTemplatePageProps) => {
    return (
        <main className={classNames(styles.Page)}>
            {children}
        </main>
    );
};
