var haslo = "Bez pracy nie ma kołaczy";
haslo = haslo.toUpperCase();

var dlugosc = haslo.length; // - jest atrybutem (właściwością) 
var haslo1 = "";

for (let i = 0; i < dlugosc; i++) {
  // haslo1 = (haslo[i] == " ") ? haslo1 + " ": haslo1+ "-";  
  haslo1 = (haslo.charAt(i) == " ") ? haslo1 + " ": haslo1+ "-";  
}


function pokaz_haslo() {
  document.getElementById("plansza").innerHTML = haslo1;
}

window.onload = start;

function start() {
  var tresc_diva = "";
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
  }

  document.getElementById("alfabet").innerHTML = tresc_diva;
  pokaz_haslo();
}