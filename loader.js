/**
 * Hides a temporary overlay over the big header hero image
 * once the page has fully loaded (including all images)
 */
const tempOverlay = document.getElementById("temp-overlay");
window.addEventListener("load", () => {
  window.setTimeout(() => {
    tempOverlay.className = "hide";
  }, 5);
});
