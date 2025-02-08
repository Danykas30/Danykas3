document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a, ul, li, img, button");

  const revealOnScroll = () => {
    elements.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.85) {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Run on page load
});

