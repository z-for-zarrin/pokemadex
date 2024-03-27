const Pokemon = ({ pokemon, pokemonSpecies }) => {
    return (
        <>
        <div className = "pokemon">
            <h3>{pokemon.name}</h3>
            <img src={pokemon.sprites.front_default} alt={`sprite of ${pokemon.name}`} />
            
            <p>Entry Number: {pokemonSpecies.pokedex_numbers[0].entry_number}</p>
            <p>Type: {pokemon.types.type.name} </p>
            <p>Abilities: {pokemon.abilities.ability.name}</p>
            <p>Habitat: {pokemonSpecies.habitat.name}</p>
        </div>
        </>
    );
}
 
export default Pokemon;