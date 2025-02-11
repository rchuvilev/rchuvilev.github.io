import classNames from "classnames";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card";
import sharedStyles from "@/components/styles.shared.module.css";
import styles from "./index.module.css";
import {Checkbox} from "@/components/ui/checkbox.tsx";
import {Label} from "@/components/ui/label.tsx";

export type TCareerProps = {};

export type TCareerItem = {
    optional?: boolean;
    link?: string;
    title: string;
    company: string;
    location?: string;
    dates: string;
    description: [string] | [[string, string]] & any;
    product?: string;
    stack?: string;
    additional?: string;
};

const careerItems: TCareerItem[] = [
    {
        title: 'Senior Software Engineer',
        company: 'Arkadium Inc',
        dates: 'Apr, 2024 - Present',
        description: [
            `Improved team\'s typescript usage and managed project\'s testing strategy. Runtime errors reduced by 85% according to Sentry logs.`,
            `Led the Design system migration to separate front-end micro-service providing no-release edits/fixes delivery. UI hot updates with 1/2 day time to live including QA.`,
            `In coop with staff engineers increased core web vitals to 90, improved UI for high accessibility certification passed. User retention 20% up according to App Insights analytics from Data Team.`,
        ],
        product: 'https://zone.msn.com/en',
        stack: 'NextJS 14, React 18, Effector, Strapi CMS, Sentry, App Insights, Jest, Testing Library, Playwright',
        additional: '',
    },
    {
        title: 'Software Engineer',
        company: 'Arkadium Inc',
        dates: 'Jun 2021 - Mar 2023',
        description: [
            `Stabilized platform handling 150+ client\'s game-sites. Evolved flagship site with enhanced analytics, community features, games rendering optimization. Added modules-based approach.`,
        ],
        product: 'https://www.arkadium.com/ https://edition.cnn.com/games https://games.washingtonpost.com/ https://www.gamelab.com/',
        stack: 'React 16, Redux, SASS, PostCSS, Webpack, Custom Node.js servers, Jest, Enzyme, App Insights',
        additional: '',
    },
    {
        title: 'Frontend Software Engineer',
        company: 'Sberbank JSC',
        dates: 'Aug 2020 - Jun 2021',
        description: [
            'Developed several sub-platforms for customer groups on the bank portal. Mentored younger devs.',
        ],
        product: 'https://megamarket.ru/landing/green-day/ https://www.sberbank.com/ru/svoedelo/start',
        stack: 'NextJs, Gatsby, React 16, Redux, SASS, PostCSS, Webpack, Jest, Enzyme',
        additional: '',
    },
    {
        title: 'Frontend Lead Developer',
        company: 'Sberbank JSC',
        dates: 'Dec 2019 - Jul 2020',
        description: [
            `Migrated UI to Design system kit. Integrated protected bank APIs. Supported QA and DEV teams with tools.`,
        ],
        product: 'https://www.sberbank.ru/en/s_m_business',
        stack: 'Backbase, React 16, Redux, SASS, PostCSS, Webpack, Jest, Enzyme... Electron',
        additional: '',
    },
    {
        title: 'Frontend Upper Developer',
        company: 'StackSoft LLC',
        dates: 'Aug 2019 - Dec 2019',
        description: [
            'Added customization layer to CRM. Migrated features to React 15. Delivered internal API tool. Worked with client, implemented requested features on UI and Service layers.',
        ],
        product: '',
        stack: 'Python/Django, HTML, CSS, JS, jQuery, React 15',
        additional: '',
    },
    {
        title: 'Frontend Developer',
        company: 'StackSoft LLC',
        dates: 'Jul 2018 - Aug 2019',
        description: [
            'Reduced tech debt by 50% with refactoring of legacy. Delivered UI/UX improving features.',
        ],
        product: '',
        stack: 'Python/Django, HTML, CSS, JS, jQuery, jQueryUI',
        additional: '',
    },
    {
        title: 'Frontend Junior Developer',
        company: 'StackSoft LLC',
        dates: '2018 - Jul 2018',
        description: [
            'Fixed bugs, implemented features (c) 🙂'
        ],
        product: 'https://onyma.ru/en/',
        stack: 'Python/Django, HTML, CSS, JS, jQuery',
        additional: '',
    },
    {
        optional: true,
        title: 'Webmaster',
        company: 'Freelance',
        dates: 'Dec 2013 - Jun 2018',
        description: [
            'Common web development tasks. Websites, landing pages, deployments, CMS setups, etc.',
        ],
        product: '',
        stack: 'HTML, CSS, Vanilla JS, jQuery, Sass/Less, Jade/Pug, Grunt/Gulp, PHP, WordPress, Joomla',
        additional: '',
    },
];

export const CvCareer = ({}: TCareerProps) => {
    return (
        <section className={classNames(sharedStyles.Section, styles.CvCareer)}>
            <h3>Employment History</h3>
            {careerItems.map((item, index) => {
                const job = `${item.title} at ${item.company}${item?.location ? `, ${item.location}` : ''}`;
                const dates = `${item.dates}`;
                const description = () => (
                    <>
                        {item.description?.length > 0 && <p className={classNames('__screen-only')}><strong>Achievements:</strong></p>}
                        {item.description.map((descr: string[], i: number) => (
                            <div
                                key={`achievement-${index}-${item.company}-${i}`}
                                className={classNames("flex items-center space-x-2", styles.Achievement)}
                            >
                                <Checkbox
                                    className={classNames(styles.AchievementCheckbox)}
                                    disabled={true}
                                    checked={true}
                                />
                                <Label className={classNames(styles.AchievementLabel)}>
                                    {descr}
                                </Label>
                            </div>
                        ))}
                    </>
                );
                const product = item.product ?? '';
                const products = product.split(' ');
                const stack = item.stack ?? '';
                const additional = () => (
                    item.additional ?? '').split('\n').map((item, i) => <p
                        key={`job-${index}-additional-${i}`}
                        className={classNames(styles.CardAdditipnalP)}
                    >
                        {item}
                    </p>
                );
                const hasBreak = index === 0 || item.company !== careerItems[index - 1]?.company;
                const company = hasBreak ? item?.company ?? '' : '';
                return (
                    <>
                        {hasBreak && company &&
                            <h5 className={classNames(styles.CompanyBreak, {['__screen-only']: item.optional})}>~~{company}~~</h5>
                        }
                        <Card key={`job-article-${index}`}
                              className={classNames(styles.Card, {'__screen-only': item.optional})}>
                            <CardHeader className={classNames(styles.CardHeader)}>
                                <CardTitle className={classNames(styles.CardTitle)}>{job}</CardTitle>
                                <CardDescription
                                    className={classNames(styles.CardDescription)}>{dates}</CardDescription>
                            </CardHeader>
                            <CardContent className={classNames(styles.CardContent)}>
                                {product &&
                                    <p className={classNames('__screen-only')}><i><strong>Product(s):&nbsp;</strong></i>
                                    </p>}
                                {product && (
                                    <p className={classNames('__screen-only')}><i>{products.map((prodLink: string) => prodLink && (
                                        <a href={prodLink} target="_blank" rel="noopener noreferrer">{prodLink}</a>
                                    ))}</i></p>
                                )}
                                {description()}
                                {stack && <><p><i><strong>Stack:&nbsp;</strong>{stack}</i></p></>}
                            </CardContent>
                            {additional?.length || 0 >= 0 && (
                                <CardFooter className={classNames('__screen-only', styles.CardFooter)}>
                                    {...additional()}
                                </CardFooter>
                            )}
                        </Card>
                    </>
                );
            })}
        </section>
    )
        ;
};
