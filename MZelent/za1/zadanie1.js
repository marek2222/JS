function sprawdz() {
	var liczba = document.getElementById("pole").value;
	
	if (liczba > 0) document.getElementById("wynik").innerHTML = "dodatnia";
	else if (liczba < 0) document.getElementById("wynik").innerHTML = "ujemna";
	else if (liczba == 0) document.getElementById("wynik").innerHTML = "zero";
	else document.getElementById("wynik").innerHTML = "To nie jest liczba";


	//console.log(window);

	// console.warn('Uwaga!');
	// console.error('Błąd!');
	// console.info('Informacja!');

	// var przycisk = document.getElementById("sprawdz");
	// console.dir(przycisk);
	// console.dir(document.getElementById("sprawdz"));

//grupowanie wielu tekstów (console.log etc) w konsoli w jedną grupę
// console.group('Grupa1');
// console.log('Ala ma kota');
// console.log('Kot ma Alę');
// console.groupEnd(); //kończenie grupy

// console.groupCollapsed('Nazwa grupy'); //grupa domyślnie zwinięta
// console.log('Ala ma kota');
// console.log('Kot ma Alę');
// console.groupEnd(); //kończenie grupy

// //czasami będziemy chcieli sprawdzić jak szybko wykona się nasz skrypt...
// console.time('Pierwszy test'); //rozpoczyna test - zaczyna liczyć czas
// for (let i=0; i<10000000; i++) { 
	
// }
// console.timeEnd('Pierwszy test'); //kończy test

// let i = 0;
// debugger; //instrukcją debugger przerywam działanie skryptu w tym miejscu, dzięki czemu mogę spokojnie go badać w zakładce Source. Dodatkowo w konsoli mam dostęp do zmiennych z danego scope - np. je tam wpisując


// var myName = 'Romek';
// //zamiast
// console.log("Nazywam się " + myName);

// //lepiej użyć
// console.log("Nazywam się", myName);

// //lub
// console.log({myName : myName});

// var i = 100;
// for (var i = 0; i < 1000; i++) {
// 	i=i;
// }
// console.log(i);
	for (let i = 0; i < 1000; i++) {
		i=i;
	}
	let aaa = 'aaaaaaa';
	console.log(aaa);

}

