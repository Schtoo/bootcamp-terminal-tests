module.exports = function yearsAgo(year) {
  var result = new Date();
  var current = result.getFullYear();
  return current - year;
}