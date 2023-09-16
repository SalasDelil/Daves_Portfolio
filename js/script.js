const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function(e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX - 2}px`;
    cursorDot.style.top = `${posY - 2}px`;

    cursorOutline.animate({
        left: `${posX - 14}px`,
        top: `${posY - 14}px`
    }, {duration: 500, fill: 'forwards'})
})

document.addEventListener('click', () => {
    cursorOutline.classList.add('expand');
    setTimeout(() => {
        cursorOutline.classList.remove('expand');
    }, 500)
})

document.addEventListener('click', () => {
    cursorDot.classList.add('expand');
    setTimeout(() => {
        cursorDot.classList.remove('expand');
    }, 500)
})

// scroll sections
window.onscroll = () => {
    // STICKY HEADER
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
}
