export function Age(userAge) {
  this.userAge = userAge;
}
Age.prototype.intoDays = function() {
  let age = this.userAge;
  const days = 365;
  let result = (age * days);
  if(isNaN(result)) {
    return "can't calculate";
  }
  return result;
};
Age.prototype.intoMercury = function() {
  let age = this.userAge;
  const mercury = 0.24;
  let result = (age / mercury);
  if(isNaN(result)) {
    return "can't calculate";
  }
  return result;
};
Age.prototype.intoVenus = function() {
  let age = this.userAge;
  const venus = 0.62;
  let result = (age / venus);
  if(isNaN(result)) {
    return "can't calculate";
  }
  return result;

};
