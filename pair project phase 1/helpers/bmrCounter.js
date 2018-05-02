function bmrCounter(parameter) {
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

module.exports = bmrCounter