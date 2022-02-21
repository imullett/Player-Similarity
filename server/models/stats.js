const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return stats.init(sequelize, DataTypes);
}

class stats extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      primaryKey: true
    },
    Year: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Pos: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Team: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PTS: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    MP: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    AST: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    TRB: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    STL: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    BLK: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    WS: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    PC1: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    PC2: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'stats',
    timestamps: false
  });
  }
}
