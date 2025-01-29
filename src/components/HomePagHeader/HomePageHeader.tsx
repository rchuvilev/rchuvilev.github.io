import styles from './index.module.css';
import classNames from "classnames";
import {LucideMailbox, LucideMapPin, LucideMessageCircle, LucidePhoneCall} from "lucide-react";

export type THomePageHeaderProps = {};

export const HomePageHeader = ({}: THomePageHeaderProps) => {
    return (
        <div className={classNames(styles.HomePageHeader)}>
            <table className={styles.Table}>
                <caption className={styles.TCaption}></caption>
                <thead></thead>
                <tbody className={styles.Tbody}>
                    <tr>
                        <td rowSpan={3} style={{backgroundColor: 'blue'}}><img width="30mm" height="40mm" alt={"photo"}/></td>
                        <td colSpan={6 - 2}><h1>Roman Chuvilev</h1></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td rowSpan={3} style={{backgroundColor: 'red'}}>QrOrMobLinksCOmp</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan={6 - 2}><h2>Frontend Engineer</h2></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><a href={"https://wikipedia.org"}><LucideMapPin className={'.__mobile-only'}/><span
                            className={'.__desktop-only'}>Tbilisi</span></a></td>
                        <td><a href={"mailto:rchuvilev@gmail.com"}><LucideMailbox className={'.__mobile-only'}/><span
                            className={'.__desktop-only'}>rchuvilev@gmail.com</span></a></td>
                        <td><a href={"mailto:rchuvilev@gmail.com"}><LucidePhoneCall className={'.__mobile-only'}/><span
                            className={'.__desktop-only'}>+995558214364</span></a></td>
                        <td><a href={"mailto:rchuvilev@gmail.com"}><LucideMessageCircle className={'.__mobile-only'}/><span
                            className={'.__desktop-only'}>@rchuvilev</span></a></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
