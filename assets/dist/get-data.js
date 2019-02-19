(($) => {
    let icons = $(".weather-icons > a");
    $.getJSON("/css-weather-forecast/assets/src/locations.json", (response) => {
        response.data.forEach((item, index, arr) => {
            $('<div/>', {
                'class': 'city ' + item.name.toLowerCase(),
                'text':item.name
            }).appendTo(icons[index]);
            $('<div/>', {
                'class': 'city ' + item.name.toLowerCase(),
                'text':item.temperature + ' ' + item.code
            }).appendTo(icons[index]);
        })
    })
}) (jQuery);
