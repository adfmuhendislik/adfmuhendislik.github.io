var map = L.map("mapid").setView([38.75, 35.414], 15.5);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

var x = 0;
var y = 0;

document.addEventListener('keydown', (event) => {

    var name = event.key;
    var code = event.code;

    if (name == 1) {
        y = y - 0.1;
        console.log(name)
        map.panTo(new L.LatLng(38.75 + x, 35.414 + y));
    }
    if (name == 2) {
        x = x + 0.1;
        console.log(name)
        map.panTo(new L.LatLng(38.75 + x, 35.414 + y));
    }
    console.log(`x : ${x} --- y: ${y}`)
}, false);