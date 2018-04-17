const MapWrapper = function (container, center, zoom) {

  this.googleMap = new google.maps.Map(container, {
    center: center, zoom: zoom
  });
  this.markers = [];
};

MapWrapper.prototype.addMarker = function (coords, contentString) {
  const marker = new google.maps.Marker({
    map: this.googleMap,
    position: coords,
    draggable: true,
    animation: google.maps.Animation.DROP
  });
    this.markers.push(marker);

  const infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  marker.addListener('click', function () {
    infowindow.open(this.googleMap, marker);
  });

};

MapWrapper.prototype.addClickListener = function () {
  google.maps.event.addListener(this.googleMap, 'click', (evt) => {
    const lat = evt.latLng.lat();
    const lng = evt.latLng.lng();
    this.addMarker({ lat: lat, lng: lng });
  });
};

MapWrapper.prototype.bounceyMarkers = function (){
  this.markers.forEach(function (marker) {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE)
    };
  });
};
