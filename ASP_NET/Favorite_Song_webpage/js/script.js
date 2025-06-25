//! Select the box element by ID//
const box = document.getElementById('box');

//! Set starting position and movement direction//
let pos = 0;
let direction = 1;

//! Create an animation loop using requestAnimationFrame//
function animateBox() {
    //! Move the box horizontally by updating its left position//
    pos += direction * 2;
    box.style.left = pos + 'px';

    //! Reverse direction when hitting boundaries//
    if (pos > 300 || pos < 0) {
        direction *= -1;
    }

    //! Keep the animation going//
    requestAnimationFrame(animateBox);
}

//! Start the animation//
animateBox();

