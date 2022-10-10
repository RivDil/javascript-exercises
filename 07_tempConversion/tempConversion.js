const ftoc = function(faren) {
  let converted = (faren - 32)*5/9;
  let decimalcon = Math.round(converted *10)/10
  return decimalcon
};

const ctof = function(celc) {
  let converted = (celc * 9/5 + 32);
  let decimalcon = Math.round(converted *10)/10
  return decimalcon
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
