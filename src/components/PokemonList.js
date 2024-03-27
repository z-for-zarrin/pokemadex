import Pokemon from "./Pokemon";


const PokemonList = ({ pokemon }) => {

    const mappedPokemon = pokemon.map((pokeman) => {
        return <Pokemon key={pokeman.id} pokemon={pokeman}/>
    })
    
    return (
        <>
        <h2>List of Pokémon</h2>
        <hr/>
        <div className = "pokemonList">
            {mappedPokemon}
        </div>
        </>
    );
}
 
export default PokemonList;