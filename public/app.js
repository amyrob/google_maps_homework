document.addEventListener('DOMContentLoaded', () => {

  const mapContainer = document.querySelector('#main-map');

  const codeClan = { lat: 55.946962, lng: -3.201958 };

  const mainMap = new MapWrapper( mapContainer, codeClan, 16 );

  const contentString = 'We are CodeClan!'

  const bounceButton = document.querySelector('#button-bouncey-markers');

  mainMap.addMarker(codeClan, contentString);

  mainMap.addClickListener();

  bounceButton.addEventListener('click', () => {
    mainMap.bounceyMarkers();
  });
});
