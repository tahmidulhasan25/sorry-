const envelopeWrapper = document.getElementById('envelopeWrapper');
let isOpen = false;

// Touch/Click support for both mobile swipe and click
let startY = 0;

envelopeWrapper.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
});

envelopeWrapper.addEventListener('touchend', (e) => {
    let endY = e.changedTouches[0].clientY;
    if (startY - endY > 30) { // Swipe Up detection
        toggleEnvelope();
    }
});

envelopeWrapper.addEventListener('click', () => {
    toggleEnvelope();
});

function toggleEnvelope() {
    const envelope = document.querySelector('.envelope');
    if (!isOpen) {
        envelope.classList.add('open');
        setTimeout(() => {
            envelopeWrapper.classList.add('slide-up');
        }, 300);
        isOpen = true;
    } else {
        envelopeWrapper.classList.remove('slide-up');
        setTimeout(() => {
            document.querySelector('.envelope').classList.remove('open');
        }, 400);
        isOpen = false;
    }
}