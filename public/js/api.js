/**
 * @author: youxiachai
 * @Date: 13-6-29
 * @version: 1.0
 * To change this template use File | Settings | File Templates.
 */

var opts = {
    lines: 13, // The number of lines to draw
    length: 20, // The length of each line
    width: 10, // The line thickness
    radius: 30, // The radius of the inner circle
    corners: 1, // Corner roundness (0..1)
    rotate: 0, // The rotation offset
    direction: 1, // 1: clockwise, -1: counterclockwise
    color: '#000', // #rgb or #rrggbb
    speed: 1, // Rounds per second
    trail: 60, // Afterglow percentage
    shadow: false, // Whether to render a shadow
    hwaccel: false, // Whether to use hardware acceleration
    className: 'spinner', // The CSS class to assign to the spinner
    zIndex: 2e9, // The z-index (defaults to 2000000000)
    top: 'auto', // Top position relative to parent in px
    left: 'auto' // Left position relative to parent in px
};
var target = document.getElementById('spinner');

$(document).ajaxStart(function () {
    console.log('ajax start');
    $('#spinner').spin(opts).css('margin-top', '100px');
});

$(document).ajaxStop(function () {
    console.log('ajax stop');
    $('#spinner').spin(false).css('margin-top', '0px');
});

$('#apiName').click(function () {
    var query = $('#search').val();
    if (query) {
        console.log($('#search').val());
        $.getJSON('api/name/' + query, function (data) {
            //document.getElementById("result").innerHTML = tmpl("tmpl-demo", data);
//                console.log(data);
            document.getElementById("result").innerHTML = tmpl("tmpl-demo", data);
        });

    } else {
        alert('please input value');
    }
});

$('#search').keydown(function(event){
    var query = $('#search').val();
    if(event.which === 13){
        if (query) {
            console.log($('#search').val());
            $.getJSON('api/name/' + query, function (data) {
                //document.getElementById("result").innerHTML = tmpl("tmpl-demo", data);
//                console.log(data);
                document.getElementById("result").innerHTML = tmpl("tmpl-demo", data);
            });

        } else {
            alert('please input value');
        }
    }
});

$(document).on("click", 'a', function (event) {
    event.preventDefault();
    var current = $(this).attr('href');
    console.log('play-->' + current);
    $("#jquery_jplayer_1").jPlayer("setMedia", { // Set the media
        wav: current
    }).jPlayer("play"); // Attempt to auto play the media
});