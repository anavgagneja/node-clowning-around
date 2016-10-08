var lati;
var longi;

function processPosition(position) {
	lati = position.coords.latitude;
	longi = position.coords.longitude;
	console.log(lati);
	console.log(longi);
	initMap();
}

function getPos(data) {
	console.log(data);
	gm.info.getCurrentPosition(processPosition, true);
}

var map;
var marker;
function initMap() {
	var myLatLng = {lat: parseFloat(lati), lng: parseFloat(longi)};
	map = new google.maps.Map(document.getElementById('map'), {
		center: myLatLng,
		zoom: 15
	});

	marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: 'My Car',
		icon: './images/car.png'
	});
}

// Initialize Firebase
var config = {
	apiKey: "AIzaSyCRcMmP2mEmH4VLSzv2xcxHSyHHTceR-nY",
	authDomain: "node-clowning-around.firebaseapp.com",
	databaseURL: "https://node-clowning-around.firebaseio.com",
	storageBucket: "node-clowning-around.appspot.com",
	messagingSenderId: "182636227030"
};

gm.info.getCurrentPosition(processPosition, true);
firebase.initializeApp(config);
gm.info.watchVehicleData(getPos, ['gps_lat','gps_long']);
gm.info.getVehicleData(getPos, ['gps_lat','gps_long']);

/*<div>Icons made by <a href="http://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>*/