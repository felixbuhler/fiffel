var valueEinser = 0;
var valueZweier = 0;
var valueDreier = 0;
var valueVierer = 0;
var valueFuenfer = 0;
var valueSechser = 0;

var dreierpasch = 0;
var viererpasch = 0;
var fullHouse = 0;
var kleineStrasse = 0;
var grosseStrasse = 0;
var kniffel = 0;
var valueChance = 0;

var gesamtObenOhneBonus = 0;
var gesamtObenMitBonus = 0;

var gesamtUnten = 0;

var gesamt = 0;

function getValEinser() {
    var val = parseInt(document.getElementById("valueEinser").value);
    window['valueEinser'] = val;
    getGesamtObenOhneBonus();
    updateGesamt()
}

function getValZweier() {
    var val = parseInt(document.getElementById("valueZweier").value);
    window['valueZweier'] = val;
    getGesamtObenOhneBonus();
    updateGesamt()
}

function getValDreier() {
    var val = parseInt(document.getElementById("valueDreier").value);
    window['valueDreier'] = val;
    getGesamtObenOhneBonus();
    updateGesamt()
}

function getValVierer() {
    var val = parseInt(document.getElementById("valueVierer").value);
    window['valueVierer'] = val;
    getGesamtObenOhneBonus();
    updateGesamt()
}

function getValFuenfer() {
    var val = parseInt(document.getElementById("valueFuenfer").value);
    window['valueFuenfer'] = val;
    getGesamtObenOhneBonus();
    updateGesamt()
}

function getValSechser() {
    var val = parseInt(document.getElementById("valueSechser").value);
    window['valueSechser'] = val;
    getGesamtObenOhneBonus();
    updateGesamt()
}

function getValChance() {
    var val = parseInt(document.getElementById("valueChance").value);
    window['valueChance'] = val;
    getGesamtUnten();
    updateGesamt()
}

function getValDreierpasch() {
    var val = parseInt(document.getElementById("valueDreierpasch").value);
    window['dreierpasch'] = val;
    getGesamtUnten();
    updateGesamt()
}

function getValViererpasch() {
    var val = parseInt(document.getElementById("valueViererpasch").value);
    window['viererpasch'] = val;
    getGesamtUnten();
    updateGesamt()
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
}

function getValFullHouse() {
    var checkElement = document.getElementById('full-house');
    if (checkElement.checked) {
        window['fullHouse'] = 25;
    } else {
        window['fullHouse'] = 0;
    }
    getGesamtUnten();
    updateGesamt()
}

function getValKleineStrasse() {
    var checkElement = document.getElementById('kleine-strasse');
    if (checkElement.checked) {
        window['kleineStrasse'] = 30;
    } else {
        window['kleineStrasse'] = 0;
    }
    getGesamtUnten();
    updateGesamt()
}
function getValGrosseStrasse() {
    var checkElement = document.getElementById('grosse-strasse');
    if (checkElement.checked) {
        window['grosseStrasse'] = 40;
    } else {
        window['grosseStrasse'] = 0;
    }
    getGesamtUnten();
    updateGesamt()
}
function getValKniffel() {
    var checkElement = document.getElementById('kniffel');
    if (checkElement.checked) {
        window['kniffel'] = 50;
    } else {
        window['kniffel'] = 0;
    }
    getGesamtUnten();
    updateGesamt()
}



function getGesamtUnten() {
    var calcGesamtUnten = fullHouse + kleineStrasse + grosseStrasse + kniffel + valueChance + dreierpasch + viererpasch;
    window['gesamtUnten'] = calcGesamtUnten;
    document.getElementById("gesamt-unten").innerHTML = calcGesamtUnten;

    updateGesamt()
}

function getGesamt() {

    window['gesamt'] = window['gesamtUnten'] + window['gesamtObenMitBonus'];
    console.log("untenGesamt", window['gesamt']);

}

function updateGesamt() {
    getGesamt();
    document.getElementById("gesamt").innerHTML = window['gesamt'];
}