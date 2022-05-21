marks_fields = document.querySelectorAll(".mark");
absenses_fields = document.querySelectorAll(".absenses");
totals_fields = document.querySelectorAll(".total");
p = document.querySelector(".name");
but = document.querySelector(".myButton");
inp = document.querySelector(".field");
img = document.querySelector("img");
group = document.querySelector(".group");
students = ["Максим‘юк Борис Федорович",
 "Блеханов Володимир Володимирович",
 "Кушнір Дмитро Олександрович ",
 "Іщенко Артем Максимович",
 "Орлеан Костянтин Едуардович"
 ];
ids = [127081, 127082, 127083, 127084, 127085];
marks = [
	[ [3, 4, 5, 4], [2, 5, 5, 4], [5, 4, 5, 4], [3, 3, 3, 4], [5, 2, 3, 4], [4, 4, 4, 4], [4, 2, 5, 3, 2], [5, 5, 5], [4, 3], [5, 4], [2, 5, 4], [2, 4, 5, 5] ],
	[ [2, 3, 4, 3], [2, 3, 4], [4, 3, 5, 2, 2], [4, 2, 2, 5, 2, 3], [2, 3, 5, 4, 2, 2], [5, 5, 3], [4, 3, 3, 3], [2, 2, 5, 2, 5], [4, 2, 3, 3, 4, 2], [2, 4, 3, 3], [4, 3, 4, 5, 3], [2, 3, 3, 2, 5] ],
	[ [4, 5, 4, 4], [5, 2, 3, 4], [3, 2, 5], [2, 5, 5, 5, 2], [2, 3, 3], [2, 2, 4, 3, 5], [4, 2, 5, 2, 3], [3, 5, 5, 5, 3], [4, 5, 3, 2, 5], [4, 4, 3, 2], [2, 2, 3, 3, 5], [2, 5, 3, 4] ],
	[ [4, 2, 5], [5, 2, 4, 5, 3], [5, 5, 4, 5, 2], [4, 4, 5, 4], [3, 5, 2, 2], [5, 4, 5, 4, 5], [2, 5, 4, 3, 3], [4, 2, 3], [2, 2, 5, 5], [4, 5, 4, 4], [3, 5, 3], [4, 2, 2] ],
	[ [2, 5, 5, 4, 3, 4], [2, 2, 3, 5, 5, 2], [4, 4, 4, 3], [5, 2, 3, 5, 2], [2, 4, 4, 3], [2, 2, 3, 3, 3], [5, 5, 2, 2, 4], [2, 5, 4, 5, 3, 2], [4, 4, 5], [5, 2, 5, 5, 5], [5, 4, 2], [3, 2, 2, 3] ],
]
absenses = [
	[23, 12, 4, 8, 11, 5, 10, 1, 0, 32, 17, 9],
	[12, 29, 2, 26, 24, 2, 11, 21, 8, 13, 25, 29],
	[22, 25, 23, 7, 19, 22, 12, 13, 20, 4, 6, 28],
	[25, 23, 11, 22, 30, 20, 27, 5, 17, 10, 2, 30],
	[11, 15, 9, 29, 26, 8, 14, 23, 6, 27, 19, 7],
]
groups = [18, 22, 32, 45, 45];

window.onload = function(){
	let student = parseInt(localStorage.getItem('input'))- 127081;
	p.style.visibility = "visible";
	if (student < 0 || student >= students.length) {
		img.style.visibility = "hidden"
		group.style.visibility = "hidden"
		p.textContent = "Такого студента не існує";
		return 0;
	}
	img.style.visibility = "visible";
	group.style.visibility = "visible";
	group.textContent = "Група: "+groups[student];
	img.setAttribute("src", "img/"+(student+1)+'.jpg');
	for (let i = 0; i<marks[student].length; i++){
		marks_fields[i].textContent = '';
		totals_fields[i].textContent = '';
		absenses_fields[i].textContent = '';
	}
	p.textContent = students[student];
	for (let i = 0; i<marks[student].length; i++){
		let sum = 0;
		for (let j = 0; j<marks[student][i].length; j++){
			marks_fields[i].textContent = marks_fields[i].textContent + " " + marks[student][i][j];
			sum += marks[student][i][j];
		}
		totals_fields[i].textContent = (sum / marks[student][i].length).toFixed(2);
		absenses_fields[i].textContent = absenses[student][i];
	}
}