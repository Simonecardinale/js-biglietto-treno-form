// genera
var show = document.getElementById('genera');show.addEventListener('click', function() {
var nome = document.getElementById('nome').value;
console.log(nome);
var chilometri = document.getElementById('chilometri').value;
console.log(chilometri);
var eta = document.getElementById('eta').value;
console.log(eta);


// calcolo tariffa e caratteristiche biglietto
var prezzo = chilometri*0.21;
var offerta = "Tariffa standard";

// tariffa
if (eta == 'minorenne'){
    prezzo-=prezzo*20/100;
    offerta = "Sconto minorenni";
} else if (eta == 'over65') {
    prezzo-=prezzo*40/100;
    offerta = "Sconto Over 65";
}

    document.getElementById('nomePasseggero').innerHTML = nome;
    document.getElementById('offerta_applicata').innerHTML = offerta;
    document.getElementById("costoBiglietto").innerHTML = prezzo.toFixed(2) + " €";
    document.getElementById('numeroCarrozza').innerHTML = Math.floor(Math.random()*9)+1;
    document.getElementById('codiceBiglietto').innerHTML = Math.floor(Math.random()*(100000-90000)+90000);
    }
);

// nascondi

var hidden = document.getElementById('annulla');hidden.addEventListener('click', function() {
    document.getElementById('nomePasseggero').innerHTML = "";
    document.getElementById('offerta_applicata').innerHTML = "";
    document.getElementById("costoBiglietto").innerHTML = "";
    document.getElementById('numeroCarrozza').innerHTML = "";
    document.getElementById('codiceBiglietto').innerHTML = "";
    }
);




