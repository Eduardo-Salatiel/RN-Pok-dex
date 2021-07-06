import { useEffect } from "react";
import { useState } from "react";
import { pokemonApi } from "../api/pokemonApi";
import { FullPokemon } from "../interfaces/pokemonInterfaces";

export const useGetPokemon = (id: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState<FullPokemon>({} as FullPokemon);

  const getPokemon = async () => {
    const resp = await pokemonApi.get<FullPokemon>(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
    );
    setPokemon(resp.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return {
    isLoading,
    pokemon,
  };
};
