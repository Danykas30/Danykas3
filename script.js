document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");  // Element flies in
            } else {
                entry.target.classList.remove("in-view"); // Element flies out
            }
        });
    }, { threshold: 0.2 }); // Triggers when 20% of the element is visible

    // Observe all elements (no need for specific classes or IDs)
    document.querySelectorAll("*").forEach(element => {
        observer.observe(element);
    });
});
