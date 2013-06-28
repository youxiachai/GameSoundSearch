/**
 * @author: youxiachai
 * @Date: 13-6-27
 * @version: 1.0
 * To change this template use File | Settings | File Templates.
 */
var Sound = require('../model/DB').Sound;

var idMap = {};


exports.info = function (res, req) {
    var id = res.params.id;
    console.log("id -> " + id);
    var memId = idMap[id];
    if (!memId) {
        Sound.find(id).success(function (sound) {
            sound.dataValues.path = '/' + sound.dataValues.folder + '/' + sound.dataValues.name + '.wav';
            idMap[id] = sound.dataValues;
            console.log(idMap[id]);
            req.json(200, idMap[id]);
        });
    } else {
        console.log('get memId' + id);
        req.json(200, memId);
    }
};

var host = "http://42.121.117.150:10004";

var buildPath = function (sound) {
    return  host + '/' + sound.folder + '/' + sound.name + '.wav';
}
var memSearch = {}

var soundsCount = 0;

exports.counts = function (res, req) {
    if(!soundsCount){
        Sound.count().success(function (c) {
            soundsCount = c;
            req.json(200, {count : soundsCount});
        });
    } else {
        req.json(200, {count : soundsCount});
    }

}

exports.name = function (res, req) {
    var name = res.params.name;
    var searchResult = memSearch[name];
    if (!searchResult) {
//        Sound.findAll()
        Sound.findAll({ where: ["description LIKE '%" + name + "%'"] }).success(function (sound) {
//            console.log(sound);
            var array = [];
            for (var i in sound) {
                sound[i].dataValues.path = buildPath(sound[i]);
                array[i] = sound[i].dataValues;
            }
            memSearch[name] = array;
            req.json(200, array);
        });
    } else {
        console.log('reuse');
        req.json(200, searchResult);
    }

}