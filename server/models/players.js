const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return players.init(sequelize, DataTypes);
}

class players extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      primaryKey: true
    },
    player: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'players',
    timestamps: false
  });
  }
}
