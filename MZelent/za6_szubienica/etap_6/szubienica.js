var hasla = 
["Fortuna kołem się toczy",
 "Bez pracy nie ma kołaczy",
 "Nosił wilk razy kilka ponieśli i wilka",
 "Lekko, miło i przyjemnie"];

var haslo_losowe = Math.floor(Math.random()*hasla.length);

if(haslo_losowe > hasla.length-1) 
  haslo_losowe = 1;

var haslo = hasla[haslo_losowe];
haslo = haslo.toUpperCase();

var ile_skuch = 0; 

var tak = new Audio("yes.wav");
var nie = new Audio("no.wav");

var haslo1 = "";
var dlugosc = haslo.length; // - jest atrybutem (właściwością) 

for (let i = 0; i < dlugosc; i++) {
  haslo1 += (haslo.charAt(i) == " ") ? " ": "-";  
}

function pokaz_haslo() {
  document.getElementById("plansza").innerHTML = haslo1;
}

window.onload = start;

var litery = new Array(35);
litery = ["A", "Ą", "B", "C", "Ć", "D", "E", "Ę", "F", "G", "H", "I",
"J", "K", "L", "Ł", "M", "N", "Ń", "O", "Ó", "P", "Q", "R", "S", "Ś",
"T", "U", "V", "W", "X", "Y", "Z", "Ż", "Ź"];
// litery[0] = "A";

function start() {
  var tresc_diva = "";
  for (var i = 0; i < 35; i++) {
    var element = 'lit'+i;
    tresc_diva += '<div class="litera" onclick="sprawdz('+i+')" id="'+ element +'">'+ litery[i]+'</div>';     
    
    // zawiń wiersze co 7 wierszy
    if((i+1)% 7==0) 
      tresc_diva += '<div style="clear:both;"></div>';
  }
 
  document.getElementById("alfabet").innerHTML = tresc_diva;
  pokaz_haslo();
}

String.prototype.ustawZnak = function(miejsce, znak){
  if(miejsce > this.length - 1)
    return this.toString();
  else 
    return this.substr(0,miejsce) + znak + this.substr(miejsce+1);
}

function sprawdz(nr) {
  var trafiona = false;   //trafiona literka

  for(var i=0; i<dlugosc; i++){
    if(haslo.charAt(i) == litery[nr]){
      haslo1 = haslo1.ustawZnak(i, litery[nr]);
      trafiona = true;
    }
  }

  var element = 'lit' + nr;    
  var uchwyt = document.getElementById(element);
  if (trafiona == true) {
    tak.play();
    uchwyt.style.background = "#003300";
    uchwyt.style.color      = "#00C000";
    uchwyt.style.border     = "3px solid #00C000";
    uchwyt.style.cursor     = "default";
    pokaz_haslo();  // pokazanie hasła
  }
  else  {
    nie.play();
    uchwyt.style.background = "#330000";
    uchwyt.style.color      = "#C00000";
    uchwyt.style.border     = "3px solid #C00000";
    uchwyt.style.cursor     = "default";
    uchwyt.setAttribute("onclick",";");

    // skucha
    ile_skuch++; 
    var obraz = "img/s"+ ile_skuch + ".jpg";
    document.getElementById("szubienica").innerHTML = '<img src="'+obraz+'" alt="" />';
  }

  uchwyt = document.getElementById("alfabet");
  // wygrana
  if (haslo == haslo1) {
    uchwyt.innerHTML = 
    'Tak jest!!! Pawidłowe hasło:<br />' 
    + haslo + 
    '<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>' 
  }

  // przegrana
  if (ile_skuch >= 9) {
    uchwyt.innerHTML = 
    'Przegrana!!! Pawidłowe hasło:<br />' 
    + haslo + 
    '<br/><br/><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>' 
  }
}
 