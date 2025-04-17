const hero = document.querySelector(".jumbo-hero");
const overlay = hero.querySelector(".jumbo-hero-bg-overlay");
const totalImages = 6;
const images = Array.from(
  { length: totalImages },
  (_, i) => `url('/images/heroes/hero-${i + 1}.jpg')`
);
let idx = parseInt(hero.dataset.start, 10) || 0;

function nextSlide() {
  const next = (idx + 1) % images.length;
  overlay.style.backgroundImage = images[next];
  overlay.style.opacity = "1";

  overlay.addEventListener(
    "transitionend",
    () => {
      hero.style.backgroundImage = images[next];
      overlay.style.opacity = "0";
      idx = next;
    },
    { once: true }
  );
}

setInterval(nextSlide, 7500);
