function bmiCounter(parameter){
  return Math.round(parameter.weight/Math.pow(parameter.height,2))
}

module.exports = bmiCounter