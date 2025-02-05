import {useEffect, useState} from "react";
import {Helmet} from "react-helmet";
import {utilMeasureFPS} from "@/utils/utilMeasureFPS.ts";
import footerStyles from "@/components/Template/Footer/index.module.css";

export type TTemplateHelmetProps = {
    isDev?: boolean;
};

export const TemplateHelmet = ({isDev}: TTemplateHelmetProps) => {
    const [mounted, setMounted] = useState<boolean>(false);
    useEffect(() => {
        setMounted(true);
        /*isDev && setTimeout(() => utilMeasureFPS(isDev, undefined, `.${footerStyles.Footer}`), 1250);*/
        setTimeout(() => utilMeasureFPS(true, undefined, `.${footerStyles.Footer}`), 2000);
    }, [isDev, mounted]);
    return (
        <Helmet>
            {isDev && <script src="https://unpkg.com/react-scan/dist/auto.global.js"/>}
        </Helmet>
    );
};
