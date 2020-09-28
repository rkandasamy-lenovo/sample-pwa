window.onload = () => {
  "use strict";

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js");
  }

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

  let userLang = navigator.language || navigator.userLanguage;
  $("#currentLanguage").html(userLang);
};

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
