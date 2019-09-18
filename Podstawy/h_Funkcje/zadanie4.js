function start() {
	let str = "";

	//generuję linię
	str = "";
	for (let i = 0; i < 10; i++) {
		str += "-";
	}
	console.log(str);

	let x = 20;
	console.log("20 + 20 = ", x + 20);

	str = "";
	for (let i = 0; i < 10; i++) {
		str += "-";
	}
	console.log(str);

	console.log("Ala ma kota");
	console.log("a kot ma Alę");

	str = "";
	for (let i = 0; i < 10; i++) {
		str += "-";
	}
	console.log(str);
}

window.onload = start;
