console.log("map.js is running!");

/*** GET MAP ***/
mapboxgl.accessToken = 'pk.eyJ1IjoibGlzZS1tYXkiLCJhIjoiY2w4ZnlmenF4MDJqMzNvcTl2ZzRmc3ozcSJ9.0gr1lx_dL5Uz5nHUzhy5Xg';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/lise-may/cl8hc05e8002u15rkinu69cs3', // style URL
    center: [11.95040410848025,55.54310719243414], // starting position [lng, lat]
    zoom: 6 // starting zoom
});


/*** ON the map ***/



//Marker  popup

var CC001_popup = new mapboxgl.Popup({
    offset: 35,
    closeButton: false,
}).setHTML(
    '<a href="../devices.html"><img class="goto" src="../img/goto.png">' +
    '<h2 class="sirName">CC001</h2>' +
    "<p>Location: <br> Region Green, Aarhus, Dk <br> L�g�rdsvej 12, 8520 Lystrup</p>" +
    "<p><br> Status: <br> <div></div></p>" +
    '<img class="sirIMG" src="../img/CC001.png">'+
    '<h3 class="sirName">Sirene status</h3>'
);

var SIR001_popup = new mapboxgl.Popup({
    offset: 35,
    closeButton: false,
}).setHTML(
    '<a href="../devices.html"><img class="goto" src="../img/goto.png">' +
    '<h2 class="sirName">SIR001</h2>' +
    "<p>Location: <br> Region Green, Aarhus, Dk <br> L�g�rdsvej, 8520 Lystrup</p>" +
    "<p><br> Status: <br> <div></div></p>" +
    '<img class="sirIMG" src="../img/SIR001.png">'+
    '<h3 class="sirName">Sirene status</h3>'
);

var SIR002_popup = new mapboxgl.Popup({
    offset: 35,
    closeButton: false,
}).setHTML(
    '<a href="../devices.html"><img class="goto" src="../img/goto.png">' +
    '<h2 class="sirName">SIR002</h2>' +
    "<p>Location: <br> Region Green, Aarhus, Dk <br> 8000 Aarhus C</p>" +
    "<p><br> Status: <br> <div></div></p>" +
    '<img class="sirIMG" src="../img/SIR002.png">'+
    '<h3 class="sirName">Sirene status</h3>'
);

var SIR003_popup = new mapboxgl.Popup({
    offset: 35,
    closeButton: false,
}).setHTML(
    '<a href="../devices.html"><img class="goto" src="../img/goto.png">' +
    '<h2 class="sirName">SIR003</h2>' +
    "<p>Location: <br> Region Green, Aarhus, Dk <br> Aarhus Municipality </p>" +
    "<p><br> Status: <br> <div></div></p>" +
    '<img class="sirIMG" src="../img/SIR003.png">'+
    '<h3 class="sirName">Sirene status</h3>'
);

var CC002_popup = new mapboxgl.Popup({
    offset: 35,
    closeButton: false,
}).setHTML(
    '<a href="../devices.html"><img class="goto" src="../img/goto.png">' +
    '<h2 class="sirName">CC002</h2>' +
    "<p>Location: <br> Region Blue, K�benhavn, Dk <br> Capital Region of Denmark</p>" +
    "<p><br> Status: <br> <div></div></p>" +
    '<img class="sirIMG" src="../img/CC002.png">'+
    '<h3 class="sirName">Sirene status</h3>'
);

var SIR006_popup = new mapboxgl.Popup({
    offset: 35,
    closeButton: false,
}).setHTML(
    '<a href="../devices.html"><img class="goto" src="../img/goto.png">' +
    '<h2 class="sirName">SIR006</h2>' +
    "<p>Location: <br> Region Blue, K�benhavn, Dk <br> Kastrup</p>" +
    "<p><br> Status: <br> <div></div></p>" +
    '<img class="sirIMG" src="../img/SIR006.png">'+
    '<h3 class="sirName">Sirene status</h3>'
);

var SIR007_popup = new mapboxgl.Popup({
    offset: 35,
    closeButton: false,
}).setHTML(
    '<a href="../devices.html"><img class="goto" src="../img/goto.png">' +
    '<h2 class="sirName">SIR007</h2>' +
    "<p>Location: <br> Region Blue, K�benhavn, Dk <br> Drag�r</p>" +
    "<p><br> Status: <br> <div></div></p>" +
    '<img class="sirIMG" src="../img/SIR007.png">'+
    '<h3 class="sirName">Sirene status</h3>'
);

var SIR008_popup = new mapboxgl.Popup({
    offset: 35,
    closeButton: false,
}).setHTML(
    '<a href="../devices.html"><img class="goto" src="../img/goto.png">' +
    '<h2 class="sirName">SIR008</h2>' +
    "<p>Location: <br> Region Blue, K�benhavn, Dk <br> 2300 K�benhavn</p>" +
    "<p><br> Status: <br> <div></div></p>" +
    '<img class="sirIMG" src="../img/SIR008.png">'+
    '<h3 class="sirName">Sirene status</h3>'
);

