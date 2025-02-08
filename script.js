        document.addEventListener("DOMContentLoaded", function () {
  const elements.forEach(el => observer.observe(el));
document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                entry.target.classList.add("fly-up"); // Fly out when leaving viewport
                entry.target.classList.remove("fly-back");
            } else {
                entry.target.classList.remove("fly-up"); // Fly back when scrolling up
                entry.target.classList.add("fly-back");
            }
        });
    }, { threshold: 0.4 }); // Triggers when 20% of the element is visible

    // Observe all elements inside sections
    document.querySelectorAll("section > *").forEach(element => {
        observer.observe(element);
    });
});
