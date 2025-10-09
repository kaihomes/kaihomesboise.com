const videosContainer = document.getElementById("videos");
const getDocWidth = () => document.documentElement.clientWidth;
function renderVideos() {
  const docWidth = getDocWidth();
  const isSmall = docWidth <= 608;
  const availableWidth = docWidth - 80;
  const width = isSmall ? availableWidth : Math.floor(availableWidth / 3);
  const height = Math.floor((width / 16) * 9) + 16; // 16x9 aspect ratio
  const videosHTML = ["6Fr-8uxytOc", "_85cgnu5jvY", "KCy2pm72_x0"]
    .map(
      (id) => `<div class="ytplayer">
            <iframe
              width="${width}"
              height="${height}"
              src="https://www.youtube.com/embed/${id}?modestbranding=1&amp;iv_load_policy=3"
              type="text/html"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            </div>`
    )
    .join("");
  videosContainer.innerHTML = videosHTML;
}
if (videosContainer) {
  renderVideos();
  let currDocWidth = getDocWidth();
  // debounce timer id
  let resizeDebounceId = null;
  const DEBOUNCE_MS = 1000; // 1 second

  // on resize, re-render (debounced so we only re-render at most once per second)
  window.addEventListener("resize", () => {
    const newDocWidth = getDocWidth();
    const diff = Math.abs(newDocWidth - currDocWidth);
    if (diff > 100) {
      // update current width immediately to keep threshold behavior stable
      currDocWidth = newDocWidth;

      // if a pending debounce is scheduled, clear it
      if (resizeDebounceId !== null) {
        clearTimeout(resizeDebounceId);
      }

      // schedule render after debounce timeout
      resizeDebounceId = setTimeout(() => {
        renderVideos();
        resizeDebounceId = null;
      }, DEBOUNCE_MS);
    }
  });
}
