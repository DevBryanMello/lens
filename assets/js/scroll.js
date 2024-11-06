document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".animated");

    const checkScroll = () => {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const inView = rect.top <= window.innerHeight && rect.bottom >= 0;

            if (inView) {
                element.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Initial check for elements already in view
});
