import styles from './index.module.css';
import classNames from "classnames";

export type TImageProps = {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
};

export const Image = ({src, alt, width, height}: TImageProps) => {
    const originalSrc = src;
    const avifSrc = src.replace(/\.(.+)$/, '.avif');
    const style = {
        ['--width']: `${width}px`,
        ['--height']: `${height}px`,
    };
    return (
        // @ts-ignore
        <picture className={classNames(styles.Image)} style={style}>
            <source srcSet={avifSrc} type="image/avif" media="(min-width: 1px)"/>
            <img
                className={classNames(styles.ImageFallback)}
                src={originalSrc}
                alt={alt ?? ''}
                width={width}
                height={height}
            />
        </picture>
    );
};
