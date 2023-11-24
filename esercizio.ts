interface Smartphone {
  carica: number;
  numeroChiamate: number;

  ricarica(unaRicarica: number): void;
  chiamata(minutiDurata: number): void;
  numero404(): number;
  getNumeroChiamate(): number;
  azzeraChiamate(): void;
}

class SmartphoneUser implements Smartphone {
  carica: number = 0;
  numeroChiamate: number = 0;

  ricarica(unaRicarica: number): void {
    this.carica += unaRicarica;
  }

  chiamata(minutiDurata: number): void {
    const costoChiamata = 0.2 * minutiDurata;
    if (this.carica >= costoChiamata) {
      this.carica -= costoChiamata;
      this.numeroChiamate++;
    } else {
      console.log("Saldo insufficiente per effettuare la chiamata.");
    }
  }

  numero404(): any {
    let caricaFixed = this.carica.toFixed(2);
    return caricaFixed;
  }

  getNumeroChiamate(): number {
    return this.numeroChiamate;
  }

  azzeraChiamate(): void {
    this.numeroChiamate = 0;
  }
}

const firstUser = new SmartphoneUser();
firstUser.ricarica(50);
firstUser.chiamata(10);
firstUser.chiamata(5);

console.log(`Saldo residuo firstUser: ${firstUser.numero404()}`);
console.log(
  `Totale chiamate effettuate dall'utente: ${firstUser.getNumeroChiamate()}`
);

firstUser.azzeraChiamate();
console.log(
  `Totale chiamate dopo l'azzeramento: ${firstUser.getNumeroChiamate()}`
);

console.log("---------------");

const secondUser = new SmartphoneUser();
secondUser.ricarica(25);
secondUser.chiamata(15);
secondUser.chiamata(8);
secondUser.chiamata(10);

console.log(`Saldo residuo secondUser: ${secondUser.numero404()}`);
console.log(
  `Totale chiamate effettuate dall'utente: ${secondUser.getNumeroChiamate()}`
);

secondUser.azzeraChiamate();
console.log(
  `Totale chiamate dopo l'azzeramento: ${secondUser.getNumeroChiamate()}`
);

console.log("---------------");

const thirdUser = new SmartphoneUser();
thirdUser.ricarica(35);
thirdUser.chiamata(12);
thirdUser.chiamata(6);
thirdUser.chiamata(2);

console.log(`Saldo residuo thirdUser: ${thirdUser.numero404()}`);
console.log(
  `Totale chiamate effettuate dall'utente: ${thirdUser.getNumeroChiamate()}`
);

thirdUser.azzeraChiamate();
console.log(
  `Totale chiamate dopo l'azzeramento: ${thirdUser.getNumeroChiamate()}`
);

//PER HTML
const getSaldo = () => {
  const saldo = document.getElementById("saldo") as HTMLSpanElement;
  saldo.innerText = firstUser.numero404();
};
//RICARICA
const ricaricaForm = document.getElementById(
  "ricarica-form"
) as HTMLFormElement;
const ricarica = document.getElementById("valore-ricarica") as HTMLInputElement;

const btnCharge = document.getElementById("charge-btn") as HTMLButtonElement;

btnCharge.addEventListener("click", function () {
  let valoreRicarica = parseFloat(ricarica.value);
  firstUser.ricarica(valoreRicarica);
  getSaldo();
});

window.onload = () => {
  getSaldo();
};
