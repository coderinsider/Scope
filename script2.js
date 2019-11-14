// this array os globally scoped

const warriors = [
	{
		name: 'Jujin Take',
		type: 'Ninja',
		weapon: 'Shuriken',
		agility: 12
	},
	{
		name: 'Viggo Rusen',
		type: 'Viking',
		weapon: 'Swing blade',
		agility: 13
	},
	{
		name: 'Ro Rake',
		type: 'Samurai',
		weapon: 'Boken',
		agility: 13
	},

];

// this functions is globally scoped
const screamWarriors = () => {
	return console.log(warriors);
}

// no issues running this function
screamWarriors();


// Exercise 2
const screamWarriors2 = () => {
	var warrior1 = 'John';
	var warrior2 = 'Smark';
	return `Our  warriors are ${warrior1} and ${warrior2}`;

}
console.log(screamWarriors2());
// There is warrior1 and warrior2 are not available globally
console.log(warrior1, warrior2);