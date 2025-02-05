export const utilScriptLoad = (url: string, token?: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        const script: any = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        if (token) {
            script['data-ad-client'] = token;
        }
        if (script.readyState) {
            // IE
            script.onreadystatechange = () => {
                if (script.readyState === 'loaded' || script.readyState === 'complete') {
                    script.onreadystatechange = null;
                    resolve();
                }
            };
        } else {
            // Others
            script.onload = resolve;
            script.onerror = reject;
        }
        script.src = url;
        document.head.appendChild(script);
    });
};
