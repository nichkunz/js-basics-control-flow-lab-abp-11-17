// Write your code in this file!
function scuberGreetingForFeet(totalDistance) {
  if (totalDistance <= 400) {
    return 'This one is on me!'
  }
  else if (totalDistance > 2000 && totalDistance <=2500) {
    return 'I will gladly take your thirty bucks.'
  }
  else {
    return 'No can do.'
  }
}
let city = 'NYC';
function ternaryCheckCity(CITY) {
checkNyc = city == 'NYC' ? 'Ok, sounds good.' : 'No go.';
}
// function ternaryCheckCity(city) {
//   city = 'NYC' ? "Ok, sounds good." : "No go.";
// }
// function ternaryCheckCity(check) {
//   (city = 'NYC') ? 'Ok, sounds good.' : 'No go.';
// }
// const ternaryCheckCity = (city = 'NYC') ? 'Ok, sounds good.':'No go.';


// const city = 'NYC';
// let check = true;
// function ternaryCheckCity(city) {
//   city = 'NYC' ? 'Ok, sounds good.' : 'No go.';
// }
