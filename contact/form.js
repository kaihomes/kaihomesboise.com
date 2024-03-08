/**
 * 1. Captures the submit event on the form
 * 2. Sends the message to Pipedream
 * --> (which then sends an email with all the info in it)
 */
const url = "https://eotxid8mqusel0u.m.pipedream.net";

async function sendMessage(data = {}) {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  const response = await fetch(url, {
    method: "POST",
    headers,
    mode: "cors",
    body: JSON.stringify(data),
  });
  return true;
}

const getEl = (id) => document.getElementById(id);
const getVal = (id) => getEl(id).value;
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
  const data = {
    name: getVal("name"),
    email: getVal("email"),
    phone: getVal("phone"),
    message: getVal("message"),
  };
  form.style.display = "none";
  loadingDiv.style.display = "block";
  spinnerDiv.innerHTML = '<div class="spinner"></div>';
  sendMessage(data).then(() => {
    spinnerDiv.innerHTML = "";
    loadingDiv.style.display = "none";
    successDiv.style.display = "block";
  });
  return false;
});
