import {LucideLinkedin, LucideMailbox, LucideMapPin, LucideMessageCircle, LucidePhoneCall} from 'lucide-react';
import styles from './index.module.css';
import classNames from "classnames";
import {CvQrButtons} from "@/components/BlocksCv/CvQrButtons/CvQrButtons.tsx";
import {Separator} from "@/components/ui/separator.tsx";


export type TCvHeaderProps = {};

export const CvHeader = ({}: TCvHeaderProps) => {
    return (
        <>
            <div className={classNames(styles.CvHeader)}>
                <div className={classNames(styles.Photo, 'inverted')}/>
                <div className={styles.Info}>
                    <h1 className={styles.Name}>Roman Chuvilev</h1>
                    <h2 className={styles.Role}>Frontend Developer</h2>
                    <ul className={styles.Contacts}>
                        <li><a href={"https://en.wikipedia.org/wiki/Tbilisi"} target="_blank" rel="noopener noreferrer"><LucideMapPin/>
                            <span className={'__desktop-only'}>Tbilisi, Georgia</span></a></li>
                        <li><a href={"mailto:rchuvilev@gmail.com"} target="_blank"
                               rel="noopener noreferrer"><LucideMailbox/>
                            <span className={'__desktop-only'}>rchuvilev@gmail.com</span></a></li>
                        <li><a href={"tel:+995558214364"} target="_blank" rel="noopener noreferrer"><LucidePhoneCall/>
                            <span className={'__desktop-only'}>+995558214364</span></a></li>
                        <li><a href={"https://t.me/rchuvilev"} target="_blank"
                               rel="noopener noreferrer"><LucideMessageCircle/>
                            <span className={'__desktop-only'}>@rchuvilev</span></a></li>
                        <li><a href={"https://www.linkedin.com/in/rchuvilev/"} target="_blank"
                               rel="noopener noreferrer"><LucideLinkedin/>
                            <span className={'__desktop-only'}>rchuvilev</span></a></li>
                    </ul>
                </div>
                <div className={styles.QrOrBtns}>
                    <CvQrButtons/>
                    <div className={classNames(styles.QrCode, '__print-only')}>
                        <p>Don't type,</p>
                        <img src="/assets/cv/qr.svg"/>
                        <p>Interact! 😎</p>
                    </div>
                </div>
            </div>
            <Separator className={styles.HR}/>
        </>
    );
};
