function callfunc (myFunc, myAges){
  return myFunc(myAges);
}

function addHun (num){
  return num + 200;
}
var result = callfunc(addHun, 1000);
console.log(result);