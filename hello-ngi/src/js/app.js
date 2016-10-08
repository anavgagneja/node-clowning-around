var lati;
var longi;

function processPosition(position) {
	lati = position.coords.latitude;
	longi = position.coords.longitude;
	console.log(lati);
	console.log(longi);
}

function getPos(data) {
	console.log(data);
	gm.info.getCurrentPosition(processPosition, true);
	initMap();
}

var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: parseFloat(lati), lng: parseFloat(longi)},
		zoom: 12
	});
}

gm.info.watchVehicleData(getPos, ['gps_lat','gps_long']);
gm.info.getVehicleData(getPos, ['gps_lat','gps_long']);