var SIR009_popup = new mapboxgl.Popup({
    offset: 35,
    closeButton: false,
}).setHTML(
    '<a href="../devices.html"><img class="goto" src="../img/goto.png">' +
    '<h2 class="sirName">SIR009</h2>' +
    "<p>Location: <br> Region Blue, K�benhavn, Dk <br> Refshalevej, 1432 K�benhavn</p>" +
    "<p><br> Status: <br> <div></div></p>" +
    '<img class="sirIMG" src="../img/SIR008.png">'+
    '<h3 class="sirName">Sirene status</h3>'
);

var SIR010_popup = new mapboxgl.Popup({
    offset: 35,
    closeButton: false,
}).setHTML(
    '<a href="../devices.html"><img class="goto" src="../img/goto.png">' +
    '<h2 class="sirName">SIR010</h2>' +
    "<p>Location: <br> Region Blue, K�benhavn, Dk <br> 4100 Ringsted, DK</p>" +
    "<p><br> Status: <br> <div></div></p>" +
    '<img class="sirIMG" src="../img/SIR008.png">'+
    '<h3 class="sirName">Sirene status</h3>'
);



//Marker


let CC001_styling = document.createElement("div");
CC001_styling.className = "custom_marker";
CC001_styling.style.backgroundImage = "url(../img/CC.png)";

let CC001 = new mapboxgl.Marker(CC001_styling, { offset: [0, 0] })

    .setLngLat([10.240012, 56.225607])
    .setPopup(CC001_popup)
    .addTo(map);


let SIR001_styling = document.createElement("div");
SIR001_styling.className = "custom_marker";
SIR001_styling.style.backgroundImage = "url(../img/siren.png)";

let SIR001 = new mapboxgl.Marker(SIR001_styling, { offset: [0, 0] })

    .setLngLat([10.237575, 56.225528])
    .setPopup(SIR001_popup)
    .addTo(map);


let SIR002_styling = document.createElement("div");
SIR002_styling.className = "custom_marker";
SIR002_styling.style.backgroundImage = "url(../img/siren.png)";

let SIR002 = new mapboxgl.Marker(SIR002_styling, { offset: [0, 0] })

    .setLngLat([10.206624, 56.148810])
    .setPopup(SIR002_popup)
    .addTo(map);


let SIR003_styling = document.createElement("div");
SIR003_styling.className = "custom_marker";
SIR003_styling.style.backgroundImage = "url(../img/siren.png)";

let SIR003 = new mapboxgl.Marker(SIR003_styling, { offset: [0, 0] })

    .setLngLat([10.234422, 56.092216])
    .setPopup(SIR003_popup)
    .addTo(map);


let CC002_styling = document.createElement("div");
CC002_styling.className = "custom_marker";
CC002_styling.style.backgroundImage = "url(../img/CC.png)";

let CC002 = new mapboxgl.Marker(CC002_styling, { offset: [0, 0] })

    .setLngLat([12.647122, 55.612672])
    .setPopup(CC002_popup)
    .addTo(map);


let SIR006_styling = document.createElement("div");
SIR006_styling.className = "custom_marker";
SIR006_styling.style.backgroundImage = "url(../img/siren.png)";

let SIR006 = new mapboxgl.Marker(SIR006_styling, { offset: [0, 0] })

    .setLngLat([12.657788, 55.633954])
    .setPopup(SIR006_popup)
    .addTo(map);


let SIR007_styling = document.createElement("div");
SIR007_styling.className = "custom_marker";
SIR007_styling.style.backgroundImage = "url(../img/siren.png)";

let SIR007 = new mapboxgl.Marker(SIR007_styling, { offset: [0, 0] })

    .setLngLat([12.615427, 55.565812])
    .setPopup(SIR007_popup)
    .addTo(map);


let SIR008_styling = document.createElement("div");
SIR008_styling.className = "custom_marker";
SIR008_styling.style.backgroundImage = "url(../img/siren.png)";

let SIR008 = new mapboxgl.Marker(SIR008_styling, { offset: [0, 0] })

    .setLngLat([12.571024, 55.625896])
    .setPopup(SIR008_popup)
    .addTo(map);


let SIR009_styling = document.createElement("div");
SIR009_styling.className = "custom_marker";
SIR009_styling.style.backgroundImage = "url(../img/siren.png)";

let SIR009 = new mapboxgl.Marker(SIR009_styling, { offset: [0, 0] })

    .setLngLat([12.609107, 55.696436])
    .setPopup(SIR009_popup)
    .addTo(map);

let SIR010_styling = document.createElement("div");
SIR010_styling.className = "custom_marker";
SIR010_styling.style.backgroundImage = "url(../img/siren.png)";

let SIR010 = new mapboxgl.Marker(SIR010_styling, { offset: [0, 0] })

    .setLngLat([11.671320, 55.478001])
    .setPopup(SIR010_popup)
    .addTo(map);





// Marker styling
const marker_styling = document.querySelectorAll(".custom_marker");
marker_styling.forEach((marker) => {
    marker.style.width = "30px";
    marker.style.height = "30px";
    marker.style.border = "1px solid black";
    marker.style.borderRadius = "50%";
    marker.style.backgroundColor = "white";
    marker.style.backgroundPosition = "center";
    marker.style.backgroundRepeat = "no-repeat";
    marker.style.backgroundSize = "contain";
});



/*
const marker1 = new mapboxgl.Marker()
.setLngLat([10.237575, 56.225528])
.addTo(map);
*/ 



