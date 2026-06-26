// Smooth scroll reveal animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll(".reveal").forEach(el => {
  observer.observe(el);
});

document.addEventListener("mousemove", (e) => {
  const glow = document.querySelector(".glow");
  if (!glow) return;

  const x = (e.clientX / window.innerWidth - 0.5) * 30;
  const y = (e.clientY / window.innerHeight - 0.5) * 30;

  glow.style.transform = `translate(${x}px, ${y}px)`;
});

window.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav");
  nav.style.background =
    window.scrollY > 20
      ? "rgba(0,0,0,0.6)"
      : "rgba(0,0,0,0.3)";
});
