module.exports = function(regNumber, regPlates) {
  var province = regNumber.endsWith(regPlates);
  // console.log(province);
  return province;
}