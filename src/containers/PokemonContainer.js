import React, { useState, useEffect } from 'react';
import { RouteProvider, createBrowserRouter } from "react-router-dom";
import PokemonList from '../components/PokemonList';
import Pokemon from '../components/Pokemon';

const PokemonContainer = () => {
    
    const [pokemon, setPokemon] = useState([]);
    const [pokemonSpecies, setPokemonSpecies] = useState([]);
    const [generations, setGenerations] = useState([]);
    
    const fetchPokemon = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=1302")
        const pokemonData = await response.json();
        const urlObjects = pokemonData.results;
        const pokemonRequests = urlObjects.map(async urlObject => {
            const pokemonResponse = await fetch(urlObject.url);
            return await pokemonResponse.json();
        });
        const pokemonInfo = await Promise.all(pokemonRequests);
        setPokemon(pokemonInfo);
    }


    const fetchPokemonSpecies = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon-species/?limit=1025")
        const speciesData = await response.json();
        const urlObjects = speciesData.results;
        const speciesRequests = urlObjects.map(async urlObject => {
            const speciesResponse = await fetch(urlObject.url);
            return await speciesResponse.json();
        });
        const speciesInfo = await Promise.all(speciesRequests);
        setPokemonSpecies(speciesInfo); 
    }

    const fetchGenerations = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/generation")
        const generationsData = await response.json();
        const urlObjects = generationsData.results;
        const generationsRequests = urlObjects.map(async urlObject => {
            const generationsResponse = await fetch(urlObject.url);
            return await generationsResponse.json();
        });
        const generationsInfo = await Promise.all(generationsRequests);
        setGenerations(generationsInfo);
    }

    useEffect (() => {
        fetchPokemon();
        // fetchPokemonSpecies();
        // fetchGenerations();
    }, [])

    // TODO: RouterProvider

    return (
        <>
        <p> Piplup 🐧</p>
        <PokemonList pokemon={pokemon}/>
        </>
    );
    
}  
export default PokemonContainer;