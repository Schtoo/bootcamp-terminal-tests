module.exports = function(salesData) {
  var salesD = [];
  for (var i = 0; i < salesData.length; i++) {
    salesD.push(salesData[i].sales);
    var max = Math.max.apply(null, salesD);
    if (max === salesData[i].sales) {
      var departments = salesData[i].department;
    }
  }
  return departments;
}