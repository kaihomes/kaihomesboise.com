let curr = 1;
let total = 10;

const feature = document.getElementById("feature");
const fileExt = feature.src.split(".").pop();

function update() {
  feature.src = `./${curr}.${fileExt}`;
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

function render(count = 10, format = "jpg") {
  total = count;
  let html = "";
  for (let i = 1; i <= total; i++) {
    html += `
    <div class="photo" onclick="show(${i})">
      <img src="./${i}.${format}" alt="photo ${i}" />
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
