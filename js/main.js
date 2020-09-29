window.onload = () => {
  "use strict";

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js");
  }

  window.addEventListener("online", updateOnlineStatus);
  window.addEventListener("offline", updateOnlineStatus);

  updateTimeInfo();
  showLangPreferences();
  updateOnlineStatus();
  updateBrowserInfo();
};

function updateTimeInfo() {
  const timeApi = "https://worldtimeapi.org/api/timezone/Asia/Kolkata";
  $.getJSON(timeApi, (data) => {
    var text = `Date: ${data.datetime.split("T")[0]}<br />
                  Time: ${data.datetime.split("T")[1].split(".")[0]} 
                  ${data.abbreviation}<br />
                  Unix time: ${data.unixtime}<br />
                  Powerd By: World Time API
                  `;

    $("#currentDateTime").html(text);
  });
}

function updateOnlineStatus(event) {
  let condition = navigator.onLine ? "online" : "offline";
  let connectionStatus = `Status: ${condition}<br />
  Speed: ${navigator.connection.downlink} Mbit/s<br />
  Speed Category: ${navigator.connection.effectiveType.toUpperCase()}<br />
  `;
  $("#conStatus").html(connectionStatus);
  let statusCheck = document.getElementById("status-alert");
  if (condition === "offline") {
    statusCheck.style.display = "block";
  } else {
    statusCheck.style.display = "none";
  }
}

function updateBrowserInfo() {
  let browserInfo = `Browser: ${platform.name}<br />
  Version: ${platform.version}<br />
  Vendor: ${navigator.vendor}<br />
  OS: ${platform.os}<br />
  Hardware: ${navigator.platform}<br />
  Description: ${platform.description}
  `;
  document.getElementById("browserInfo").innerHTML = browserInfo;
}

function showLangPreferences() {
  let defaultLang = navigator.language || navigator.userLanguage;
  let langInfo = `Default Language: ${defaultLang}<br />
  Preferred Lanaguages: ${navigator.languages}
  `;
  document.getElementById("currentLanguage").innerHTML = langInfo;
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  let x = document.getElementById("current-geo-loc");
  x.innerHTML =
    "Your current location is <br>Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
}
