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