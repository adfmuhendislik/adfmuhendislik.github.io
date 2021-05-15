var map = L.map("mapid").setView([38.75, 35.414], 15.5);

// L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

var Stadia_AlidadeSmoothDark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
});

Stadia_AlidadeSmoothDark.addTo(map);

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

var visibility = true;

document.getElementById('vis').addEventListener("click", () => {
    console.log('object')
    if (visibility) {
        document.getElementsByClassName('home')[0].classList.remove('visible-passive');
        document.getElementsByClassName('home')[0].classList.add('visible-active');

        document.getElementsByClassName('home--vis')[0].classList.remove('visible-passive');
        document.getElementsByClassName('home--vis')[0].classList.add('visible-active');

        document.getElementsByClassName('side-nav')[0].classList.remove('visible-passive');
        document.getElementsByClassName('side-nav')[0].classList.add('visible-active');

        document.getElementsByClassName('header')[0].classList.remove('header--passive');
        document.getElementsByClassName('header')[0].classList.add('header--active');

        document.getElementsByClassName('home--eye')[0].style.background = 'black';
    }
    else {
        document.getElementsByClassName('home')[0].classList.remove('visible-active');
        document.getElementsByClassName('home')[0].classList.add('visible-passive');

        document.getElementsByClassName('home--vis')[0].classList.remove('visible-active');
        document.getElementsByClassName('home--vis')[0].classList.add('visible-passive');

        document.getElementsByClassName('side-nav')[0].classList.remove('visible-active');
        document.getElementsByClassName('side-nav')[0].classList.add('visible-passive');

        document.getElementsByClassName('header')[0].classList.remove('header--active');
        document.getElementsByClassName('header')[0].classList.add('header--passive');

        document.getElementsByClassName('home--eye')[0].style.background = 'none'
    }
    visibility = !visibility;
});

var paragraph = {
    'growing': false,
    'wheel': false,
    'spray': false
}

document.addEventListener("click", function (evnt) {
    {
        if (evnt.target.id == 'growing') {
            if (!paragraph.growing) {
                document.getElementsByClassName('about--section')[1].classList.remove('section--paragraph-passive');
                document.getElementsByClassName('about--section')[1].classList.add('section--paragraph-active');
            }
            else {
                document.getElementsByClassName('about--section')[1].classList.remove('section--paragraph-active');
                document.getElementsByClassName('about--section')[1].classList.add('section--paragraph-passive');
            }
            paragraph.growing = !paragraph.growing;
        }

        else if (evnt.target.id == 'spray') {
            if (!paragraph.spray) {
                document.getElementsByClassName('about--section')[0].classList.remove('section--paragraph-passive');
                document.getElementsByClassName('about--section')[0].classList.add('section--paragraph-active');
            }
            else {
                document.getElementsByClassName('about--section')[0].classList.remove('section--paragraph-active');
                document.getElementsByClassName('about--section')[0].classList.add('section--paragraph-passive');
            }
            paragraph.spray = !paragraph.spray;
        }

        else if (evnt.target.id == 'wheel') {
            if (!paragraph.wheel) {
                document.getElementsByClassName('about--section')[2].classList.remove('section--paragraph-passive');
                document.getElementsByClassName('about--section')[2].classList.add('section--paragraph-active');
            }
            else {
                document.getElementsByClassName('about--section')[2].classList.remove('section--paragraph-active');
                document.getElementsByClassName('about--section')[2].classList.add('section--paragraph-passive');
            }
            paragraph.wheel = !paragraph.wheel;
        }
        else { }
    }

    if (!paragraph.wheel && !paragraph.spray && !paragraph.growing) {
        document.getElementsByClassName('about--header')[0].classList.remove('h3-active');
        document.getElementsByClassName('about--header')[0].classList.add('h3-passive');
    }
    else {
        document.getElementsByClassName('about--header')[0].classList.add('h3-active');
        document.getElementsByClassName('about--header')[0].classList.remove('h3-passive');
    }

});