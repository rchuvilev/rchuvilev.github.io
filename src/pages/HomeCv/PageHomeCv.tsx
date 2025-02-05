import {CvHeader} from "@/components/CvHeader/CvHeader.tsx";
import {CvGallery} from "@/components/CvGallery/CvGallerySocial.tsx";
import styles from "./index.module.css";
import classNames from "classnames";
import {CvBioBlock} from "@/components/CvBioBlock/CvBioBlock.tsx";
import {CvCareerBlock} from "@/components/CvCareerBlock/CvCareerBlock.tsx";

export type TPageHomeProps = {};

export const PageHomeCv = ({}: TPageHomeProps) => {
    return (
        <>
            <CvHeader/>
            <div className={styles.FlexLayout}>
                <section className={classNames(styles.LayoutPart, styles.LeftSection)}>
                    <CvBioBlock />
                    <CvGallery />
                    <CvCareerBlock />
                </section>
                <aside className={classNames(styles.LayoutPart, styles.RightAside)}>
                    <p>Cert</p>
                    <p>Cert</p>
                    <p>Cert</p>
                </aside>
            </div>
        </>
    );
};
