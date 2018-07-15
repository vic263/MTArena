var map;

function initialize() {
  var myLatlng = new google.maps.LatLng(53.16598,-3.140963);
  var mapOptions = {
    zoom: 15,
    center: myLatlng
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  
  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'Compacc Complete Accountancy'
  });
  
}

google.maps.event.addDomListener(window, 'load', initialize);