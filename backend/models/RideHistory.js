const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const RideHistory = sequelize.define('RideHistory', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    references: {
      model: User,
      key: 'id',
    },
  },
  rideDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  details: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

RideHistory.belongsTo(User, { foreignKey: 'userId' });
module.exports = RideHistory;
