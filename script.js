// Printing the result to the page

const adaDisplay1 = document.getElementById("ada1");
const xrpDisplay1 = document.getElementById("xrp1");
const hbarDisplay1 = document.getElementById("hbar1");
const linkDisplay1 = document.getElementById("link1");
const adaDisplay3057 = document.getElementById("ada3057");
const xrpDisplay42 = document.getElementById("xrp42");
const hbarDisplay1023 = document.getElementById("hbar1023");
const linkDisplay6_79 = document.getElementById("link6-79");
const gesamt = document.getElementById("gesamt");

// Function to update "Gesamt"
function updateGesamt() {
  const result =
    parseFloat(ada3057.textContent) +
    parseFloat(xrp42.textContent) +
    parseFloat(hbarDisplay1023.textContent) +
    parseFloat(linkDisplay6_79.textContent);
  gesamt.textContent = Math.floor(result * 100) / 100;
}

// Making the Api request for ADA
function adaApiRequest() {
  const req_ada = new XMLHttpRequest();

  req_ada.onload = function () {
    console.log("ALL DONE WITH REQUEST!!!");
    console.log(this.response);
    const data = JSON.parse(this.response);
    ada1 = data.ticker.price;
    adaDisplay1.textContent = Math.floor(ada1 * 1 * 100) / 100;
    adaDisplay3057.textContent = Math.floor(ada1 * 3057 * 100) / 100;
    updateGesamt();
  };

  req_ada.onerror = function () {
    console.log("ERROR!!!");
    console.log(this);
  };

  req_ada.open("GET", "https://api.cryptonator.com/api/ticker/ada-eur");
  req_ada.send();
}

// Making the Api request for XRP
function xrpApiRequest() {
  const req_xrp = new XMLHttpRequest();

  req_xrp.onload = function () {
    console.log("ALL DONE WITH REQUEST!!!");
    console.log(this.response);
    const data = JSON.parse(this.response);
    xrp1 = data.ticker.price;
    xrpDisplay1.textContent = Math.floor(xrp1 * 1 * 100) / 100;
    xrpDisplay42.textContent = Math.floor(xrp1 * 42 * 100) / 100;
    updateGesamt();
  };

  req_xrp.onerror = function () {
    console.log("ERROR!!!");
    console.log(this);
  };

  req_xrp.open("GET", "https://api.cryptonator.com/api/ticker/xrp-eur");
  req_xrp.send();
}

// Making the Api request for HBAR
function hbarApiRequest() {
  const req_hbar = new XMLHttpRequest();

  req_hbar.onload = function () {
    console.log("ALL DONE WITH REQUEST!!!");
    console.log(this.response);
    const data = JSON.parse(this.response);
    hbar1 = data.ticker.price;
    hbarDisplay1.textContent = Math.floor(hbar1 * 1 * 100) / 100;
    hbarDisplay1023.textContent = Math.floor(hbar1 * 1023 * 100) / 100;
    updateGesamt();
  };

  req_hbar.onerror = function () {
    console.log("ERROR!!!");
    console.log(this);
  };

  req_hbar.open("GET", "https://api.cryptonator.com/api/ticker/hbar-eur");
  req_hbar.send();
}
// Making the Api request for LINK
function linkApiRequest() {
  const req_link = new XMLHttpRequest();

  req_link.onload = function () {
    console.log("ALL DONE WITH REQUEST!!!");
    console.log(this.response);
    const data = JSON.parse(this.response);
    link1 = data.ticker.price;
    linkDisplay1.textContent = Math.floor(link1 * 1 * 100) / 100;
    linkDisplay6_79.textContent = Math.floor(link1 * 6.79 * 100) / 100;
    updateGesamt();
  };

  req_link.onerror = function () {
    console.log("ERROR!!!");
    console.log(this);
  };

  req_link.open("GET", "https://api.cryptonator.com/api/ticker/link-eur");
  req_link.send();
}

adaApiRequest();
xrpApiRequest();
hbarApiRequest();
linkApiRequest();

/*
setInterval(function () {
  adaApiRequest();
  xrpApiRequest();
  hbarApiRequest();
}, 10000);
*/
