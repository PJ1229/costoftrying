const hero = document.querySelector(".hero");
const films = document.querySelectorAll("[data-hero-image]");
const panel = document.querySelector("[data-panel]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const panelClose = document.querySelector("[data-panel-close]");

if (hero && films.length) {
  const swapHero = (image) => {
    hero.style.setProperty("--hero-image", `url("${image}")`);
  };

  const getFrames = (film) => {
    const frames = film.dataset.heroFrames;
    if (!frames) {
      return film.dataset.heroImage ? [film.dataset.heroImage] : [];
    }
    return frames
      .split(",")
      .map((frame) => frame.trim())
      .filter(Boolean);
  };

  const storageKey = "costoftrying.activeFilm";
  let cycleId = null;
  let frameIndex = 0;
  let activeFilm = films[0];
  let activeFrames = getFrames(activeFilm);

  const startCycle = (film) => {
    activeFilm = film;
    activeFrames = getFrames(film);
    frameIndex = 0;
    if (activeFrames.length) {
      swapHero(activeFrames[0]);
    }

    if (cycleId) {
      window.clearInterval(cycleId);
    }

    if (activeFrames.length > 1) {
      cycleId = window.setInterval(() => {
        frameIndex = (frameIndex + 1) % activeFrames.length;
        swapHero(activeFrames[frameIndex]);
      }, 2400);
    }
  };

  const storedTitle = window.localStorage?.getItem(storageKey);
  if (storedTitle) {
    const match = Array.from(films).find((film) =>
      film.textContent.trim().includes(storedTitle)
    );
    if (match) {
      activeFilm = match;
    }
  }

  startCycle(activeFilm);

  films.forEach((film) => {
    film.addEventListener("mouseenter", () => startCycle(film));
    film.addEventListener("click", () => {
      const title = film.firstChild?.textContent?.trim() || film.textContent.trim();
      window.localStorage?.setItem(storageKey, title);
      startCycle(film);
    });
  });
}

const togglePanel = (open) => {
  if (!panel) {
    return;
  }
  panel.classList.toggle("is-open", open);
};

if (panel && menuToggle && panelClose) {
  menuToggle.addEventListener("click", () => togglePanel(true));
  panelClose.addEventListener("click", () => togglePanel(false));
  panel.addEventListener("click", (event) => {
    if (event.target === panel) {
      togglePanel(false);
    }
  });
}

