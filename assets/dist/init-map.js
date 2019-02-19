function initMap() {
    $(document).ready(() => {
        const $xhr = $.ajax({
            url: '/css-weather-forecast/assets/src/locations.json',
            beforeSend: (jQxhr) => {
                $('.preloader').addClass('active');
            }
        });

        const iw = new google.maps.InfoWindow;

        $xhr.done((response) => {
            if(response.success) {
                gMap = new google.maps.Map(document.getElementById("map"), {
                    center: {lat: 50.450, lng: 30.523},
                    zoom: 3
                });
                response.data.forEach((el, i, arr) => {
                    const latLng = {lat: el.lat, lng: el.lng};
                    const marker = new google.maps.Marker({
                        position: latLng,
                        map: gMap,
                        icon: {
                            path: google.maps.SymbolPath.CIRCLE,
                            fillColor: '#2980b9',
                            fillOpacity: 1,
                            strokeWeight: 0,
                            scale: 11
                        },
                        label: {
                            color: "white",
                            fontFamily: 'weathericons',
                            text: el.code
                        }
                    });

                    marker.addListener('click', () => {
                        iw.setContent('<div>' + el.temperature + '</div>');
                        iw.open(gMap, marker);
                    });
                });
            }
            else { console.log('Error!') }
            $('.preloader').removeClass('active');
        });
    })
}
