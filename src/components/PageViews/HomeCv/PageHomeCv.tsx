import {CvHeader} from "@/components/BlocksCv/CvHeader/CvHeader.tsx";
import {CvGallery} from "@/components/BlocksCv/CvGallery/CvGallery.tsx";
import styles from "./index.module.css";
import classNames from "classnames";
import {CvProfile} from "@/components/BlocksCv/CvProfile/CvProfile.tsx";
import {CvCareer} from "@/components/BlocksCv/CvCareer/CvCareer.tsx";

export type TPageHomeProps = {};

export const PageHomeCv = ({}: TPageHomeProps) => {
    return (
        <>
            <CvHeader/>
            <div className={styles.FlexLayout}>
                <div className={classNames(styles.LayoutPart, styles.LeftSection)}>
                    <CvProfile />
                    <CvGallery />
                    <CvCareer />
                </div>
                <aside className={classNames(styles.LayoutPart, styles.RightAside)}>
                    <p>Cert</p>
                    <p>Cert</p>
                    <p>Cert</p>
                </aside>
            </div>
        </>
    );
};
