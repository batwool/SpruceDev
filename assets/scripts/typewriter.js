let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;
const speed = 100; // typing speed
const wait = 2000; // pause before deleting

function type(typewriter, typewriterText) {
    if (!typewriter) return;

    currentText = typewriterText[i];
    if (isDeleting) {
        typewriter.innerHTML = currentText.substring(0, j--);
    } else {
        typewriter.innerHTML = currentText.substring(0, j++);
    }

    if (!isDeleting && j === currentText.length) {
        isDeleting = true;
        setTimeout(() => type(typewriter, typewriterText), wait);
        return;
    }

    if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % typewriterText.length;
    }

    setTimeout(() => type(typewriter, typewriterText), isDeleting ? speed / 2 : speed);
}