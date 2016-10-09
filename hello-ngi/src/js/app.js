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
			styles: [  {    "elementType": "geometry",    "stylers": [      {        "color": "#1d2c4d"      }    ]  },  {    "elementType": "labels.text.fill",    "stylers": [      {        "color": "#8ec3b9"      }    ]  },  {    "elementType": "labels.text.stroke",    "stylers": [      {        "color": "#1a3646"      }    ]  },  {    "featureType": "administrative.country",    "elementType": "geometry.stroke",    "stylers": [      {        "color": "#4b6878"      }    ]  },  {    "featureType": "administrative.land_parcel",    "elementType": "labels.text.fill",    "stylers": [      {        "color": "#64779e"      }    ]  },  {    "featureType": "administrative.province",    "elementType": "geometry.stroke",    "stylers": [      {        "color": "#4b6878"      }    ]  },  {    "featureType": "landscape.man_made",    "elementType": "geometry.stroke",    "stylers": [      {        "color": "#334e87"      }    ]  },  {    "featureType": "landscape.natural",    "elementType": "geometry",    "stylers": [      {        "color": "#023e58"      }    ]  },  {    "featureType": "poi",    "elementType": "geometry",    "stylers": [      {        "color": "#283d6a"      }    ]  },  {    "featureType": "poi",    "elementType": "labels.text.fill",    "stylers": [      {        "color": "#6f9ba5"      }    ]  },  {    "featureType": "poi",    "elementType": "labels.text.stroke",    "stylers": [      {        "color": "#1d2c4d"      }    ]  },  {    "featureType": "poi.park",    "elementType": "geometry.fill",    "stylers": [      {        "color": "#023e58"      }    ]  },  {    "featureType": "poi.park",    "elementType": "labels.text.fill",    "stylers": [      {        "color": "#3C7680"      }    ]  },  {    "featureType": "road",    "elementType": "geometry",    "stylers": [      {        "color": "#304a7d"      }    ]  },  {    "featureType": "road",    "elementType": "labels.text.fill",    "stylers": [      {        "color": "#98a5be"      }    ]  },  {    "featureType": "road",    "elementType": "labels.text.stroke",    "stylers": [      {        "color": "#1d2c4d"      }    ]  },  {    "featureType": "road.highway",    "elementType": "geometry",    "stylers": [      {        "color": "#2c6675"      }    ]  },  {    "featureType": "road.highway",    "elementType": "geometry.stroke",    "stylers": [      {        "color": "#255763"      }    ]  },  {    "featureType": "road.highway",    "elementType": "labels.text.fill",    "stylers": [      {        "color": "#b0d5ce"      }    ]  },  {    "featureType": "road.highway",    "elementType": "labels.text.stroke",    "stylers": [      {        "color": "#023e58"      }    ]  },  {    "featureType": "transit",    "elementType": "labels.text.fill",    "stylers": [      {        "color": "#98a5be"      }    ]  },  {    "featureType": "transit",    "elementType": "labels.text.stroke",    "stylers": [      {        "color": "#1d2c4d"      }    ]  },  {    "featureType": "transit.line",    "elementType": "geometry.fill",    "stylers": [      {        "color": "#283d6a"      }    ]  },  {    "featureType": "transit.station",    "elementType": "geometry",    "stylers": [      {        "color": "#3a4762"      }    ]  },  {    "featureType": "water",    "elementType": "geometry",    "stylers": [      {        "color": "#0e1626"      }    ]  },  {    "featureType": "water",    "elementType": "labels.text.fill",    "stylers": [      {        "color": "#4e6d70"      }    ]  }]
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