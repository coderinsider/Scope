console.log('There is starting scope');
var warrior = 'Ninja';
var warrior3 = 'Viking';
const screamWarrior = () => {
	let warrior2 = 'Samurai';
	// console.log('There is a inner function ' + warrior, warrior2);
	// Wrapped in a function now is a closure
	return {
		shootWarrior: () => {
			return console.log(warrior, warrior2);
		}
	}
}
const newWarrior = screamWarrior();
newWarrior.shootWarrior();
console.log(warrior, warrior3);
var warrior; // warrior is declared here
var warrior3; // will show underfined
console.log(warrior, warrior3);