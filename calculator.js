module.exports = calculator;

function calculator(a, sign, b) {
	switch(sign) {
		case '+':
			return a + b;
			break;
		case '-':
			return a - b;
			break;
		case '*':
			return a * b;
			break;
		case '/':
			return a / b;
			break;
		case 'log':
			return Math.log(a);
			break;
		case 'pow':
			return Math.pow(a, b);
			break;
		case 'sqrt':
			return Math.sqrt(a);
			break;
		case 'max':
			return Math.max(a, b);
			break;
		case 'min':
			return Math.min(a, b);
			break;
		default:
	  	return "unknown value";
	}
}