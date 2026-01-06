// THEME TOGGLE
const toggle = document.getElementById("themeToggle");
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggle.textContent = "☀️";
}
toggle.onclick = () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    toggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
};

// MOBILE MENU
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.onclick = () => navLinks.classList.toggle("show");

// SCROLL ANIMATION
const animated = document.querySelectorAll(".animate");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});
animated.forEach(el => observer.observe(el));

