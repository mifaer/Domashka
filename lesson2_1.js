/**
* Write isPowerOfTwo function that indicates if an argument is a power of two.
* @param	{Number}	x	An argument.
* @return	{Boolean}		Return a power of two is true or false.
*/
function isPowerOfTwo(x) {
  if(Math.sqrt(x)%1 == 0) {
    return true;
  } else {
    return false;
  }
}
isPowerOfTwo(1024); // true
isPowerOfTwo(1023); // false