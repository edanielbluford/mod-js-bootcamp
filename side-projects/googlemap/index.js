function myMap() {
  const mapProp = {
    center: new google.maps.LatLng(51.508742, -0.12085),
    zoon: 5
  };

  const map = new google.maps.Map(
    document.getElementById("googleMap"),
    mapProp
  );
}
