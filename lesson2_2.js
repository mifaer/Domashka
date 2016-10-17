/**
* Write increment function which returns the increased argument
* per unit and the number of function calls.
* @param	{Object}	x		Object.
* @param	{Number}	value	Increased argument.
* @param	{Number}	calls	Number of function calls.
* @return	{String}			Information about new object.
*/
var increment = (function() {
	var x = {
	value: 0,
	calls: 0
	}
	return function(n) {
		x.value = ++n;
		x.calls++;
		return console.log(x);
	}
})();
increment(10); // { value: 11, calls: 1}
increment(14); // { value: 15, calls: 2}