let haslo = "Bez pracy nie ma kołaczy";
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

var litery = new Array(35);
litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";

litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";

litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ź";
litery[34] = "Ż";

function start() {
  var tresc_diva = "";
  for (var i = 0; i < 35; i++) {
    var element = 'lit'+i;
    tresc_diva = tresc_diva 
      + '<div class="litera" onclick="sprawdz('+i+')" id="'+ element +'">'+ litery[i]+'</div>';     
    
    // zawiń wiersze co 7 wierszy
    if((i+1)% 7==0) 
      tresc_diva = tresc_diva + '<div style="clear:both;"></div>';
  }
 
  document.getElementById("alfabet").innerHTML = tresc_diva;
  pokaz_haslo();
}


function sprawdz(nr) {

}