import {HomePageTopButtons} from "@/components/HomePageTopButtons/HomePageTopButtons.tsx";
import {HomePageHeader} from "@/components/HomePagHeader/HomePageHeader.tsx";
import {GallerySocial} from "@/components/HomePageGallery/HomePageGallerySocial.tsx";
import styles from "./index.module.css";
import classNames from "classnames";
import {BioBlock} from "@/components/HomePageBioBlock/HomePageBioBlock.tsx";
import {CareerBlock} from "@/components/HomePageCareerBlock/HomePageCareerBlock.tsx";

export type TPageHomeProps = {};

export const PageHome = ({}: TPageHomeProps) => {
    return (
        <>
            <HomePageTopButtons/>
            <HomePageHeader/>
            <div className={styles.FlexLayout}>
                <section className={classNames(styles.LayoutPart, styles.LeftSection)}>
                    <BioBlock />
                    <GallerySocial />
                    <CareerBlock />
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
