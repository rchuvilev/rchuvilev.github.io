import styles from "./index.module.css";

export type TPageAccessDeniedProps = {

};

export const PageAccessDenied = ({}: TPageAccessDeniedProps) => {
    return (
        <main className={styles.PageAccessDenied}>
            <h1 className={styles.BasicText}>
                <p>Please use link from Your email or QR code.</p>
                <a
                    href={"https://www.linkedin.com/in/rchuvilev/"}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    ...or message me on LinkedIn
                </a>
                <a
                    href={"https://t.me/rchuvilev"}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    ...or in Telegram.
                </a>
            </h1>
        </main>
    );
};
