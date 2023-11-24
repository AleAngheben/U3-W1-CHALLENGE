var SmartphoneUser = /** @class */ (function () {
    function SmartphoneUser() {
        this.carica = 0;
        this.numeroChiamate = 0;
    }
    SmartphoneUser.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    SmartphoneUser.prototype.chiamata = function (minutiDurata) {
        var costoChiamata = 0.2 * minutiDurata;
        if (this.carica >= costoChiamata) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
        }
        else {
            console.log("Saldo insufficiente per effettuare la chiamata.");
        }
    };
    SmartphoneUser.prototype.numero404 = function () {
        var caricaFixed = this.carica.toFixed(2);
        return caricaFixed;
    };
    SmartphoneUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    SmartphoneUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return SmartphoneUser;
}());
var firstUser = new SmartphoneUser();
firstUser.ricarica(50);
firstUser.chiamata(10);
firstUser.chiamata(5);
console.log("Saldo residuo firstUser: ".concat(firstUser.numero404()));
console.log("Totale chiamate effettuate dall'utente: ".concat(firstUser.getNumeroChiamate()));
firstUser.azzeraChiamate();
console.log("Totale chiamate dopo l'azzeramento: ".concat(firstUser.getNumeroChiamate()));
console.log("---------------");
var secondUser = new SmartphoneUser();
secondUser.ricarica(25);
secondUser.chiamata(15);
secondUser.chiamata(8);
secondUser.chiamata(10);
console.log("Saldo residuo secondUser: ".concat(secondUser.numero404()));
console.log("Totale chiamate effettuate dall'utente: ".concat(secondUser.getNumeroChiamate()));
secondUser.azzeraChiamate();
console.log("Totale chiamate dopo l'azzeramento: ".concat(secondUser.getNumeroChiamate()));
console.log("---------------");
var thirdUser = new SmartphoneUser();
thirdUser.ricarica(35);
thirdUser.chiamata(12);
thirdUser.chiamata(6);
thirdUser.chiamata(2);
console.log("Saldo residuo thirdUser: ".concat(thirdUser.numero404()));
console.log("Totale chiamate effettuate dall'utente: ".concat(thirdUser.getNumeroChiamate()));
thirdUser.azzeraChiamate();
console.log("Totale chiamate dopo l'azzeramento: ".concat(thirdUser.getNumeroChiamate()));
