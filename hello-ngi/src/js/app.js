/*var dest = {
	address: '16604 SE Fisher Dr. Vancouver, WA 98683 USA'
}*/
function getPos() {
	gm.info.getCurrentPosition(showDest, true);
	changeBG();
	gm.ui.showAlert({
	  alertTitle: 'Your Location Has Been Reported',
	  alertDetail: 'stay alive',
	  primaryButtonText: 'x',
	  primaryAction: function fixBG() {
	  	document.body.style.backgroundImage= "none";
	document.getElementById('audio').pause();
	  },
	  secondaryButtonText: '',
	  secondaryAction: function hangWithYoko() {}
	})
	
	
}

function changeBG() {
	document.body.style.backgroundImage = "url('http://cdn20.patchcdn.com/users/22896833/20160930/013212/styles/T600x450/public/article_images/clown-1475256632-9910.jpg')";
	document.getElementById('audio').play();
}

var map;

      function initialize() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 2,
          center: new google.maps.LatLng(2.8,-187.3),
          mapTypeId: 'terrain'
        });

        // Create a <script> tag and set the USGS URL as the source.
        var script = document.createElement('script');
        // (In this example we use a locally stored copy instead.)
        // script.src = 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp';
        script.src = 'https://developers.google.com/maps/documentation/javascript/tutorials/js/earthquake_GeoJSONP.js';
        document.getElementsByTagName('head')[0].appendChild(script);
      }

      // Loop through the results array and place a marker for each
      // set of coordinates.
      window.eqfeed_callback = function(results) {
        for (var i = 0; i < results.features.length; i++) {
          var coords = results.features[i].geometry.coordinates;
          var latLng = new google.maps.LatLng(coords[1],coords[0]);
          var marker = new google.maps.Marker({
            position: latLng,
            map: map
          });
        }




      }


function showDest(position) {
	var location = position.coords.latitude + " " + position.coords.longitude;
	if(location !== undefined) {
		var locationText = document.getElementById('location');
		locationText.innerHTML = location;
	}
}