(($) => {
    $("a").on('click', function(event) {
        const $xhr = $.ajax({
            url: '/css-weather-forecast/assets/src/locations.json'
        });

        $xhr.done((response) => {
            if (response.success) {
                response.data.forEach((item) => {
                    $('#map').animate({
                        center: {lat: item.lat, lng: item.lng}
                    }, 800);
                    if(item.name.toLowerCase() === event.target.className.split(" ")[1]) {
                        gMap.panTo({lat: item.lat, lng: item.lng});
                    }
                });
            }
        });
    });

}) (jQuery);
