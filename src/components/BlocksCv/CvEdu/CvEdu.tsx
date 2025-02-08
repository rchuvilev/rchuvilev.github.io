import styles from './index.module.css';
import classNames from "classnames";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion.tsx";

export type TCvEduProps = {};

type TEduData = {
    text: string;
    imageUrl?: string;
    link?: string;
}

const eduData: TEduData[] = [
    {
        text: 'January 2025, Road to Next course (Robin Wieruch)',
        imageUrl: 'https://media.licdn.com/dms/image/v2/D4D2DAQHdNWLGXZNTqw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1738604861855?e=1739588400&v=beta&t=tK57R-c8EwX8FTvmAx9KijSQd7qPvVwUv_9FBOnnxAs',
        link: 'https://www.road-to-next.com/',
    },
    {
        text: 'December 2024, Road to React course (Robin Wieruch)',
        imageUrl: 'https://media.licdn.com/dms/image/v2/D4D2DAQHP9nrNJGhnLg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1738604157309?e=1739588400&v=beta&t=80in5nuHXqP55gkNhzlbMWAS1Nx-X64bB4EjEybMSK8',
        link: 'https://www.roadtoreact.com/',
    },
    {
        text: 'April 2021, Agile and Scrum course, SberUniversity',
        imageUrl: '',
    },
    {
        text: 'January 2020, QA essentials, Course, SberUniversity',
        imageUrl: 'https://media.licdn.com/dms/image/v2/D4D2DAQEhux4AwGM3cg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1738603156236?e=1739588400&v=beta&t=AUqQwDFdVus19MNp2PpANwvbSLqTH5emooXVvqy9-iw',
    },
    {
        text: 'January 2020, CI/CD essentials, Course, SberUniversity',
        imageUrl: 'https://media.licdn.com/dms/image/v2/D4D2DAQGjBLj6ZVMavw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1738603635209?e=1739588400&v=beta&t=-WgPypdPdKZcyZb7TOnEtUEsbekRnGVJO4xLKFyMlSY',
    },
    {
        text: 'January 2020, Source code analysis, Course, SberUniversity',
        imageUrl: 'https://media.licdn.com/dms/image/v2/D4D2DAQFeMILkY2-2VQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1738603312729?e=1739588400&v=beta&t=80dUbJP5WE31lyDFkNtHe6RpQylaYBI1tqyxfeqcxa8',
    },
    {
        text: 'January 2020, Data management, Course, SberUniversity',
        imageUrl: 'https://media.licdn.com/dms/image/v2/D4D2DAQFW-UNlcAkYXA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1738603476243?e=1739588400&v=beta&t=z4VZjy7WQXn1hLgTy3QDOE98jEecArQnaG18Nijaug4',
    },
    {
        text: 'January 2020, Digital management, Course, SberUniversity',
        imageUrl: 'https://media.licdn.com/dms/image/v2/D4D2DAQE7nDVsde3kLg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1738603002179?e=1739588400&v=beta&t=R_5CfHfAho6mrjfCSGcN_nLRB7XekneqnqiuJ4ZgMGc',
    },
    {
        text: 'January 2020, Digital security, Course, SberUniversity',
        imageUrl: 'https://media.licdn.com/dms/image/v2/D4D2DAQF9bxc9sBDjew/profile-treasury-image-shrink_1920_1920/profile-treasury-image-shrink_1920_1920/0/1738982648600?e=1739588400&v=beta&t=V8xs39_GvwAmI4EOnRqiDTCM4B7QMWmqiwDsJJYcQsM',
    },
    {
        text: 'January 2020, Digital skills, Course, SberUniversity',
        imageUrl: 'https://media.licdn.com/dms/image/v2/D4D2DAQHDtehPMJoNRg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1738977286996?e=1739588400&v=beta&t=Z6F95BgGCGc23A7JxBMIVxHdo_r-TIMRXr-E2GlSqlM',
    },
    {
        text: 'August 2019, React vs Angular vs Vue basics course (Maximilian Schwarzmüller)',
        imageUrl: 'https://img-c.udemycdn.com/course/240x135/1208638_2604.jpg',
    },
    {
        text: 'November 2018, Responsive web design (freeCodeCamp, Certification)',
        imageUrl: 'https://media.licdn.com/dms/image/v2/D4D2DAQG8DwdPXqB3dA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1738980559541?e=1739588400&v=beta&t=j6k53385rSugJj6dSbZJI7NW_cF1NeA4lCuIWzDpgLw',
        link: 'https://freecodecamp.org/certification/rchuvilev/responsive-web-design',
    },
    {
        text: 'August 2018, Javascript algorithms and data structures (freeCodeCamp, Certification)',
        imageUrl: 'https://media.licdn.com/dms/image/v2/D4D2DAQGTE7tzKnGMwQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1738980644827?e=1739588400&v=beta&t=gqm8ha9K0LDqk6pJECunsGQA6YkTzS8tCwnhrwvDYis',
        link: 'https://freecodecamp.org/certification/rchuvilev/javascript-algorithms-and-data-structures',
    },
    {
        text: 'May 2018, C# (Sololearn Certification)',
        imageUrl: 'https://blob.sololearn.com/certificates/d101d1d9-f6cf-491b-bda8-554b9057b605.png',
        link: 'https://www.sololearn.com/certificates/CT-3PKZGPKV',
    },
    {
        text: 'May 2018, C++ (Sololearn Certification)',
        imageUrl: 'https://blob.sololearn.com/certificates/fffa541c-b2d9-4ccf-a18f-b244fadd7fcb.png',
        link: 'https://www.sololearn.com/certificates/CT-LZAJZHQ3',
    },
    {
        text: 'May 2018, Ruby (Sololearn Certification)',
        imageUrl: 'https://blob.sololearn.com/certificates/ea4a41ad-c926-4fa0-b552-fdf4cb125715.png',
        link: 'https://www.sololearn.com/certificates/CT-CCQ5N2AF',
    },
    {
        text: 'May 2018, Swift (Sololearn Certification)',
        imageUrl: 'https://blob.sololearn.com/certificates/0c33bf15-99f7-4502-bbd2-7235f6a3edc1.png',
        link: 'https://www.sololearn.com/certificates/CT-FJLQHWU6',
    },
    {
        text: 'May 2018, SQL (Sololearn Certification)',
        imageUrl: 'https://blob.sololearn.com/certificates/c229ac3a-a0bc-4496-bd72-d7d109932f23.png',
        link: 'https://www.sololearn.com/certificates/CT-LLYYNVTF',
    },
    {
        text: 'November 2017, Python (Sololearn Certification)',
        imageUrl: 'https://blob.sololearn.com/certificates/1dcee407-b342-4a1c-9e30-7d637aec4d8a.png',
        link: 'https://www.sololearn.com/certificates/CT-GM9O7DEI',
    },
    {
        text: 'November 2017, PHP (Sololearn Certification)',
        imageUrl: 'https://blob.sololearn.com/certificates/5824bb47-50e3-4ab0-9f00-5d75ac9b0d07.png',
        link: 'https://www.sololearn.com/certificates/CT-LSBFQSHJ',
    },
    {
        text: 'October 2017, jQuery (Sololearn Certification)',
        imageUrl: 'https://blob.sololearn.com/certificates/4e7a4259-2d0a-4b92-9454-9a1bca78541d.png',
        link: 'https://www.sololearn.com/certificates/CT-D1J4CEBF',
    },
    {
        text: 'October 2017, Javascript (Sololearn Certification)',
        imageUrl: 'https://blob.sololearn.com/certificates/297b7fdb-95a3-4b94-99a2-298e1e79d6ea.png',
        link: 'https://www.sololearn.com/certificates/CT-PL0WHNCJ',
    },
    {
        text: 'October 2017, CSS (Sololearn Certification)',
        imageUrl: 'https://blob.sololearn.com/certificates/71a5ea10-5eec-4faf-a66f-32ce06ee9be5.png',
        link: 'https://www.sololearn.com/certificates/CT-FMELJHJS',
    },
    {
        text: 'June 2017, HTML (Sololearn Certification)',
        imageUrl: 'https://blob.sololearn.com/certificates/82e9ca83-a36f-4245-ba7d-445d5bf4e4e0.png',
        link: 'https://www.sololearn.com/certificates/CT-CKCGXRUJ',
    },
    {
        text: 'June 2017, Java (Sololearn Certification)',
        imageUrl: 'https://blob.sololearn.com/certificates/8bb164f0-23aa-4b38-bdf5-ee095162b776.png',
        link: 'https://www.sololearn.com/certificates/CT-PUDKI0HJ',
    },
    {
        text: 'July 2018 - August 2018, Personal time management, Mini-MBA, City Business School',
        imageUrl: 'https://media.licdn.com/dms/image/v2/C4E2DAQG0CPSfXQs1Nw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1601589037880?e=1739588400&v=beta&t=_gCQyDjhLQbNzuPJJ7VoV0liVkpZglAfoZJidc5BNYg',
        link: '',
    },
    {
        text: 'December 2013 - June 2018, Freelance projects',
        imageUrl: '',
    },
    {
        text: '2013, Professional retraining course, Synergy University, Web development.',
        imageUrl: '',
    },
    {
        text: '2004-2009, Moscow State Academy of Law, Diploma in EU law',
        imageUrl: '',
    },
];

export const CvEdu = ({}: TCvEduProps) => {

    return (
        <div className={classNames(styles.CvEdu)}>
            <h2>Continuous evolvement:</h2>
            <Accordion className={styles.Accordion} type="single" collapsible>
                {eduData.map((item: TEduData, index: number) => (
                    <AccordionItem className={styles.AccordionItem} value={`value-${index}`} key={`eduItem-${index}`}>
                        <AccordionTrigger
                            className={classNames(styles.AccordionTrigger, {[styles.__disabled]: !item.imageUrl})}
                        >
                            {item.text}
                        </AccordionTrigger>
                        <AccordionContent className={styles.AccordionContent} style={{['--image-url' as string]: `url(${item.imageUrl})`,}}>
                            <a
                                className={classNames(styles.CertificateLink, {[styles.__disabled]: !item.link})}
                                href={item.link ?? '#'}
                                target="_blank"
                                rel="noreferrer"
                                onClick={ev => !item.link && ev.preventDefault()}
                            ></a>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};
