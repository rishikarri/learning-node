console.log('Hello, World');

var dcClass = [
	'Sean',
	'Drew',
	'Daniel',
	'Kyle',
	'Rishi'
]

console.log(dcClass[3]);

dcClass.push('rob');



dcClass.map((member, index)=>{
	console.log(member, index);
})

console.log(this);