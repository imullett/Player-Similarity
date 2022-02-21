const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return seasons_stats.init(sequelize, DataTypes);
}

class seasons_stats extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    Year: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Player: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Pos: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ID: {
      type: DataTypes.BIGINT,
      allowNull: true,
      primaryKey: true
    },
    Age: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Tm: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    G: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    GS: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    MP: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    PER: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    'TS%': {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    '3PAr': {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    FTr: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    'ORB%': {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    'DRB%': {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    'TRB%': {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    'AST%': {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    'STL%': {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    'BLK%': {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    'TOV%': {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    'USG%': {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    OWS: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    DWS: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    WS: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    OBPM: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    DBPM: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    BPM: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    VORP: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    FG: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    FGA: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    'FG%': {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    '3P': {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    '3PA': {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    '3P%': {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    '2P': {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    '2PA': {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    '2P%': {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    'eFG%': {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    FT: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    FTA: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    'FT%': {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ORB: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    DRB: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    TRB: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    AST: {
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
    TOV: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    PF: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    PTS: {
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
    tableName: 'seasons_stats',
    timestamps: false
  });
  }
}
