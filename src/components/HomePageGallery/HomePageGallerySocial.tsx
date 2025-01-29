import {useEffect} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'
import styles from './index.module.css';
import classNames from "classnames";

export type TGallerySocialProps = {

};

export const GallerySocial = ({}: TGallerySocialProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

    useEffect(() => {
        emblaApi && emblaApi.slideNodes();
    }, [emblaApi])

    return (
        <div className={classNames(styles.embla, '__screen-only')} ref={emblaRef}>
            <div className={styles.embla__container}>
                <div className={styles.embla__slide}>Slide 1</div>
                <div className={styles.embla__slide}>Slide 2</div>
                <div className={styles.embla__slide}>Slide 3</div>
            </div>
        </div>
    );
};
