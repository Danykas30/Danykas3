 document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll("li, p, h1, h2, h3, h4, h5, h6, img, button");

  // Add the 'hidden' class to all elements initially
  elements.forEach(el => el.classList.add("hidden"));

  // Set up Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        entry.target.classList.remove("out-of-view");
      } else {
        entry.target.classList.add("out-of-view");
        entry.target.classList.remove("in-view");
      }
    });
  }, { threshold: 0.2 }); // Trigger when 20% of element is visible

  // Observe all elements
  elements.forEach(el => observer.observe(el));
  document.body.style.zoom="90%"
});
