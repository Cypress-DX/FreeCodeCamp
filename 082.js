let count = 0;

function cc(card) {
  // Only change code below this line
let strategy = "";
switch(card) {
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    count++;
  if (count > 0) {
    strategy = " Bet";
  } else {
    strategy = " Hold";
  }
    return count + strategy;
    break;
  case 7:
  case 8:
  case 9:
    count;
    if (count > 0) {
    strategy = " Bet";
  } else {
    strategy = " Hold";
  }
    return count + strategy;
    break;
  case 10:
  case "J":
  case "Q":
  case "K":
  case "A":
    count--;
    if (count > 0) {
    strategy = " Bet";
  } else {
    strategy = " Hold";
  }
    return count + strategy;
    break;
  default:
  consol.log("There is no match");
}

  return "Change Me";
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
