/*!
 * Grace Yang — Personal Portfolio
 * main.js — interactive behavior:
 *   1) rotating role tagline   2) scroll-reveal animations
 *   3) scroll-spy nav          4) mobile menu toggle
 *   5) company-logo fallback   6) footer year
 */

/* =========================================================
   1. ROTATING ROLE / TAGLINE (vertical slide) — preserved
   ========================================================= */
(function rotateRoles() {
  const roles = ["Software Engineer", "Researcher", "Builder of cool things"];
  const track = document.getElementById("roleTrack");
  let i = 0;
  function show(idx) {
    track.innerHTML = "<span><b>" + roles[idx] + "</b></span>";
    const span = track.firstChild;
    span.style.transform = "translateY(100%)";
    requestAnimationFrame(() => requestAnimationFrame(() => { span.style.transform = "translateY(0)"; }));
  }
  show(0);
  setInterval(() => {
    const span = track.firstChild;
    span.style.transform = "translateY(-100%)";
    setTimeout(() => { i = (i + 1) % roles.length; show(i); }, 550);
  }, 2600);
})();

/* =========================================================
   2. SCROLL-TRIGGERED FADE-IN — preserved
   ========================================================= */
(function reveals() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el));
})();

/* =========================================================
   3. ACTIVE NAV LINK ON SCROLL — preserved
   ========================================================= */
(function scrollSpy() {
  const links = document.querySelectorAll(".nav-links a");
  const map = {};
  links.forEach((l) => (map[l.getAttribute("href").slice(1)] = l));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        links.forEach((l) => l.classList.remove("active"));
        const link = map[e.target.id]; if (link) link.classList.add("active");
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  document.querySelectorAll("section[id]").forEach((s) => io.observe(s));
})();

/* =========================================================
   4. MOBILE NAV TOGGLE — preserved
   ========================================================= */
(function mobileNav() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  toggle.addEventListener("click", () => links.classList.toggle("open"));
  links.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => links.classList.remove("open")));
})();

/* =========================================================
   5. LOGO FALLBACK — gradient monogram if a logo 404s
   ========================================================= */
(function logoFallback() {
  document.querySelectorAll(".exp-logo img").forEach((img) => {
    img.addEventListener("error", () => {
      const initial = (img.alt || "?").trim().charAt(0).toUpperCase();
      const chip = document.createElement("div");
      chip.textContent = initial;
      chip.style.cssText = "width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-family:Fraunces,serif;font-weight:700;font-size:1.4rem;color:#1c1a22;background:linear-gradient(120deg,#8fe3d6,#c8b6f5,#ffc6d9);";
      img.replaceWith(chip);
    });
  });
  // project-icon logo (OwlRecruit): fall back to its emoji if the image is missing
  document.querySelectorAll(".proj-icon-logo img").forEach((img) => {
    img.addEventListener("error", () => {
      const icon = img.closest(".proj-icon");
      if (icon) { icon.classList.remove("proj-icon-logo"); icon.textContent = img.dataset.fallback || "🦉"; }
    });
  });
})();

/* =========================================================
   6. PHOTO PLACEHOLDERS
      Each collage slot points at a filename (photo1.jpg,
      booth1.jpg, …). Until that file exists the slot shows a
      dashed "drop <file> here" hint; the moment you add the
      file it loads automatically — no code changes needed.
   ========================================================= */
(function photoSlots() {
  document.querySelectorAll(".pic[data-file] img, .frame-cell[data-file] img").forEach((img) => {
    const slot = img.parentElement;
    const file = slot.getAttribute("data-file");
    img.addEventListener("error", () => {
      slot.classList.add("empty");
      slot.innerHTML = '<span class="hint">📷 drop<br>' + file + '<br>here<small>in the site folder</small></span>';
    });
    // if the src was empty/missing it may already have failed before listener attached
    if (img.complete && img.naturalWidth === 0) img.dispatchEvent(new Event("error"));
  });
})();

/* =========================================================
   7. FOOTER YEAR
   ========================================================= */
document.getElementById("year").textContent = new Date().getFullYear();
  
