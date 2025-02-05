 document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll("ul li, p, h1, h2, h3, h4, h5, h6, img, button");

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
      let scrolling = 0;
      let scrollFlag = 1;

      function scrollEvent(event) {
        if (event.deltaY < 0) {
          if (scrolling !== 0) {
            scrolling += 100;
            document.getElementById(
              "wrapper"
            ).style.transform = `translateY(${scrolling}vh)`;
          }
        } else if (event.deltaY > 0) {
          if (scrolling > -300) {
            scrolling -= 100;
            document.getElementById(
              "wrapper"
            ).style.transform = `translateY(${scrolling}vh)`;
          }
        }
      }

      window.addEventListener("wheel", function (event) {
        if (scrollFlag === 1) {
          setTimeout(() => {
            scrollEvent(event);
            scrollFlag = 1;
          }, 600);
          scrollFlag = 0;
        }
 });
