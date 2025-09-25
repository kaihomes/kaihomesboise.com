const _getEl = (id) => document.getElementById(id);

document.addEventListener("DOMContentLoaded", () => {
  const showMenuBtn = _getEl("menu-btn");
  const hideMenuBtn = _getEl("close-menu-btn");
  const menu = _getEl("nav-menu");

  showMenuBtn.addEventListener("click", () => {
    menu.setAttribute("aria-hidden", "false");
    menu.className = "opened";
  });
  const closeMenu = () => {
    menu.setAttribute("aria-hidden", "true");
    menu.className = "closed";
  };
  hideMenuBtn.addEventListener("click", closeMenu);
  document.addEventListener("keydown", (e) => {
    if (
      (e.key === "Escape" || e.key === "Esc") &&
      menu.className === "opened"
    ) {
      closeMenu();
    }
  });

  const mainEl = document.querySelector("main");
  const stickyPoint = mainEl.getBoundingClientRect().top + window.scrollY + 96;
  const nav1 = _getEl("sticky-nav");
  const nav2 = _getEl("top-nav");
  function checkScroll() {
    const curr = window.scrollY;
    if (curr > stickyPoint) {
      nav1.classList.add("sticky");
      nav2.classList.add("sticky");
    } else {
      nav1.classList.remove("sticky");
      nav2.classList.remove("sticky");
    }
  }
  window.addEventListener("scroll", checkScroll);
  checkScroll();
});
