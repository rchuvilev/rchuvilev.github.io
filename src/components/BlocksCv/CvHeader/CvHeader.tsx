import {LucideLinkedin, LucideMailbox, LucideMapPin, LucideMessageCircle, LucidePhoneCall} from 'lucide-react';
import styles from './index.module.css';
import classNames from "classnames";
import {CvQrButtons} from "@/components/BlocksCv/CvQrButtons/CvQrButtons.tsx";


export type TCvHeaderProps = {};

export const CvHeader = ({}: TCvHeaderProps) => {
    return (
        <div className={classNames(styles.CvHeader)}>
            <div className={classNames(styles.Photo, 'inverted')} />
            <div className={styles.Info}>
                <h1 className={styles.Name}>Roman Chuvilev</h1>
                <h2 className={styles.Role}>Frontend Developer</h2>
                <ul className={styles.Contacts}>
                    <li><a href={"https://wikipedia.org"}><LucideMapPin className={'.__mobile-only'}/>
                        <span className={'.__desktop-only'}>Tbilisi</span></a></li>
                    <li><a href={"mailto:rchuvilev@gmail.com"}><LucideMailbox className={'.__mobile-only'}/>
                        <span className={'.__desktop-only'}>rchuvilev@gmail.com</span></a></li>
                    <li><a href={"mailto:rchuvilev@gmail.com"}><LucidePhoneCall className={'.__mobile-only'}/>
                        <span className={'.__desktop-only'}>+995558214364</span></a></li>
                    <li><a href={"mailto:rchuvilev@gmail.com"}><LucideMessageCircle className={'.__mobile-only'}/>
                        <span className={'.__desktop-only'}>@rchuvilev</span></a></li>
                    <li><a href={"mailto:rchuvilev@gmail.com"}><LucideLinkedin className={'.__mobile-only'}/>
                        <span className={'.__desktop-only'}>LinkedIn</span></a></li>
                </ul>
            </div>
            <div className={styles.QrOrBtns}>
                <CvQrButtons />
                <div className={classNames(styles.QrCode, '__print-only')} >
                    <p>Don't type,</p>
                    <img src="/assets/cv/qr.svg"/>
                    <p>Interact! 😎</p>
                </div>
            </div>
        </div>
    );
};
