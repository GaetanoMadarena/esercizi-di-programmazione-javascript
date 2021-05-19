/*
  Gatti in fila
  Scrivi un programma che dato:
    a) Un numero totale di gatti
    b) Il numero dei gatti presenti in ogni fila
  Restituisca in output:
    - Il numero di file risultanti
    - Nel caso l'ultima fila risulti incompleta indicare il numero di gatti mancanti per completarla (quanti gatti mancano per arrivare a b?)

  Esempio:
    Input: numero di gatti = 44, gatti per fila = 6
    Output: numero di file = 8, gatti mancanti = 4

  Consigli:
  Per l'arrotondamento ti consiglio di non usare Math.round (arrotonda all'intero superiore solo da .5 in su),
  utilizza Math.ceil (arrotonda sempre all'intero superiore).

  http://www.imparareaprogrammare.it
*/
var numero_di_gatti = prompt(console.log('Inserisci il numero di gatti'));
var gatti_per_fila = prompt(console.log('Inserisci il numero di file'));
var numero_di_file = Math.ceil(numero_di_gatti/gatti_per_fila);
var gatti_mancanti = gatti_per_fila * numero_di_file - numero_di_gatti;

if (gatti_mancanti == 0) {
  console.log("Il numero di file è " + numero_di_file + ".");
} else {
  console.log("Il numero di file è " + numero_di_file + ".");
  console.log("Il numero di gatti mancanti per completare la fila sono " + gatti_mancanti + ".");
}


/*soluzione di alberto*/
var cats = 44;
var inLine = 6;

var numLines = Math.ceil(cats/inLine);
var missing = (numLines*inLine-cats);
/* alt 96 per apici rovesci*/
console.log(`${cats} gatti in fila per ${inLine} si unirono compatti in ${numLines} file. Nell'ultima fila rimasero ${missing} posti gatto disponibili.`);
