import sharedStyles from '../../styles.shared.module.css';
import classNames from "classnames";

export type TCvProfileProps = {};

export const CvProfile = ({}: TCvProfileProps) => {
    return (
        <section className={classNames(sharedStyles.Section)}>
            <h3>Profile</h3>
            <p>
                Offering your product the expertise and support, 6+ years of commercial experience, 4+ years on high load
                applications projects. Can take care of both legacy code and brand new projects.
            </p>
            <p>
                Tech stack agnostic (main: vanilla JS, browser API, React, Sass/PostCSS, NextJS, Prisma + SQL, Strapi),
                can onboard and adapt to the project without significant time gap.
            </p>
            <p>
                Looking for remote role, expected compensation is $5500/mo/gross or equivalent. Can legally work in EU.
            </p>
        </section>
    );
};
