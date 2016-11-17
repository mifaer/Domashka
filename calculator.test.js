const calculator = require('./calculator');

// "+"
test('1 + 3 to equal 4', () => {
	expect(calculator(1,'+',3)).toBe(4);
});
test('0 + 15 to equal 15', () => {
	expect(calculator(0,'+',15)).toBe(15);
});

// "-"
test('1 - 3 to equal -2', () => {
	expect(calculator(1,'-',3)).toBe(-2);
});
test('77 - 30 to equal 47', () => {
	expect(calculator(77,'-',30)).toBe(47);
});

// "*"
test('1 * 3 to equal 3',() => {
	expect(calculator(1, '*',3)).toBe(3);
});
test('0 * 3 to equal 0',() => {
	expect(calculator(0, '*',3)).toBe(0);
});

// "/"
test('9 / 0 to equal Infinity', () => {
	expect(calculator(9,'/',0)).toBe(Infinity);
});
test('9 / 3 to equal 3', () => {
	expect(calculator(9,'/',3)).toBe(3);
});

// "log"
test('log(10) to equal 2.302585092994046', () => {
	expect(calculator(10,'log')).toBe(2.302585092994046);
});
test('log(1000) to equal 6.907755278982137', () => {
	expect(calculator(1000,'log')).toBe(6.907755278982137);
});

// "pow"
test('2 ^ 5 to equal 32', () => {
	expect(calculator(2,'pow',5)).toBe(32);
});
test('5 ^ 0 to equal 1', () => {
	expect(calculator(5,'pow',0)).toBe(1);
});

// "sqrt"
test('56 ^ 2 to equal 7.483314773547883', () => {
	expect(calculator(56,'sqrt')).toBe(7.483314773547883);
});
test('0 ^ 2 to equal 0', () => {
	expect(calculator(0,'sqrt')).toBe(0);
});

// "max"
test('max(9, 5) to equal 9', () => {
	expect(calculator(9,'max',5)).toBe(9);
});
test('max(-9, 5) to equal 5', () => {
	expect(calculator(-9,'max',5)).toBe(5);
});

// "min"
test('min(9, 5) to equal 5', () => {
	expect(calculator(9,'min',5)).toBe(5);
});
test('min(-9, 5) to equal -9', () => {
	expect(calculator(-9,'min',5)).toBe(-9);
});

