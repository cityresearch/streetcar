
var handle = document.getElementById('handle'),
    start = false,
    startTop;

var map = L.map('map',{
      minZoom: 8,
      maxZoom: 19
    })
    .setView([38.220448, -85.73699], 13);

var gBase = new L.Google();

map.addLayer(gBase);

// var overlay = L.tileLayer('https://api.mapbox.com/v4/lexhousingstudies.carxus22/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibGV4aG91c2luZ3N0dWRpZXMiLCJhIjoiY2lqY2NhZ2VjMDAxZHV1bTBwc2hkbHJ4bCJ9.6eF0ROiV6x6wBDhdDOv2RA', {
    
 var overlay = L.tileLayer('https://api.mapbox.com/v4/maptimelou.54i84v0m/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwdGltZWxvdSIsImEiOiJjaXYzM3NsbmwwMTZoMm9vYXVva3gxN2ttIn0.obxey61xwB2yWaR5Ca1Psw', {   
        attribution: '<a href="https://www.ridetarc.org/" target="_blank">Transit Authority of the River City</a>',
        opacity: 0.75,
       maxNativeZoom: 19,
        maxZoom: 19
      })
      .addTo(map);

document.onmousemove = function(e) {
    if (!start) return;
    // Adjust control.
    handle.style.top = Math.max(-5, Math.min(195, startTop + parseInt(e.clientY, 10) - start)) + 'px';
    // Adjust opacity.
    overlay.setOpacity(1 - (handle.offsetTop / 200));
};

handle.onmousedown = function(e) {
    // Record initial positions.
    start = parseInt(e.clientY, 10);
    startTop = handle.offsetTop - 5;
    return false;
};

document.onmouseup = function(e) {
    start = null;
};
