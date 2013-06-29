/**
 * @author: youxiachai
 * @Date: 13-6-29
 * @version: 1.0
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function () {
    $("#jquery_jplayer_1").jPlayer({
        ready: function () { // The $.jPlayer.event.ready event
            console.log('ready ---');
        },
        ended: function () {
            console.log('stop ---');
        },
        supplied: "wav"
    });
});

$.getJSON('api/count', function (data) {
    //document.getElementById("result").innerHTML = tmpl("tmpl-demo", data);
//                console.log(data);
    $('#soundsCount').text('' + data.count);
});

