const fetchPokemon = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/chikorita';
    fetch(url).then((res) => {
        console.log(res);
        return res.json();
    }).then((data) => {
        console.log(data);
        let
    })
}

fethPokedex();