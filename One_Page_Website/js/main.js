//! Get modal container and elements
const modal = document.getElementById("lightbox-modal");
const modalImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

//! Get all image thumbnails on the page
const thumbnails = document.querySelectorAll(".lightbox-thumb");

//! This variable keeps track of which image we're viewing
let currentIndex = 0;

//! When user clicks a thumbnail, open modal and show large image
thumbnails.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    modal.style.display = "flex"; // show modal
    modalImg.src = thumb.getAttribute("data-large"); // load full-size image
    currentIndex = index; // update current image index
  });
});

//! Close the modal when "X" is clicked
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

//! Also close modal when clicking outside the image area
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

//! Show the next image in the gallery
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % thumbnails.length;
  const nextImg = thumbnails[currentIndex].getAttribute("data-large");
  modalImg.src = nextImg;
});

//! Show the previous image in the gallery
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
  const prevImg = thumbnails[currentIndex].getAttribute("data-large");
  modalImg.src = prevImg;
});
