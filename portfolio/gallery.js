let curr = 1;
let total = 10;

const feature = document.getElementById("feature");

function update() {
  feature.src = `./${curr}.jpg`;
}

function show(num = 1) {
  curr = num;
  update();
  feature.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "nearest",
  });
}

function render(count = 10) {
  total = count;
  let html = "";
  for (let i = 1; i <= total; i++) {
    html += `
    <div class="photo" onclick="show(${i})">
      <img src="./${i}.jpg" alt="photo ${i}" />
    </div>
    `;
  }
  document.getElementById("gallery").innerHTML = html;
}

function prev() {
  curr -= 1;
  if (curr < 1) {
    curr = total;
  }
  update();
}
function next() {
  curr += 1;
  if (curr > total) {
    curr = 1;
  }
  update();
}

document.getElementById("prev").addEventListener("click", prev);
document.getElementById("next").addEventListener("click", next);
