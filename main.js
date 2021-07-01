// Array di oggetti

const players = [
  { name: "Ciro", surname: "Immobile", year: "1990", club: "Lazio" },
  { name: "Lorenzo", surname: "Insigne", year: "1991", club: "Napoli" },
  { name: "Domenico", surname: "Berardi", year: "1994", club: "Sassuolo" },
  { name: "Niccolò", surname: "Barella", year: "1997", club: "Inter" },
  { name: "Marco", surname: "Verratti", year: "1992", club: "Psg" },
  { name: "Luiz", surname: "Jorginho", year: "1991", club: "Chelsea" },
  { name: "Gigio", surname: "Donnarumma", year: "1999", club: "Psg" },
];

const people = [
  "Franco, Rossi",
  "Boris, Becker",
  "Attila, Walter",
  "Bodo, Glimt",
  "Yuri, Keki",
  "Yuri, Gagarin",
  "Marcello, Mastroianni",
  "Stefano, Fontana",
  "Paul, Goguen",
];

// ************************ Array.prototype.filter() ****************************
// 1. Filter the list of player for those who play in the Psg

//con funzione classica
const psgPlayer = players.filter(function (player) {
  if (player.club == "Psg") {
    return true;
  }
});
console.table(psgPlayer);

//con arrow function
const lazioPlayer = players.filter((player) => {
  if (player.club == "Lazio") {
    return true;
  }
});
console.table(lazioPlayer);

//con arrow function in una sola riga
const interPlayer = players.filter((player) => player.club == "Inter");
console.table(interPlayer);

// ******************* Array.prototype.map() ************************************
// 2. Ritorna un Array di Calciatori con Nome e Cognome

// A differenza di filter() che puo ritornare anche un solo elemento dell'array selezionato , map ritorna sempre lo stesso numero di elementi presenti nell'array.

const playerName = players.map((player) => player.name + " " + player.surname);
console.log(playerName);

// ******************* Array.prototype.sort() ************************************
// 3. Ordina Array di Calciatori dal più giovane al più vecchio

//con funzione classica
const orderedPlayer = players.sort(function (a, b) {
  if (a.year < b.year) {
    return 1;
  } else {
    return -1;
  }
});
console.table(orderedPlayer);

//con arrow function ed operatore ternario (dal + grande al + giovane)
const ordPlayer = players.sort((a, b) => (a.year > b.year ? 1 : -1));
console.table(ordPlayer);

// ******************* Array.prototype.reduce() ************************************
// 4. Scrivi la somma delle età attuale di ogni calciatore
const now = new Date();
const thisYear = now.getFullYear();
const totalAge = players.reduce((age, player) => {
  return age + (thisYear - player.year);
}, 0);
console.log(totalAge);

// 5. Scrivi l' età attuale di ogni calciatore ed inseriscila in ogni oggetto calciatore dell'array players
for (const player of players) {
  player.age = thisYear - player.year;
}
console.table(players);

// 6 Sort Exercise
// ordina l'array people in ordine alfabetico per cognome

const ordPeople = people.sort((a, b) => {
  const [aName, aSurname] = a.split(",");
  const [bName, bSurname] = b.split(",");

  return aSurname > bSurname ? 1 : -1;
});

console.log(ordPeople);

// eliminare la virgola che separa nome e cognome
let ordFinal = [];
for (const name of ordPeople) {
  const c = name.replace(",", " ");
  ordFinal.push(c);
}

console.log(ordFinal);

// 6 Reduce Exercise
// somma la frutta dello stesso tipo

const fruits = [
  "mela",
  "mela",
  "mela",
  "mela",
  "banana",
  "banana",
  "banana",
  "banana",
  "banana",
  "banana",
  "banana",
  "banana",
  "banana",
  "banana",
  "pera",
  "pera",
  "pera",
  "pera",
];

const sumFruits = fruits.reduce((type, element) => {
  if (!type[element]) {
    type[element] = 0;
  }
  type[element]++;
  return type;
}, {});

console.log(sumFruits);
