document.addEventListener("DOMContentLoaded", function () {
  // Select all text elements, images, and buttons
  const elements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, img, button");

  // Add the 'hidden' class to all selected elements
  elements.forEach((el) => el.classList.add("hidden"));

  // Set up Intersection Observer
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target); // Stops observing after animation runs
      }
    });
  }, { rootMargin: "0px 0px -10% 0px" });

  // Observe all elements
  elements.forEach((el) => observer.observe(el));
});
