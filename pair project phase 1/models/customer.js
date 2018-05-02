'use strict';
module.exports = (sequelize, DataTypes) => {
  var customer = sequelize.define('customer', {
    name: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      isAlphanumeric: true
    },
    password: DataTypes.STRING,
    tinggi_badan: DataTypes.INTEGER,
    berat_badan: DataTypes.INTEGER,
    gender:DataTypes.STRING,
    level_activity:DataTypes.STRING,
    age:DataTypes.INTEGER,
    packetsId:DataTypes.INTEGER,
    BMI:DataTypes.FLOAT,
    BMR:DataTypes.FLOAT
  }, {
    hooks: {
      afterCreate:(instance,option) => {
        var parameter = {
          gender: instance.gender,
          weight: instance.berat_badan, //in kilograms
          height: instance.tinggi_badan, //in meters
          age: instance.age,
          activityLevel : instance.level_activity
        }
        
        function bmiCounter(parameter){
          return Math.round(parameter.weight/Math.pow(parameter.height,2))
        }
        
        function bmrCounter(parameter) {
          let bmr;
          if (parameter.gender == 'male') {
            bmr = Math.round(66 + (6.23 * parameter.weight * 2.2046226218) + (12.7 * parameter.height * 39.3701/100) - (6.8 * parameter.age))
          } else {
            bmr = 655 + (4.35 * parameter.weight * 2.2046226218) + (4.7 * parameter.height * 39.3701/100) - (4.7 * parameter.age)
          }
          switch (parameter.activityLevel) {
            case 'low':
              return Math.round(bmr * 1.53)
              break;
            case 'medium':
              return Math.round(bmr * 1.76)
              break;
            case 'height':
              return Math.round(bmr * 2.25)
              break;
        
          }
        }
        var bmi = bmiCounter(parameter)
        var bmr = bmrCounter(parameter)
        customer.update({
          BMI: bmi,
          BMR: bmr,
        },{where : {id : instance.id}})
        
      }
    }

  });
  customer.associate = function(models) {
    // associations can be defined here
  };
  customer.prototype.getBMR = function () {
    let parameter = {
      gender: this.gender,
      weight: this.berat_badan, //in kilograms
      height: this.tinggi_badan/100, //in meters
      age: this.age,
      activityLevel : this.level_activity
    }
  
  let bmr = 0
  if (parameter.gender == 'male') {
    bmr = Math.round(66 + (6.23 * parameter.weight * 2.2046226218) + (12.7 * parameter.height * 39.3701) - (6.8 * parameter.age))
  } else {
    bmr = 655 + (4.35 * parameter.weight * 2.2046226218) + (4.7 * parameter.height * 39.3701) - (4.7 * parameter.age)
  }
  
  switch (parameter.activityLevel) {
    case 'low':
      return Math.round(bmr * 1.53)
      break;
    case 'medium':
      return Math.round(bmr * 1.76)
      break;
    case 'height':
      return Math.round(bmr * 2.25)
      break;

  }
}
  return customer;
};
