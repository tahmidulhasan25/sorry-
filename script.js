const envelopeWrapper = document.getElementById('envelopeWrapper');
const fullLetterOverlay = document.getElementById('fullLetterOverlay');
const closeBtn = document.getElementById('closeBtn');

let startY = 0;

// Touch and Click event handlers
envelopeWrapper.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
});

envelopeWrapper.addEventListener('touchend', (e) => {
    let endY = e.changedTouches[0].clientY;
    if (startY - endY > 30) { // Swipe Up detection
        openEnvelope();
    }
});

envelopeWrapper.addEventListener('click', () => {
    openEnvelope();
});

closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    closeEnvelope();
});

function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    envelope.classList.add('open');
    setTimeout(() => {
        fullLetterOverlay.classList.add('show');
    }, 400);
}

function closeEnvelope() {
    fullLetterOverlay.classList.remove('show');
    setTimeout(() => {
        document.querySelector('.envelope').classList.remove('open');
    }, 400);
}