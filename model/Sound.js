/**
 * @author: youxiachai
 * @Date: 13-6-27
 * @version: 1.0
 * To change this template use File | Settings | File Templates.
 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('sounds', {
        id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        folder: DataTypes.STRING,
        size: DataTypes.STRING
    });
}