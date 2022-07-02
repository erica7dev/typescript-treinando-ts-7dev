const movies = [
  { title: ' Addams Family', year: 1994 },
  { title: ' God Father', year: 1972 },
]

let indice = 0;
for (const { title } of movies) {
  console.log(indice, title);
  indice++;
}

//template literals
let actress = "Angelina Jolie";
let actor = "The Rock";

console.log(`${actress} and ${actor} are the most famous actors in the world`);