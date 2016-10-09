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
		streetViewControl: false,
		zoomControl: false,
		zoom: 15
	});

	marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: 'My Car',
		icon: './images/car.png'
	});
}


function signal() {
	
}


gm.info.getCurrentPosition(processPosition, true);
gm.info.watchVehicleData(getPos, ['gps_lat','gps_long']);
gm.info.getVehicleData(getPos, ['gps_lat','gps_long']);

/*<div>Icons made by <a href="http://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>*/