const url =
  "https://drive.google.com/embeddedfolderview?id=1ogG6eIvemVsB6B7UpjFPuxxepSV8_rKB#grid";
async function getPortfolio() {
  const res = await fetch(url);
  try {
    const bod = await res.body();
    console.log("bod:", bod);
  } catch {}
  try {
    const txt = await res.text();
    console.log("txt:", txt);
  } catch {}

  try {
    const jsn = await res.json();
    console.log("jsn:", jsn);
  } catch {}
}
getPortfolio();
