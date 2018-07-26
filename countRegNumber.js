module.exports = function(regNumber) {
  var regCount = regNumber.split(',');
  return regCount.length;
}