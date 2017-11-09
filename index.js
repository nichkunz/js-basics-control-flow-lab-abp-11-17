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

// city ternaryCheckCity(city = 'NYC' ? )
const ternaryCheckCity = city = 'nyc' ? true : false;