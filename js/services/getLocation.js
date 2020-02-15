<<<<<<< HEAD
// let mapKey = 'AIzaSyDy3wy0HaV150Gwn6BaFvio0Of0Xmu-d-A';
// let clientID = '337821837690-p87uv8i48dvvqfvb22drqv4ufhtbtq0q.apps.googleusercontent.com'
// let secret = 'xyr7iahp7gKbt-F5m9R7_YBH'
// let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=40.681965,-73.906887&result_type=neighborhood|political&key=${mapKey}`
// let url2 = `https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBy4wDeKRC707MxV4NgPvdWQsP43FnNtsY`
=======

>>>>>>> 6253ac9ea2b93ebecf603bed55392e840d71144c


let city = geoplugin_city();
let state = geoplugin_regionCode();
let currentPlace = `${city}, ${state}`;
$('#currentLocation').html(currentPlace);




