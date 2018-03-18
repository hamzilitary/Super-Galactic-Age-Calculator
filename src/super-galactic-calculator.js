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
