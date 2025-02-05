import {Button} from "@/components/ui/button.tsx";
import {SyntheticEvent} from "react";
import style from './index.module.css';

export type THeaderLinkProps = {
    text: string;
    href?: string;
    target?: '_blank' | '_self';
    isButton?: boolean;
    onClick?: () => void | false;
    icon?: React.ReactNode;
}
export const MenuButton = ({href, text, target, isButton, onClick, icon}: THeaderLinkProps) => (
    <Button className={style.HeaderButton} asChild={!isButton} onClick={() => onClick?.()}>
        {href ? (
            <a
                href={href}
                target={target ?? '_blank'}
                onClick={(ev: SyntheticEvent) => {
                    onClick && ev.preventDefault();
                    onClick && onClick();
                }}
            >
                {icon}{/*&nbsp;*/}{text}
            </a>
        ) : (
            <p
                onClick={(ev: SyntheticEvent) => {
                    onClick && ev.preventDefault();
                    onClick && onClick();
                }}>
                {icon}{/*&nbsp;*/}{text}
            </p>)}
    </Button>
);
