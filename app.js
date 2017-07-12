function fortuneTeller(childNum, PartnerName, geo, jobTitle){
return "you will be a " + jobTitle + " in " + geo + " and married to " + PartnerName+ " with " + childNum + " kids.";
alert( "you will be a " + jobTitle + " in " + geo + " and married to " + PartnerName+ " with " + childNum + " kids.");
}

var myFortune = fortuneTeller(3, "bob", "Hawaii", "Developer");
console.log(myFortune);

function ageCalculator(birthYear, futureYear){
var possibleAge1 = futureYear - birthYear;
var possibleAge2 = (futureYear - birthYear) + 1;
return "I will be either " + possibleAge1 + " or " + possibleAge2 + " in " + futureYear;
alert( "you will be a " + jobTitle + " in " + geo + " and married to " + PartnerName+ " with " + childNum + " kids.");
}

var myAge = ageCalculator(1986, 2020);
console.log(myAge);