import classNames from "classnames";
import sharedStyles from "@/components/styles.shared.module.css";
import styles from "./index.module.css";

export type TCareerProps = {};

export type TCareerItem = {
    optional?: boolean;
    story?: string;
    product?: string;
    link?: string;
    title: string;
    company: string;
    location?: string;
    dates: string;
    description: [string] | [[string, string]] & any;
    stack?: string;
    additional?: string;
};

const careerItems: TCareerItem[] = [
    {
        title: 'Senior Software Engineer',
        company: 'Arkadium Inc',
        dates: 'Apr, 2024 - Present',
        description: [
            [
                'Organized myself and lower grade devs with efficient team alignment and collaboration strategy.',
                '1 to 2 releases per sprint increase, average 3 to 1 Dev/QA iterations decrease.',
            ],
            [
                'Improved team\'s typescript usage and managed project\'s testing strategy.',
                'runtime errors reduced by 85% according to Sentry logs.',
            ],
            [
                'Led the Design system migration to separate front-end micro-service providing no-release edits/fixes delivery.',
                'UI hot updates with 1/2 day time to live including QA.',
            ],
            [
                'In coop with staff engineers increased core web vitals to 90, improved UI for high accessibility certification passed.',
                'User retention 20% up according to App Insights analytics from Data Team.',
            ],
        ],
        stack: 'NextJS 14, React 18, Strapi CMS',
        additional: '',
    },
    {
        title: 'Software Engineer',
        company: 'Arkadium Inc',
        dates: 'Jun 2021 - Mar 2023',
        description: [
            'Stabilized platform handling 150+ client\'s game-sites. Evolved flagship site with enhanced analytics, community features, games rendering optimization. Added modules-based approach.'
        ],
        stack: '',
        additional: '',
    },
    {
        title: 'Frontend Software Engineer',
        company: 'Sberbank JSC',
        dates: 'Aug 2020 - Jun 2021',
        description: [
            'Developed several sub-platforms for customer groups on the bank portal. Mentored middle devs.'
    ],
        stack: '',
        additional: '',
    },
    {
        title: 'Frontend Lead Developer',
        company: 'Sberbank JSC',
        dates: 'Dec 2019 - Jul 2020',
        description: [
            'Migrated UI to Design system kit. Integrated protected bank APIs. Supported QA with tools.',
        ],
        stack: '',
        additional: '',
    },
    {
        title: 'Frontend Upper Developer',
        company: 'StackSoft LLC',
        dates: 'Aug 2019 - Dec 2019',
        description: [
            'Added customization layer to CRM. Migrated features to React 15. Delivered internal API tool.\n' +
            'Worked with client, implemented requested features on UI and Service layers.',
        ],
        stack: '',
        additional: '',
    },
    {
        title: 'Frontend Developer',
        company: 'StackSoft LLC',
        dates: 'Jul 2018 - Aug 2019',
        description: [
            'Reduced tech debt by 50% with refactoring of legacy. Delivered UI/UX improving features.',
        ],
        stack: '',
        additional: '',
    },
    {
        title: 'Frontend Junior Developer',
        company: 'StackSoft LLC',
        dates: '2018 - Jul 2018',
        description: [
            'Product: Onyma CRM'
        ],
        stack: 'Python/Django, HTML, CSS, JS, jQuery, React 15',
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
        stack: 'HTML, CSS, Vanilla JS, jQuery, PHP, WordPress',
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
                const description = () => (item.description as unknown as [string[]] | [string])
                    .map((item: string | string[], i: number) => !Array.isArray(item)
                        ? (item as string).split('/n').map((line: string) => <p key={`job-${index}-description-${i}`}>{line}</p>)
                        : (<>
                                <p key={`descr-${i}`}>{item[0]}<strong>&nbsp;Output:&nbsp;</strong>{item[1]}</p>
                            </>)
                        );
                const stack = item.stack ?? '';
                const additional = () => (
                    item.additional ?? '').split('\n').map((item, i) => <p key={`job-${index}-additional-${i}`}
                                                                               className={classNames(styles.CardAdditipnalP)}>{item}</p>
                );
                const hasBreak = index === 0 || item.company !== careerItems[index - 1]?.company;
                return (
                    <>
                        {hasBreak && <h5 className={classNames(styles.CompanyBreak, {['__screen-only']: item.optional})}>~~{item.company}~~</h5>}
                        <article key={`job-article-${index}`} className={classNames(styles.Card, {'__screen-only': item.optional})}>
                            <header className={classNames(styles.CardHeader)}>
                                <h4 className={classNames(styles.CardTitle)}>{job}</h4>
                                <p className={classNames(styles.CardDescription)}>{dates}</p>
                            </header>
                            <div className={classNames(styles.CardContent)}>
                                {description()}
                                {stack && <><p><i><strong>Stack:&nbsp;</strong>{stack}</i></p></>}
                            </div>
                            {additional?.length || 0 >= 0 && (
                                <footer className={classNames('__screen-only', styles.CardFooter)}>
                                    {...additional()}
                                </footer>
                            )}
                        </article>
                    </>
                );
            })}
        </section>
    );
};
