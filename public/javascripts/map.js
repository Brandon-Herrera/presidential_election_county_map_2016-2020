// mapboxgl.accessToken = process.env.MAPBOX_TOKEN
mapboxgl.accessToken = 'pk.eyJ1IjoibW9udGF1ay1icmFuZG9uIiwiYSI6ImNrdmpwZ2w0MzM1MW8ybnMxaHBlY2M1M2EifQ.XRhb2uHiO3ITgUfkyw5QLg';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
});