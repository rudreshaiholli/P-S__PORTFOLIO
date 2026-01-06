/* THEME VARIABLES (LIVE CHANGE) */
:root {
    --accent: #6366f1;
    --accent-light: #e0e7ff;
    --dark-bg: #020617;
}

/* RESET */
* {
    box-sizing: border-box;
    scroll-behavior: smooth;
}

/* BODY */
body {
    margin: 0;
    font-family: "Georgia", serif;
    background:
        radial-gradient(circle at top left, var(--accent-light), transparent 40%),
        linear-gradient(180deg, #ffffff, #f8fafc);
    color: #1f2937;
    line-height: 1.7;
    transition: all 0.3s ease;
}

/* DARK MODE */
body.dark {
    background:
        radial-gradient(circle at top left, var(--accent), transparent 40%),
        linear-gradient(180deg, var(--dark-bg), var(--dark-bg));
    color: #e5e7eb;
}

/* NAVBAR */
.navbar {
    background: var(--accent);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 20px;
    position: sticky;
    top: 0;
}
.logo {
    color: white;
    font-weight: bold;
}
.nav-links {
    display: flex;
    gap: 25px;
    list-style: none;
}
.nav-links a {
    color: white;
    text-decoration: none;
}

/* HERO */
.hero {
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 60px 20px;
    background: linear-gradient(
        135deg,
        var(--accent),
        #000000
    );
    color: white;
}

/* BUTTON */
.btn {
    padding: 12px 28px;
    background: white;
    color: var(--accent);
    border-radius: 30px;
    text-decoration: none;
    font-weight: 600;
    margin: 10px;
}

/* SECTIONS */
.section {
    padding: 70px 24px;
    max-width: 1000px;
    margin: auto;
}

/* CARD */
.card {
    background: white;
    padding: 26px;
    margin: 24px auto;
    max-width: 850px;
    border-left: 6px solid var(--accent);
    border-radius: 8px;
    box-shadow: 0 15px 35px rgba(0,0,0,0.08);
}
body.dark .card {
    background: #020617;
}

/* SKILLS */
.skills {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 14px;
    list-style: none;
    padding: 0;
}
.skills li {
    background: var(--accent);
    color: white;
    padding: 12px;
    text-align: center;
    border-radius: 20px;
}

/* FOOTER */
.footer {
    background: var(--accent);
    color: white;
    text-align: center;
    padding: 18px;
}

/* PAGE TURN */
.page {
    animation: pageTurn 0.8s ease both;
}
@keyframes pageTurn {
    from {
        opacity: 0;
        transform: rotateY(-12deg) translateY(30px);
    }
    to {
        opacity: 1;
        transform: rotateY(0) translateY(0);
    }
}

/* SCROLL */
.animate {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease;
}
.animate.show {
    opacity: 1;
    transform: translateY(0);
}

/* MOBILE */
.hamburger {
    display: none;
    font-size: 22px;
    color: white;
}
@media (max-width: 768px) {
    .nav-links {
        display: none;
        position: absolute;
        top: 60px;
        right: 0;
        background: var(--accent);
        flex-direction: column;
        width: 200px;
        padding: 15px;
    }
    .nav-links.show {
        display: flex;
    }
    .hamburger {
        display: block;
    }
}
