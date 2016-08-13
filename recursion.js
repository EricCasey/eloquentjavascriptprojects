function isEven(number) {
  if (number < 0) {
    number = Math.abs(number);
  }
  if (number===0) {
    return true;
  }
  if (number===1) {
    return false;
  }
  else {
    number = number - 2;
    return isEven(number);
  }

}
  console.log(isEven(75));
    console.log(isEven(50));
      console.log(isEven(-1));

      /// admittedly found on stack overflow no same