// 1
var numbers = [1, 1];

function fibonacci(n) {
	var a = 1;
	var b = 1;
	
	for (var i = 3; i <= n; i++) {
		var c = a + b;
		numbers.push(c);
		a = b;
		b = c;
	}
	return c;
}
fibonacci(40);
console.log("Первые 40 чисел Фибоначи: " + numbers); //Find first 40 numbers


// 2
var numEvenOrOdd = numbers.map(function(item){
	if (item%2==0) {
		return item - 2; //If Even: n-2
	} else {
		return item - 4; //If Odd: n-4
	}
});
console.log("Преобразованые числа: " + numEvenOrOdd);


// 3
var numEven = [];
var numOdd = [];

for (var i = 0; i < numEvenOrOdd.length; i++) {
	if (numEvenOrOdd[i]%2==0) {
		numEven.push(numEvenOrOdd[i]);
	} else {
		numOdd.push(numEvenOrOdd[i]);
	}
}
console.log("Четные числа: " + numEven);
console.log("Нечетные числа: " + numOdd);

var avgEven = numEven.reduce(function(a, b) {
	return a + b;
}) / numEven.length;
console.log("Среднее значение чётных чисел: " + avgEven);

var avgOdd = numOdd.reduce(function(a, b) {
	return a + b;
}) / numOdd.length;
console.log("Среднее значение нечётных чисел: " + avgOdd);