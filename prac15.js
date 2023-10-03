
const marvel_heros = ["thor","ironman","spiderman"];
const dc_heros = ["superman","batman","flash"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// marvel_heros.join(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);


const all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros);


const all_newHeros_spread = [...marvel_heros,...dc_heros]
console.log(all_newHeros_spread); 
