;(($) => {
    $.getScript("assets/dist/get-data.js");
    $.getScript("assets/dist/init-map.js");
    $.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBbbG0hmgpu6gKDAxeEVPtAZlTyuZ2Cxmc&callback=initMap");
    $.getScript("assets/dist/smooth-scrolling.js");
    $.getScript("assets/dist/display-city.js");
}) (jQuery);
