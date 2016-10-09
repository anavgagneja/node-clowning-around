	//Hi :)
	var lati;
	var longi;
	var firebaseRef = firebase.database().ref();

	function processPosition(position) {
		lati = position.coords.latitude;
		longi = position.coords.longitude;
		//console.log(lati);
		//console.log(longi);
		danger = false;
		initMap();
	}

	function getPos(data) {
		console.log(data);
		gm.info.getCurrentPosition(processPosition, true);
	}

	var map;
	var marker;
	var danger = false;
	function initMap() {
		var myLatLng = {lat: parseFloat(lati), lng: parseFloat(longi)};
		map = new google.maps.Map(document.getElementById('map'), {
			center: myLatLng,
			streetViewControl: false,
			zoomControl: false,
			zoom: 16,
			styles: [ { "elementType": "geometry", "stylers": [ { "color": "#ebe3cd" } ] }, { "elementType": "labels.text.fill", "stylers": [ { "color": "#523735" } ] }, { "elementType": "labels.text.stroke", "stylers": [ { "color": "#f5f1e6" } ] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [ { "color": "#c9b2a6" } ] }, { "featureType": "administrative.land_parcel", "elementType": "geometry.stroke", "stylers": [ { "color": "#dcd2be" } ] }, { "featureType": "administrative.land_parcel", "elementType": "labels", "stylers": [ { "visibility": "off" } ] }, { "featureType": "administrative.land_parcel", "elementType": "labels.text.fill", "stylers": [ { "color": "#ae9e90" } ] }, { "featureType": "landscape.natural", "elementType": "geometry", "stylers": [ { "color": "#dfd2ae" } ] }, { "featureType": "poi", "elementType": "geometry", "stylers": [ { "color": "#dfd2ae" } ] }, { "featureType": "poi", "elementType": "labels.text", "stylers": [ { "visibility": "off" } ] }, { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [ { "color": "#93817c" } ] }, { "featureType": "poi.business", "stylers": [ { "visibility": "off" } ] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [ { "color": "#a5b076" } ] }, { "featureType": "poi.park", "elementType": "labels.text", "stylers": [ { "visibility": "off" } ] }, { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [ { "color": "#447530" } ] }, { "featureType": "road", "elementType": "geometry", "stylers": [ { "color": "#f5f1e6" } ] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [ { "color": "#fdfcf8" } ] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [ { "color": "#f8c967" } ] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [ { "color": "#e9bc62" } ] }, { "featureType": "road.highway.controlled_access", "elementType": "geometry", "stylers": [ { "color": "#e98d58" } ] }, { "featureType": "road.highway.controlled_access", "elementType": "geometry.stroke", "stylers": [ { "color": "#db8555" } ] }, { "featureType": "road.local", "elementType": "labels", "stylers": [ { "visibility": "off" } ] }, { "featureType": "road.local", "elementType": "labels.text.fill", "stylers": [ { "color": "#806b63" } ] }, { "featureType": "transit.line", "elementType": "geometry", "stylers": [ { "color": "#dfd2ae" } ] }, { "featureType": "transit.line", "elementType": "labels.text.fill", "stylers": [ { "color": "#8f7d77" } ] }, { "featureType": "transit.line", "elementType": "labels.text.stroke", "stylers": [ { "color": "#ebe3cd" } ] }, { "featureType": "transit.station", "elementType": "geometry", "stylers": [ { "color": "#dfd2ae" } ] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [ { "color": "#b9d3c2" } ] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [ { "color": "#92998d" } ] } ]
		});

		marker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			title: 'My Car',
			icon: './images/car.png'

		});

		firebaseRef.on('child_added', function(data) {

			var lati2 = data.child("latitude").val();
			var longi2 = data.child("longitude").val();
			marker = new google.maps.Marker({
				position: {lat: parseFloat(lati2), lng: parseFloat(longi2)},
				map: map,
				icon: './images/clown.png',
				animation: google.maps.Animation.DROP
			});
			var R = 6371e3;
			var angle1 = lati * (Math.PI/180);
			var angle2 = lati2* (Math.PI/180);
			var changeAngle = (lati2-lati)* (Math.PI/180);
			var changeLon = (longi2-longi)* (Math.PI/180);

			var a = Math.sin(changeAngle/2) * Math.sin(changeAngle/2) + Math.cos(angle1) * Math.cos(angle2) * Math.sin(changeLon/2)*Math.sin(changeLon/2);
			var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
			var d = (R * c)/100;
			console.log(d);
			if(d < 10) {
				danger = true;
			}
		});
		dangerAlert();
	}


	function signal() {
		firebaseRef.push({
			latitude: lati,
			longitude: longi
		});
		marker = new google.maps.Marker({
			position: {lat: parseFloat(lati), lng: parseFloat(longi)},
			map:map,
			icon: './images/clown.png',
			animation: google.maps.Animation.DROP
		});
	}

	function dangerAlert() {
		if(danger == true) {
			console.log(danger);
			var war = document.getElementById('warning');
			war.innerHTML="DANGER: Clown spotted nearby."; 
			war.style.color= "red";
		} else {
			console.log(danger);
			var war = document.getElementById('warning');
			war.innerHTML="You are not currently in any immediate danger."; 
			war.style.color= "green";
		}
	}

	gm.info.getCurrentPosition(processPosition, true);
	gm.info.watchVehicleData(getPos, ['gps_lat','gps_long']);
	gm.info.getVehicleData(getPos, ['gps_lat','gps_long']);

	/*<div>Icons made by <a href="http://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>*/