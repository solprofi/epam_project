function myMap() {
    var locations = [
        ['Bondi Beach', -33.890542, 151.274856],
        ['London', 51.508742, -0.120850],
        ['Dubai', 25.2048, 55.2708],
        ['Astana', 51.1605, 71.4704],
        ['Chornobyl', 51.2763, 30.2219],
        ['Stonehenge', 51.178882, -1.826215],
        ['Mosfellsbaer', 64.16667, -21.7],
        ['Rome', 41.9028, 12.4964],
        ['Cairo', 30.0444, 31.2357],
        ['Bogota', 4.7110, -74.0721],
        ['San Francisco', 37.7749, -122.4194],
        ['Los Angeles', 34.0522, -118.2437],
        ['Albuquerque', 35.0844, -106.6504]
      ];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 3,
        center: new google.maps.LatLng(51.508742, -0.120850),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
  
      var infowindow = new google.maps.InfoWindow();
  
      var marker, i;
  
      for (i = 0; i < locations.length; i++) {  
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[i][1], locations[i][2]),
          map: map
        });
  
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            infowindow.setContent(locations[i][0]);
            infowindow.open(map, marker);
          }
        })(marker, i));
}
}