//* -> Variable Types var (Deprecated), let & const

var perro = ''; // -> (Deprecated)
let gato = '';
const animales = {};

//* -> Function types Normal Function & Arrow Function

function normalFunction() {
    let returnValue = 1 + 2;
    return returnValue;
}

const arrowFunction = returnValue => returnValue = 3 + 5;

//* ->Fetch to consume services (Deprecated)
fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(response => response.json())
    .then(data => {
        // -> Iterating an array with foreach
        data.results.forEach(newData => {
            // console.log(newData.name);
        });
    }).catch(error => console.log(error));

//* -> async & await to consume services (Current)
const fetchPokemones = async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const data = await response.json();
        //* -> map to iterate an array
        const newData = data.results.map(poke => poke.name);
        // console.log(newData);

        //* -> filter to iterate an array of an specified value
        const filterData = data.results.filter(poke => poke.name !== "bulbasaur" && poke.name !== "wartortle");
        // console.log(filterData);
    } catch (error) {
        // console.log(error);
    }
}

fetchPokemones();