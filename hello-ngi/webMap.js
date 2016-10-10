 // Note: This example requires that you consent to location sharing when
      // prompted by your browser. If you see the error "The Geolocation service
      // failed.", it means you probably did not give permission for the browser to
      // locate you.

      
var sections = $('section')
    , nav = $('nav')
    , nav_height = nav.outerHeight();
$(document).ready(function(){       

  /*if($(window).width() < 1073) {

   
    $('body').hide();

  }*/

  var navClicked = false;

   $(".navbar-toggle").click(function() {
       if(navClicked === false) {
           $(".navbar-default").css({"background": "#e74c3c"});
           $("button.navbar-toggle").css({"background-color": "#e74c3c"});
          $(".navbar-brand > img").css({"display":"block"});

           navClicked = true;
       } else if($(document).scrollTop() > 40){
           $(".navbar-default").css({"background": "#e74c3c"});
           navClicked = false;
       } else {
           $(".navbar-default").css({"background": "transparent"});
            $("button.navbar-toggle").css({"background-color": "transparent"});
           $('.navbar-brand > img').css({"display":"none"});
           navClicked = false;
           $('.navbar-default').css({" -webkit-box-shadow": "0 0px 0px rgba(0, 0, 0, 0.5)",
               "-moz-box-shadow": "0 0px 0px rgba(0, 0, 0, 0.5)",
               "box-shadow": "0 0px 0px rgba(0, 0, 0, 0.5)"});
       }

    });


 

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

            $('.navbar-brand > img').css({"display":"block"});
            $('.navbar-default').css({" -webkit-box-shadow": "0 4px 4px rgba(0, 0, 0, 0.5)",
                                        "-moz-box-shadow": "0 4px 4px rgba(0, 0, 0, 0.5)",
                                         "box-shadow": "0 4px 4px rgba(0, 0, 0, 0.5)"});
        }  else if(navClicked === false ) {

           

             $('.navbar-brand > img').css({"display":"none"});
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
    

  window.mobilecheck = function() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    
    if(check === true) {
      document.getElementById("report").style.display = 'block';
      console.log("mobile device");
    } else {
      document.getElementById("report").style.display = 'none';
      console.log("Not a mobile device");
    }
    return check;
  };
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

       if(window.mobilecheck() === true) {

          var report = document.getElementById("report");
          report.style.display = 'block';
          report.onclick = function () {

            var d = new Date();
            var dString = d.toString().substring(0, 25) + d.toString().substring(33);
            firebaseRef.push({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              time: dString
            });
            
            marker = new google.maps.Marker({
              position: pos,
              map:map,
              icon: 'src/images/clown.png'
            });

            console.log("Reported sighting!");

        }

        }

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

  