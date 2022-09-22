var valueEinser = 0;
var valueZweier = 0;
var valueDreier = 0;
var valueVierer = 0;
var valueFuenfer = 0;
var valueSechser = 0;

var gesamtObenOhneBonus = 0;
var gesamtObenMitBonus = 0;

function getValEinser() {
    var val = parseInt(document.getElementById("valueEinser").value);
    window['valueEinser'] = val;
    getGesamtObenOhneBonus();


}

function getValZweier() {
    var val = parseInt(document.getElementById("valueZweier").value);
    window['valueZweier'] = val;
    getGesamtObenOhneBonus();

}

function getValDreier() {
    var val = parseInt(document.getElementById("valueDreier").value);
    window['valueDreier'] = val;
    getGesamtObenOhneBonus();

}

function getValVierer() {
    var val = parseInt(document.getElementById("valueVierer").value);
    window['valueVierer'] = val;
    getGesamtObenOhneBonus();

}

function getValFuenfer() {
    var val = parseInt(document.getElementById("valueFuenfer").value);
    window['valueFuenfer'] = val;
    getGesamtObenOhneBonus();

}

function getValSechser() {
    var val = parseInt(document.getElementById("valueSechser").value);
    window['valueSechser'] = val;
    getGesamtObenOhneBonus();

}


function getGesamtObenOhneBonus() {
    var calcGesamtObenOhneBonus = valueEinser + valueZweier + valueDreier + valueVierer + valueFuenfer + valueSechser;
    window['gesamtObenOhneBonus'] = calcGesamtObenOhneBonus;
    document.getElementById("gesamt-oben-ohne-bonus").innerHTML = calcGesamtObenOhneBonus;

    if (calcGesamtObenOhneBonus >= 63) {
        document.getElementById("get-bonus").innerHTML = "👍";
        document.getElementById("get-bonus").style.background = "#00ff00";
        window['gesamtObenMitBonus'] = calcGesamtObenOhneBonus + 35;
        document.getElementById("gesamt-oben-mit-bonus").innerHTML = gesamtObenMitBonus;
        document.getElementById("gesamt-oben-mit-bonus-end").innerHTML = gesamtObenMitBonus;
    } else {
        document.getElementById("get-bonus").innerHTML = "👎";
        document.getElementById("get-bonus").style.background = "#ff0000";
        window['gesamtObenMitBonus'] = calcGesamtObenOhneBonus + 0;
        document.getElementById("gesamt-oben-mit-bonus").innerHTML = gesamtObenMitBonus;
        document.getElementById("gesamt-oben-mit-bonus-end").innerHTML = gesamtObenMitBonus;
    }

    console.log("Einser =", valueEinser);
    console.log("Gesamt ohne Bonus =", gesamtObenOhneBonus);
}
