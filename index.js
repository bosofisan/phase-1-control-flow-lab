function scuberGreetingForFeet(someValue){
  // Write your code here!
  let result;
  if (someValue <= 400){
    result = 'This one is on me!'
  }
  else if (someValue > 400 && someValue < 2000) {
    result = 'That will be twenty bucks.';
  }
  else if (someValue >= 2000 && someValue <=2500) {
    result = 'I will gladly take your thirty bucks.'
  }
  else {
    result = 'No can do.'
  }
  return result
}

function ternaryCheckCity(someCity){
  // Write your code here!
  let result;
   if (someCity === 'NYC'){
    result = 'Ok, sounds good.'
   }
   else {
    result = 'No go.'
   }
   return result
}

function switchOnCharmFromTip(Tip){
  // Write your code here!
  let response
  switch (Tip) {
    case 'generous':
      response = 'Thank you so much.';
      break;
      case 'not as generous':
        response = 'Thank you.'
        break;
        default:
          response = 'Bye.'
  }
  return response
}