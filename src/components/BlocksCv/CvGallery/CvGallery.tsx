import {useEffect} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'
import styles from './index.module.css';
import sharedStyles from '@/components/styles.shared.module.css';
import {Badge} from "@/components/ui/badge.tsx";
import classNames from "classnames";


export type TCvGalleryProps = {};
type TSlide = {
    imageUrl?: string;
    badge?: string;
    href?: string;
    resize?: boolean;
};
const slides: TSlide[] = [
    {
        imageUrl: '/assets/cv/feedback4.png',
        badge: 'From ex-Arkadium, Amazon',
        href: 'https://www.linkedin.com/in/atvdev/'
    },
    {
        imageUrl: '/assets/cv/feedback2.png',
        badge: 'From ex-Yandex, VK Cloud',
        href: 'https://www.linkedin.com/in/pws21/'
    },
    {
        imageUrl: '/assets/cv/feedback1.png',
        badge: 'From feelance forged friend',
        href: 'https://www.linkedin.com/in/ivan-verkhoturov-181303124/'
    },
    {
        imageUrl: '/assets/cv/feedback3.png',
        badge: 'Productivity and team play',
        // href: 'https://recognizeapp.com/recognitions/fpqjjgc',
        resize: true,
    },
];

export const CvGallery = ({}: TCvGalleryProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true}, [Autoplay()]);

    useEffect(() => {
        emblaApi && emblaApi.slideNodes();
    }, [emblaApi]);

    const Slide = ({imageUrl, badge, href, resize}: TSlide) => imageUrl && (
        <a
           className={classNames(styles.embla__slide, 'inverted', {
               [styles.embla__slide__nolink]: !href && !imageUrl,
               [styles.embla__slide__resize]: resize,
           })}
           href={href ?? imageUrl}
           target="_blank"
           style={{['--image-url' as any]: `url(${imageUrl})`}}
        >
            {badge && <Badge className={classNames(styles.Badge)} variant={"outline"}>{badge}</Badge>}
            {!resize && <img className={styles.Image} src={imageUrl} alt="feedback"/>}
        </a>
    );

    return (
        <section className={classNames(sharedStyles.Section, '__screen-only')}>
            <h3 className={classNames(styles.embla__title, sharedStyles.SectionTitle)}>Recommendations</h3>
            <div className={classNames(styles.embla)} ref={emblaRef}>
                <div className={classNames(styles.embla__container)}>
                    {slides.filter(data => !!data.imageUrl).map((slide, index) => (
                        <Slide key={index} {...slide} />
                    ))}
                </div>
            </div>
        </section>
    );
};
