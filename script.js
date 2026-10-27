// ============================================
//  INTRO ANIMATION → REVEAL MAIN SITE
// ============================================
window.addEventListener("load", () => {
  const intro = document.getElementById("intro");
  const site = document.getElementById("site");

  // Intro CSS animations finish around ~2.5s
  const INTRO_DURATION = 2600;

  setTimeout(() => {
    intro.classList.add("fade-out");

    site.classList.remove("site-hidden");
    site.classList.add("site-visible");

    setTimeout(() => {
      intro.style.display = "none";
    }, 800);
  }, INTRO_DURATION);
});

// ============================================
//  SCROLL ANIMATIONS (fade sections in)
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section, .card, .project-card, .skill");

  // Add the initial hidden class
  sections.forEach((el) => el.classList.add("reveal-init"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  sections.forEach((el) => observer.observe(el));
});