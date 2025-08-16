document.addEventListener("DOMContentLoaded", () => {
  const showMenuBtn = document.getElementById("menu-btn");
  const hideMenuBtn = document.getElementById("close-menu-btn");
  const menu = document.getElementById("nav-menu");

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
});
