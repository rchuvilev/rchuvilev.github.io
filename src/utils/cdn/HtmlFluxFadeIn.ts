const TO = 1000;
document.body.style.opacity = '0';
document.body.style.transition = `opacity ${TO}ms ease-in`;
window.addEventListener('load', () => {
    document.body.setAttribute('style', 'opacity: 1');
});
