/*var dest = {
	address: '16604 SE Fisher Dr. Vancouver, WA 98683 USA'
}*/
function getPos() {
	document.getElementById("map").style.display = 'block';
	 initialize();
	gm.info.getCurrentPosition(showDest, true)
	gm.ui.showAlert({
	  alertTitle: 'Your Location Has Been Reported',
	  alertDetail: 'stay alive',
	  primaryButtonText: 'x',
	  primaryAction: function fixBG() {
	  	document.body.style.backgroundImage= "none";
		document.getElementById('audio').pause();
		document.getElementById("map").style.display = 'none';
	  },
	  secondaryButtonText: '',
	  secondaryAction: function hangWithYoko() {}
	})
	changeBG();
}

function changeBG() {
	document.body.style.backgroundImage = "url('http://cdn20.patchcdn.com/users/22896833/20160930/013212/styles/T600x450/public/article_images/clown-1475256632-9910.jpg')";
	document.getElementById('audio').play();
}


var map;

  var LatLng = {lat: 42.341719, lng: -83.060042};
      function initialize() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: LatLng,
          mapTypeId: 'terrain'

        });

        var marker = new google.maps.Marker({
          position: LatLng,
          title:"Hello World!"
        });

        marker.setMap(map);
        // Create a <script> tag and set the USGS URL as the source.
        var script = document.createElement('script');
        // (In this example we use a locally stored copy instead.)
        // script.src = 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp';
        script.src = 'https://developers.google.com/maps/documentation/javascript/tutorials/js/earthquake_GeoJSONP.js';
        document.getElementsByTagName('head')[0].appendChild(script);
      }

      


function showDest(position) {
	var location = position.coords.latitude + " " + position.coords.longitude;
	if(location !== undefined) {
		var locationText = document.getElementById('location');
		locationText.innerHTML = location;
	}
}