import React, { useEffect, useState } from "react";
import { FlatList, Platform, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Loading from "../components/Loading";
import PokemonCard from "../components/PokemonCard";
import SearchInput from "../components/SearchInput";
import { useSearchPokemon } from "../hooks/useSearchPokemon";
import { styles as globalStyles } from "./../theme/appTheme";
import { SimplePokemon } from "../interfaces/pokemonInterfaces";

const SearchScreen = () => {
  const { top } = useSafeAreaInsets();
  const { isFetching, simplePokemonList } = useSearchPokemon();
  const [term, setTerm] = useState("");
  const [pokemonsFiltered, setPokemonsFiltered] = useState<SimplePokemon[]>([]);

  useEffect(() => {
    if (term.length === 0) {
      setPokemonsFiltered([]);
    }

    if (isNaN(Number(term))) {
      setPokemonsFiltered(
        simplePokemonList.filter(pokemon =>
          pokemon.name.toLowerCase().includes(term.toLowerCase()),
        ),
      );
    } else {
      setPokemonsFiltered([simplePokemonList.find(poke => poke.id === term)!]);
    }
  }, [term]);

  if (isFetching) {
    return <Loading />;
  }

  return (
    <View
      style={{
        flex: 1,
        marginTop: Platform.OS === "ios" ? top : top + 5,
        marginHorizontal: 20,
      }}
    >
      <SearchInput
        onDebounce={setTerm}
        style={{
          position: "absolute",
          zIndex: 999,
          width: "100%",
          top: Platform.OS === "ios" ? top : top + 15,
        }}
      />
      <FlatList
        data={pokemonsFiltered}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        ListHeaderComponent={
          <Text
            style={{
              ...globalStyles.title,
              ...globalStyles.globalMargin,
              marginTop: top + 60,
            }}
          >
            {term}
          </Text>
        }
        showsVerticalScrollIndicator={false}
        numColumns={2}
      />
    </View>
  );
};

export default SearchScreen;
