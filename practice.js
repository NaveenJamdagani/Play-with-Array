var inventors = [
	{first: 'Albert', last: 'Einstien', year: '1879', passed: '1955'},
	{first: 'Isaac', last: 'Newton', year: '1643', passed: '1727'},
	{first: 'Galileo', last: 'Galilei', year: '1564', passed: '1642'},
	{first: 'Marie', last: 'Curie', year: '1867', passed: '1934'},
	{first: 'Johannes', last: 'Kepler', year: '1571', passed: '1630'},
	{first: 'Nicolaus', last: 'Copernicus', year: '1473', passed: '1543'},
	{first: 'Max', last: 'Planck', year: '1858', passed: '1947'}
];

var people = [ 'Jamdagani, Naveen', 'Jamdagani, Ankush', 'Beck, Glenn', 'Becker, Call',
'John, Adams', 'Benn, Tony', 'Wayne, Bruce', 'Benjamin, Walter', 'Bellow, Soul',
'Beneson, Peter', 'Bent, Siellas', 'Blake, William', 'Blair, Tony', 'Modi, Narendra',
'Shah, Amit', 'Irani, Smriti', 'Thakrey, Bal', 'Kalaam, Abdul'
];

//Array.prototype.filter()
//1.Filter the list of inventors for those who were born in 1500's
var fifteen = inventors.filter(function(inventor) {
	if(inventor.year >=1500 && inventor.year < 1600) {
		return true;//keep it
	}
});

//console.log(fifteen);
//console.table(fifteen);

//Array.prototype.map
//2. Give us an array of the inventors first and last names

var fullName = inventors.map((inventor => (inventor.first + " " + inventor.last)));

//console.log(fullName);

//Array.prototype.sort
//3. Sort the inventors by birthdate, oldest to youngest
var oldest = inventors.sort(function(a,b) {
	if(a.year > b.year)
	{
		return 1;
	}
	else
	{
		return -1;
	}
});

//console.table(oldest);

