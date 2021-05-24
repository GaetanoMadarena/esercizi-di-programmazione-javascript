/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/
var sec = prompt('Inserisci il numero di secondi che vuoi trasformare in ore minuti secondi: ');
var ora = Math.floor(sec / 3600);
var minuto = Math.floor(sec / 60 - ora * 60);
var secondi = sec - (ora * 3600) - (minuto * 60)
console.log(ora + 'ore, '+ minuto + 'minuti e '+ secondi + 'secondi.');
