const Pokemon = ({ pokemon }) => {

    

    return (
        <>
        <div className = "pokemon">
            <h3>{pokemon.name}</h3>
            <img src={pokemon.sprites.front_default} alt={`sprite of ${pokemon.name}`} />
            <p>Type: {pokemon.types.map(type => type.type.name).join(', ')} </p>
            <p>Abilities: {pokemon.abilities.map(ability => ability.ability.name).join(", ")}</p>
        </div>
        </>
    );
}
 
export default Pokemon;