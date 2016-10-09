 // Note: This example requires that you consent to location sharing when
      // prompted by your browser. If you see the error "The Geolocation service
      // failed.", it means you probably did not give permission for the browser to
      // locate you.

      var navClicked = true;
var sections = $('section')
    , nav = $('nav')
    , nav_height = nav.outerHeight();
$(document).ready(function(){       


    nav.find('a').on('click', function () {
      var $el = $(this)
          , id = $el.attr('href');

      $('html, body').animate({
          scrollTop: $(id).offset().top - nav_height
      }, 500);

      return false;
    });

      $(document).scroll(function(){
        if($(this).scrollTop() > 40)
        {
            $('.navbar-default').css({"background":"#e74c3c"});
            $('#top').css({"display":"block"});
            $('.navbar-default').css({" -webkit-box-shadow": "0 4px 4px rgba(0, 0, 0, 0.5)",
                                        "-moz-box-shadow": "0 4px 4px rgba(0, 0, 0, 0.5)",
                                         "box-shadow": "0 4px 4px rgba(0, 0, 0, 0.5)"});
        }  else {

             $('#top').css({"display":"none"});
           $('.navbar-default').css({"background":"transparent"});
            $('.navbar-default').css({" -webkit-box-shadow": "0 0px 0px rgba(0, 0, 0, 0.5)",
                "-moz-box-shadow": "0 0px 0px rgba(0, 0, 0, 0.5)",
                "box-shadow": "0 0px 0px rgba(0, 0, 0, 0.5)"});

        }
        });
    
});

var stylesArray = [  {    "elementType": "geometry",    "stylers": [      {        "color": "#1d2c4d"      }    ]  },  {    "elementType": "labels.text.fill",    "stylers": [      {        "color": "#8ec3b9"      }    ]  },  {    "elementType": "labels.text.stroke",    "stylers": [      {        "color": "#1a3646"      }    ]  },  {    "featureType": "administrative.country",    "elementType": "geometry.stroke",    "stylers": [      {        "color": "#4b6878"      }    ]  },  {    "featureType": "administrative.land_parcel",    "elementType": "labels.text.fill",    "stylers": [      {        "color": "#64779e"      }    ]  },  {    "featureType": "administrative.province",    "elementType": "geometry.stroke",    "stylers": [      {        "color": "#4b6878"      }    ]  },  {    "featureType": "landscape.man_made",    "elementType": "geometry.stroke",    "stylers": [      {        "color": "#334e87"      }    ]  },  {    "featureType": "landscape.natural",    "elementType": "geometry",    "stylers": [      {        "color": "#023e58"      }    ]  },  {    "featureType": "poi",    "elementType": "geometry",    "stylers": [      {        "color": "#283d6a"      }    ]  },  {    "featureType": "poi",    "elementType": "labels.text.fill",    "stylers": [      {        "color": "#6f9ba5"      }    ]  },  {    "featureType": "poi",    "elementType": "labels.text.stroke",    "stylers": [      {        "color": "#1d2c4d"      }    ]  },  {    "featureType": "poi.park",    "elementType": "geometry.fill",    "stylers": [      {        "color": "#023e58"      }    ]  },  {    "featureType": "poi.park",    "elementType": "labels.text.fill",    "stylers": [      {        "color": "#3C7680"      }    ]  },  {    "featureType": "road",    "elementType": "geometry",    "stylers": [      {        "color": "#304a7d"      }    ]  },  {    "featureType": "road",    "elementType": "labels.text.fill",    "stylers": [      {        "color": "#98a5be"      }    ]  },  {    "featureType": "road",    "elementType": "labels.text.stroke",    "stylers": [      {        "color": "#1d2c4d"      }    ]  },  {    "featureType": "road.highway",    "elementType": "geometry",    "stylers": [      {        "color": "#2c6675"      }    ]  },  {    "featureType": "road.highway",    "elementType": "geometry.stroke",    "stylers": [      {        "color": "#255763"      }    ]  },  {    "featureType": "road.highway",    "elementType": "labels.text.fill",    "stylers": [      {        "color": "#b0d5ce"      }    ]  },  {    "featureType": "road.highway",    "elementType": "labels.text.stroke",    "stylers": [      {        "color": "#023e58"      }    ]  },  {    "featureType": "transit",    "elementType": "labels.text.fill",    "stylers": [      {        "color": "#98a5be"      }    ]  },  {    "featureType": "transit",    "elementType": "labels.text.stroke",    "stylers": [      {        "color": "#1d2c4d"      }    ]  },  {    "featureType": "transit.line",    "elementType": "geometry.fill",    "stylers": [      {        "color": "#283d6a"      }    ]  },  {    "featureType": "transit.station",    "elementType": "geometry",    "stylers": [      {        "color": "#3a4762"      }    ]  },  {    "featureType": "water",    "elementType": "geometry",    "stylers": [      {        "color": "#0e1626"      }    ]  },  {    "featureType": "water",    "elementType": "labels.text.fill",    "stylers": [      {        "color": "#4e6d70"      }    ]  }];
var firebaseRef = firebase.database().ref();
      
  function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 14,
      styles: stylesArray
    });
    

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        marker2 = new google.maps.Marker({
          position: pos,
          map: map,
          icon: "src/images/person.png"

          });
       
        map.setCenter(pos);
       
        firebaseRef.on('child_added', function(data) {

          var lati = data.child("latitude").val();
          var longi = data.child("longitude").val();
          marker = new google.maps.Marker({
          position: {lat: parseFloat(lati), lng: parseFloat(longi)},
          map: map,
          icon: "src/images/clown.png"

          });

          
      });


      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  }

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
  }

