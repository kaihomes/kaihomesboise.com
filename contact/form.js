/**
 * 1. Captures the submit event on the form
 * 2. Sends the message to Pipedream
 * --> (which then sends an email with all the info in it)
 */
const url = "https://eotxid8mqusel0u.m.pipedream.net";

async function sendMessage(data = {}) {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  const body = JSON.stringify(data);
  await fetch(url, {
    method: "POST",
    headers,
    mode: "cors",
    body,
  });
  return true;
}

function getTurnstileVal() {
  // name="cf-turnstile-response" id="cf-chl-widget-ASDF_response"
  // where ASDF is a random 5 char string
  // get by name
  return document.querySelector('input[name="cf-turnstile-response"]').value;
}

const getEl = (id) => document.getElementById(id);
const getVal = (id) => getEl(id).value.trim();
const hide = (id) => {
  getEl(id).style.display = "none";
};
const show = (id) => {
  getEl(id).style.display = "block";
};
const form = getEl("form");
const loadingDiv = getEl("loading");
const successDiv = getEl("success");
const spinnerDiv = getEl("spinner");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const turnstile = getTurnstileVal();
  if (!turnstile) {
    // TODO: add error message
    alert("Please prove you're not a robot.");
    return false;
  }
  const address = `${getVal("address")}, ${getVal("city")}, ${getVal("zip")}`;
  const data = {
    name: getVal("name"),
    email: getVal("email"),
    phone: getVal("phone"),
    address,
    message: getVal("message"),
    turnstile,
  };
  form.style.display = "none";
  loadingDiv.style.display = "block";
  spinnerDiv.innerHTML = '<div class="spinner"></div>';
  sendMessage(data).then(() => {
    spinnerDiv.innerHTML = "";
    loadingDiv.style.display = "none";
    successDiv.style.display = "block";
    if (window.turnstile.reset) turnstile.reset();
  });
  return false;
});
