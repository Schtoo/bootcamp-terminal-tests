module.exports = function(reg) {
  if (reg.startsWith('CY'))
    return true;
  else
    return false;
}