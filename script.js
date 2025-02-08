    function checkVisibility() {
            document.querySelectorAll('.box').forEach(box => {
                let rect = box.getBoundingClientRect();
                let visibleHeight = rect.bottom - Math.max(rect.top, 0);
                let percentVisible = visibleHeight / rect.height;

                if (percentVisible < 0.4) {
                    if (rect.top > 0) {
                        box.classList.add('fly-down');
                        box.classList.remove('fly-up');
                    } else {
                        box.classList.add('fly-up');
                        box.classList.remove('fly-down');
                    }
                } else {
                    box.classList.remove('fly-down', 'fly-up');
                }
            });
        }

        window.addEventListener('scroll', checkVisibility);
        checkVisibility(); // Run once on load
