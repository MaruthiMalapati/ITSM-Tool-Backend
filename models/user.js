const {DataTypes} = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  phone: {
    type: DataTypes.STRING(15), // use STRING to allow leading 0s
    allowNull: true
  },

  gender: {
    type: DataTypes.ENUM('Male', 'Female', 'Others'),
    allowNull: true
  },
  dob: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
 
});


module.exports = User;
// gender: {
//     type: DataTypes.ENUM('M', 'F', 'O'),
//     allowNull: true
//   },
//   dob: {
//     type: DataTypes.DATEONLY,
//     allowNull: true
//   },
//   address: {
//     type: DataTypes.TEXT,
//     allowNull: true
//   },
//   country: {
//     type: DataTypes.STRING(50),
//     allowNull: true
//   },
//   pincode: {
//     type: DataTypes.STRING(10), // allows alphanumeric or leading 0s
//     allowNull: true
//   }