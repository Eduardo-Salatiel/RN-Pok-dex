import { useNavigation } from "@react-navigation/core";
import { StackScreenProps } from "@react-navigation/stack";
import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import ImageColors from "react-native-image-colors";
import { SimplePokemon } from "../interfaces/pokemonInterfaces";
import { FadeInImage } from "./FadeInImage";

const { width: windowWidth } = Dimensions.get("window");

interface Props {
  pokemon: SimplePokemon;
}

const PokemonCard = ({ pokemon }: Props) => {
  const [bgColor, setBgColor] = useState("grey");
  const isMounted = useRef(true);
  const navigation = useNavigation();

  useEffect(() => {
    ImageColors.getColors(pokemon.picture, { fallback: "grey" })
      .then(color => {
        if (!isMounted) return;

        color.platform === "android"
          ? setBgColor(color.dominant || "grey")
          : setBgColor(color.background);
    });

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={0.87}
      onPress={() =>
        navigation.navigate("PokemonScreen", {
          simplePokemon: pokemon,
          color: bgColor,
        })
      }
    >
      <View
        style={{
          ...styles.cardContainer,
          width: windowWidth * 0.4,
          backgroundColor: bgColor,
        }}
      >
        <View>
          <Text style={styles.name}>
            {pokemon.name}
            {"\n#" + pokemon.id}
          </Text>
        </View>
        <View style={styles.pokebolaContainer}>
          <Image
            source={require("./../assets/pokebola-blanca.png")}
            style={styles.pokebola}
          />
        </View>
        <FadeInImage uri={pokemon.picture} style={styles.pokemonImage} />
      </View>
    </TouchableOpacity>
  );
};

export default PokemonCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "grey",
    marginHorizontal: 10,
    height: 120,
    width: 160,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  name: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    top: 20,
    left: 10,
  },
  pokebolaContainer: {
    width: 100,
    height: 100,
    position: "absolute",
    bottom: 0,
    right: 0,
    overflow: "hidden",
    opacity: 0.5,
  },
  pokebola: {
    width: 100,
    height: 100,
    position: "absolute",
    bottom: -25,
    right: -25,
  },
  pokemonImage: {
    width: 120,
    height: 120,
    position: "absolute",
    right: -8,
    bottom: -6,
  },
});
{
  /* <FadeInImage
            uri={item.picture }
            style={{ height: 100, width: 100 }}
          /> */
}
