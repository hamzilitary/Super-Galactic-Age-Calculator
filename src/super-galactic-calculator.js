export function Age(userAge) {
  this.userAge = userAge;
}
export function Birthdate(userBirthdate) {
  this.userBirthdate = userBirthdate;
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
Age.prototype.intoMars = function() {
  let age = this.userAge;
  const mars = 1.88;
  let result = (age / mars);
  if(isNaN(result)) {
    return "can't calculate";
  }
  return result;
};
Age.prototype.intoJupiter = function() {
  let age = this.userAge;
  const jupiter = 11.86;
  let result = (age / jupiter);
  if(isNaN(result)) {
    return "can't calculate";
  }
  return result;
};
Age.prototype.yearsLeftSmoker = function() {
  let age = this.userAge;
  const smoker = 76;
  const mercury = 0.24;
  const venus = 0.62;
  const mars = 1.88;
  const jupiter = 11.86;
  let results = [];
  if (age > smoker) {
    let lifeLeft = age - smoker;
    let mercuryLeft = (lifeLeft / mercury);
    results.push(mercuryLeft);
    let venusLeft = (lifeLeft / venus);
    results.push(venusLeft);
    let marsLeft = (lifeLeft / mars);
    results.push(marsLeft);
    let jupiterLeft = (lifeLeft / jupiter);
    results.push(jupiterLeft);
    return results;
  } else {
    let lifeLeft = smoker - age;
    let mercuryLeft = (lifeLeft / mercury);
    results.push(mercuryLeft);
    let venusLeft = (lifeLeft / venus);
    results.push(venusLeft);
    let marsLeft = (lifeLeft / mars);
    results.push(marsLeft);
    let jupiterLeft = (lifeLeft / jupiter);
    results.push(jupiterLeft);
    return results;
  }


};
Age.prototype.yearsLeftNonSmoker = function() {
  let age = this.userAge;
  const nonSmoker = 81;
  const mercury = 0.24;
  const venus = 0.62;
  const mars = 1.88;
  const jupiter = 11.86;
  let results = [];
  if (age > nonSmoker) {
      let lifeLeft = age - nonSmoker;
      let mercuryLeft = (lifeLeft / mercury);
      results.push(mercuryLeft);
      let venusLeft = (lifeLeft / venus);
      results.push(venusLeft);
      let marsLeft = (lifeLeft / mars);
      results.push(marsLeft);
      let jupiterLeft = (lifeLeft / jupiter);
      results.push(jupiterLeft);
      return results;
    } else {
      let lifeLeft = nonSmoker - age;
      let mercuryLeft = (lifeLeft / mercury);
      results.push(mercuryLeft);
      let venusLeft = (lifeLeft / venus);
      results.push(venusLeft);
      let marsLeft = (lifeLeft / mars);
      results.push(marsLeft);
      let jupiterLeft = (lifeLeft / jupiter);
      results.push(jupiterLeft);
      return results;
    }

};
Birthdate.prototype.dateDifference = function() {
  let dateOfBirth = this.userBirthdate;
  const milliseconds = 1000;
  let birth = new Date(dateOfBirth);
  let currentTime = new Date("03/16/2018");
  let birthSeconds = birth.getTime()/milliseconds;
  let currentSeconds = currentTime.getTime()/milliseconds;
  let difference = currentSeconds - birthSeconds;
  if (isNaN(difference)) {
    return "unable to compute";
  } else {
    return difference;
  }
};
