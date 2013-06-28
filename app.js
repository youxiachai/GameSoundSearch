/**
 * @author: youxiachai
 * @Date: 13-6-27
 * @version: 1.0
 * To change this template use File | Settings | File Templates.
 */
var express = require('express');
var app = express();
var http = require('http');
var sounds = require('./routes/sounds');
app.set('port', process.env.PORT || 3005);
app.use(express.logger('dev'));
app.use(express.compress());
app.use(express.static(__dirname + '/sound'));
app.use(express.static(__dirname + '/public'));
//var oneYear = 31557600000;
//app.use(express.static(__dirname + '/public', { maxAge: 31557600000 }));

app.use(app.router);


app.get('/api/id/:id', sounds.info);

app.get('/api/name/:name', sounds.name);

app.get('/api/count', sounds.counts);


http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
    console.log('env: ' + process.env.NODE_ENV);
});