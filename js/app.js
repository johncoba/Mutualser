//Autor: John Coba

totalizar("Ahorrado: ");

function coinClick(nominacion, coin) { 
    var coins=parseInt(localStorage.getItem(nominacion))||0;

    if(coins != null && coins != "" && coins != false && coins != undefined){
        coins = coins + coin;
    } else {
        coins = coin;
    }
    localStorage.setItem(nominacion,  coins);
    totalizar("Ahorrado: ");
    document.getElementById("CantidadMonedasSel").innerHTML = "";
}

function alcanciaClick(coin) { 
    if (confirm("Desea romper la alcancía?")) {
        totalizar("La alcancía tenía: ");
        localStorage.removeItem("Coin50");
        localStorage.removeItem("Coin100");
        localStorage.removeItem("Coin200");
        localStorage.removeItem("Coin500");
        localStorage.removeItem("Coin1000");
        document.getElementById("CantidadMonedas").innerHTML = "La alcancía esta vacía";
        document.getElementById("CantidadMonedasSel").innerHTML = "";
    }    
}

function totalizar(pre) {
    var Coin50=parseInt(localStorage.getItem("Coin50"))||0;
    var Coin100=parseInt(localStorage.getItem("Coin100"))||0;
    var Coin200=parseInt(localStorage.getItem("Coin200"))||0;
    var Coin500=parseInt(localStorage.getItem("Coin500"))||0;
    var Coin1000=parseInt(localStorage.getItem("Coin1000"))||0;
    var total = Coin50 + Coin100 + Coin200 + Coin500 + Coin1000;
    document.getElementById("titulo").innerHTML = pre + "$" + total + " COP";

    var monedas=0;
    monedas = Coin50 / 50;
    monedas = monedas + Coin100 / 100;
    monedas =monedas + Coin200 / 200;
    monedas =monedas + Coin500 / 500;
    monedas =monedas + Coin1000 / 1000;
    if (monedas==0) {
        document.getElementById("CantidadMonedas").innerHTML = "La alcancía esta vacía";
    } else {
        document.getElementById("CantidadMonedas").innerHTML = "Hay " + monedas + " monedas dentro de la alcancía";
    }
}

function ctsClick(nominacion, coin) {
    var coins=parseInt(localStorage.getItem(nominacion))||0;
    
    if(coins != null && coins != "" && coins != false && coins != undefined){
        coins = coins / coin;
    } else {
        coins = 0;
    }

    var expresion = "";
    if (coins==0) {
        expresion = "No hay monedas de $" + coin + " COP";
    } else {
        expresion = "Hay " + (coins) + " moneda";
        if (coins >1) { 
            expresion = expresion + "s";
        }
        expresion = expresion + " de $" + coin + " COP, Para un total de $" + (coins*coin) + " COP";
    }

    document.getElementById("CantidadMonedasSel").innerHTML = expresion;
}