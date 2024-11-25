//leaflet map javascript

var map = L.map('map').setView([45.496, -73.578], 17); //geolocation + zoom
var librarymarker = L.marker([45.4972, -73.5791]).addTo(map); //library pin
var evfifthmarker = L.marker([45.495376, -73.577997]).addTo(map); //ev 5th floor pin
var eveigthmarker = L.marker([45.4957, -73.5783]).addTo(map); //ev 8th floor pin

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

librarymarker.bindPopup("<b>Library Red Couches</b><br>★★★☆☆<br>Pros: Very spacious and comfortable<br>Cons: The guilt of using a couch to sleep instead of study eats you alive");
evfifthmarker.bindPopup("<b>EV 5th Floor Armchairs</b><br>★★★★☆<br>Pros: So Comfortable and accessible<br>Cons: Security will hate you");
eveigthmarker.bindPopup("<b>EV 8th Floor Armchairs</b><br>★★★★☆<br>Pros: Very comfortable and less crowded<br>Cons: Only two chairs");
