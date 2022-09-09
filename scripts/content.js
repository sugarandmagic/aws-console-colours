var env = document.querySelector(
  "#nav-usernameMenu > span.KFpjKKVRktMFh3wa-eKuZ > span.ThRjn7o-KwO0459UzmvoU.w8Kxy2XztOAkWobGpdJLt"
).title;
const environment = env.split("@")[2].trim();

function loadData() {
  const url = chrome.runtime.getURL("data/data.json");
  fetch(url)
    .then((response) => response.json())
    .then((envsArray) => {
      globalEnvsArray = envsArray;
      setupcolours(globalEnvsArray);
    });
}

function setupcolours(envsArray) {
  if (envsArray != undefined && environment != undefined) {
    const shortEnv = environment.split("-")[2];
    const envObj = envsArray.find(
      ({ name }) => name.includes(shortEnv) || name === environment
    );
    if (envObj) {
      ["#awsc-nav-header", "#awsc-concierge-input"].forEach((el) => {
        console.log(
          `🌈 changing your aws console colour to ${envObj.colour} for ${shortEnv}`
        );
        this.setbackgroundcolour(el, envObj.colour);
      });
    }
  }
}

function setbackgroundcolour(tag, colour) {
  $(tag).css("background-color", colour);
}

chrome.runtime.onMessage.addListener((request) => {
  loadData();
});

loadData();
