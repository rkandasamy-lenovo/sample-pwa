window.onload = () => {
  "use strict";

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js");
  }

  $.getJSON("http://time.jsontest.com", function (data) {
    var text = `Date: ${data.date}<br />
                  Time: ${data.time}<br />
                  Unix time: ${data.milliseconds_since_epoch}<br />
                  Powerd By: JSON Test.com
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
