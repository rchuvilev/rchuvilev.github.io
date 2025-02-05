import {utilScriptLoad} from "@/utils/utilScriptLoad.ts";

export const utilMeasureFPS = async (isDev: boolean, cssSelectorTrack?: string, cssSelectorMount?: string) => {
    const urlParams = new URLSearchParams(window.location.search);
    if (isDev || urlParams.get('utilMeasureFPS') !== null || window.location.hostname === 'localhost') {
        utilScriptLoad('https://mrdoob.github.io/stats.js/build/stats.min.js').then(() => {
            if (document.getElementById('utilMeasureFPS')) {
                return;
            }
            const targetContainer = cssSelectorTrack
                ? document.documentElement.querySelector(cssSelectorTrack) ?? document.body
                : document.body;
            if (!targetContainer) {
                return;
            }
            const display = document.createElement('div');
            display.id = 'utilMeasureFPS';
            display.style.display = 'flex';
            display.style.flexDirection = 'row';
            display.style.flexWrap = 'nowrap';
            display.style.maxWidth = '100%';
            display.style.position = cssSelectorMount ? 'relative' : 'fixed';
            display.style.bottom = '0';
            display.style.right = '0';
            display.style.zIndex = '999';
            display.style.userSelect = 'none';
            display.style.pointerEvents = 'none';
            display.style.backgroundColor = 'transparent';
            display.style.transform = cssSelectorMount ? 'none !important' : 'scale(2) translate(-25%, -25%)';
            display.classList.add('inverted');
            display.draggable = false;
            [0, 1, 2].forEach((panel) => {
                // @ts-ignore
                const stats = new Stats();
                stats.showPanel(panel);
                stats.domElement.style.position = 'relative';
                display.appendChild(stats.domElement);
                requestAnimationFrame(function loop() {
                    stats.update();
                    requestAnimationFrame(loop);
                });
            });
            cssSelectorMount && document.documentElement.querySelector(cssSelectorMount)?.appendChild(display);
            !cssSelectorMount && document.documentElement.appendChild(display);
        });
    }
};
