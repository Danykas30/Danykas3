      let scrollSpeed = 0.1; // Adjust speed (lower = smoother)
        
        let lastScrollTop = window.scrollY;

        function smoothScroll() {
            let currentScroll = window.scrollY;
            let diff = currentScroll - lastScrollTop;
            window.scrollBy(0, diff * scrollSpeed);
            lastScrollTop = currentScroll;
            requestAnimationFrame(smoothScroll);
        }

        smoothScroll(); // Start animation
