import FingerprintJS from '@fingerprintjs/fingerprintjs';
import {detectIncognito} from 'detectincognitojs';
import {IBrowser, IEngine, IOS, UAParser} from 'ua-parser-js';

enum LS_KEYS {
    KYC = 'html_flux_kyc',
}

const LocalStorageKyc = {
    get: () => localStorage.getItem(LS_KEYS.KYC),
    set: (value: string) => localStorage.setItem(LS_KEYS.KYC, value),
};

type TFpData = {
    fpVisitorId: string | null,
    fpVisitorIdList: string[] | null,
    fpIncognito: boolean | null,
    fpBrowser: IBrowser["name"] | null,
    fpOs: IOS["name"] | null,
    fpDevice: 'device' | null,
    fpEngine: IEngine["name"] | null,
} | null;

let RESIZE_CHECK_TO: any = null;

(async function HtmlFluxKyc() {
    let kycStored: TFpData = null;
    try {
        kycStored = JSON.parse(LocalStorageKyc.get() as unknown as string);
    } catch (e) {
    }
    const fingerprintLoaded = await FingerprintJS.load();
    const fpVisitorId: string | null = (await fingerprintLoaded.get())?.visitorId ?? kycStored?.fpVisitorId?.[-1] ?? null;
    const fpIncognito: boolean | null = (await detectIncognito())?.isPrivate ?? kycStored?.fpIncognito ?? null;
    const uaParser: UAParser = new UAParser(window.navigator.userAgent);
    const fpBrowser: IBrowser["name"] | null = uaParser?.getBrowser()?.name ?? null;
    const fpOs: IOS["name"] | null = uaParser?.getOS()?.name ?? null;
    const fpEngine: IEngine["name"] | null = uaParser?.getEngine()?.name ?? null;
    const fpDevice: 'device' | null = uaParser?.getDevice()?.type
        ? 'device'
        : (
            fpOs?.toLocaleLowerCase() === 'android' || fpOs?.toLocaleLowerCase() === 'ios'
        ) ? 'device' : null;
    handleIsMobile(false);
    const fpData: TFpData = {
        fpVisitorIdList: Array.from(new Set([...(kycStored?.fpVisitorIdList ?? []), fpVisitorId])),
        fpVisitorId,
        fpIncognito,
        fpBrowser,
        fpDevice,
        fpEngine,
        fpOs,
    };
    !kycStored?.fpVisitorIdList?.length && document.documentElement.classList.add('__kyc-newcomer');
    localStorage && LocalStorageKyc.set(JSON.stringify(fpData));
    localStorage && fpData?.fpVisitorId && localStorage.setItem('fpVisitorId', fpData.fpVisitorId);
    const fpModClasses = Object.keys(fpData ?? {})
        .filter((key: string) => Boolean((fpData as any)?.[key]) && !key.startsWith('fpVisitorId'))
        .map((key: string) => ((fpData as any)?.[key] as unknown as string)?.split?.(' ')?.join?.('_')?.replace?.(/mobile_/gi, ''));
    document.documentElement.dataset.href = window.location.href;
    document.documentElement.classList.add(...fpModClasses
        .map((clsString: string) => `__kyc-${clsString.replace(/^fp/gi, '').toLocaleLowerCase()}`));
}());

function handleIsMobile(isRecursiveCall: boolean = true): void {
    let isMobile: boolean = fallbackDetection().isMobile;
    let isPortrait: boolean = fallbackDetection().isPortrait;
    const applyDetection = (isMobile: boolean, isPortrait: boolean) => {
        document.documentElement.classList.remove('__kyc-mobile');
        document.documentElement.classList.remove('__kyc-desktop');
        document.documentElement.classList.remove('__kyc-portrait');
        document.documentElement.classList.remove('__kyc-landscape');
        document.documentElement.classList.add(isMobile ? '__kyc-mobile' : '__kyc-desktop');
        document.documentElement.classList.add(isPortrait ? '__kyc-portrait' : '__kyc-landscape');
    }
    const addOnResizeCheck = () => {
        window.addEventListener('resize', () => {
            if (RESIZE_CHECK_TO) {
                clearTimeout(RESIZE_CHECK_TO);
            }
            RESIZE_CHECK_TO = setTimeout(() => {
                const { isMobile, isPortrait } = fallbackDetection();
                applyDetection(isMobile, isPortrait);
            });
        });
    };
    !isRecursiveCall && addOnResizeCheck();
    applyDetection(isMobile, isPortrait);
}

function fallbackDetection() {
    const dimensions: number[] = [window.innerWidth, window.innerHeight];
    const min: number = Math.min(...dimensions);
    // @ts-ignore
    const max: number = Math.max(...dimensions);
    return {
        isMobile: min < 768 && max < 1024,
        isPortrait: dimensions[0] < dimensions[1],
    }
}
