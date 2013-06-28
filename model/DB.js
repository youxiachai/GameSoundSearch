/**
 * @author: youxiachai
 * @Date: 13-6-27
 * @version: 1.0
 * To change this template use File | Settings | File Templates.
 */

var Sequelize = require('sequelize');

var sqlite = new Sequelize('database', null, null, {
   dialect: 'sqlite',
   storage: __dirname + '/sounds.sqlite',
    define: {
        timestamps: false,
        freezeTableName: true
    }
});

exports.Sound = sqlite.import(__dirname + "/Sound");