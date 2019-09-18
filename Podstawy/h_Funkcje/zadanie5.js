// function sum() {
// 	console.log(arguments);
// }

function start() {
	// sum(); //[] (zobacz dokładniej co wyszło w konsoli, bo wynik nie jest dokładnie taki)
	// sum(1, 2, 3, 4); //[1,2,3,4]
	// sum("ala", "ma", "kota"); //["ala", "ma", "kota"]
	// /////////////////////////////
	// let x = 1;
	// {
	// 	let x = 2;
	// 	console.log(x); //2
	// }
	// console.log(x); //1
	// /////////////////////////////
	// function loremFn() {
	// 	let a = 0;
	// 	function myF() {
	// 		let b = 0;
	// 		a++;
	// 		b++;
	// 		console.log(`a: ${a}, b: ${b}`);
	// 	}
	// 	myF(); //a: 1, b: 1
	// 	myF(); //a: 2, b: 1
	// 	myF(); //a: 3, b: 1
	// 	myF(); //a: 4, b: 1
	// }
	// loremFn();
	// /////////////////////////////
	// // funkcja samowywołująca się
	// (function() {
	// 	console.log("Jakiś tekst"); //wywoła się od razu
	// })();
	// /////////////////////////////
	// // funkcja zwrotna - callback
	// function myF(a) {
	// 	console.log(a);
	// }
	// myF(1); //przekazaliśmy numer
	// myF("Ala"); //przekazaliśmy tekst
	// myF({ a: 2 }); //przekazaliśmy obiekt
	// myF([1, 2, 3]); //przekazaliśmy tablicę
}
function nazwaFunkcji() {
	console.log("Hej jestem fajnym tekstem");
}

//Po stworzeniu funkcji wystarczy ją wywołać poprzez podanie jej nazwy i nawiasów:
//3x wywołujemy powyższą funkcję
nazwaFunkcji();
nazwaFunkcji();
nazwaFunkcji();

window.onload = nazwaFunkcji;
