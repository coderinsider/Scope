var numberofPlatoon = 45;
const platoon = () => {
	// local variable
	let warrirosPerPlatoon = 60;

	// local as well
	let totalWarriors = numberofPlatoon * warrirosPerPlatoon;

	return `Our army is ${totalWarriors} strong`;

}
console.log(platoon());

//console.log(warrirosPerPlatoon, totalWarriors);
console.log(numberofPlatoon)