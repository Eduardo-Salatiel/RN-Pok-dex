import React from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../navigation/StackNavigator";
import { FadeInImage } from "../components/FadeInImage";
import { useGetPokemon } from "../hooks/useGetPokemon";
import PokemonDetails from "../components/PokemonDetails";

interface Props extends StackScreenProps<RootStackParams, "PokemonScreen"> {}

const PokemonScreen = ({ route, navigation }: Props) => {
  const {
    simplePokemon: { name, id, picture },
    color,
  } = route.params;
  const { pokemon, isLoading } = useGetPokemon(id);
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ flex: 1 }}>
      {/* HEADER CNTAINER */}
      <View
        style={{
          ...styles.headerContainer,
          backgroundColor: color,
        }}
      >
        {/* BACK BUTTON */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.pop()}
          style={{ ...styles.backButton, top: top + 8 }}
        >
          <Icon name="arrow-back-outline" size={35} color="white" />
        </TouchableOpacity>
        {/* POKEMON NAME */}
        <Text style={{ ...styles.pokemonName, top: top + 40 }}>
          {name + "\n"}#{id}
        </Text>
        {/* POKEBOLA */}
        <Image
          source={require("./../assets/pokebola-blanca.png")}
          style={{ ...styles.pokebola }}
        />
        {/* POKEMON IMAGE */}
        <FadeInImage uri={picture} style={{ ...styles.pokemonImage }} />
      </View>
      {/* DETAILS */}
      {isLoading ? (
        <View style={{ ...styles.loadingIndicator }}>
          <ActivityIndicator color={color} size={50} />
        </View>
      ) : (
        <PokemonDetails pokemon={pokemon} />
      )}
    </View>
  );
};

export default PokemonScreen;

const styles = StyleSheet.create({
  headerContainer: {
    height: 370,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,
  },
  backButton: {
    position: "absolute",
    left: 20,
  },
  pokemonName: {
    color: "white",
    fontSize: 40,
    alignSelf: "flex-start",
    left: 20,
    textTransform: "capitalize",
  },
  pokebola: {
    width: 250,
    height: 250,
    top: 20,
    opacity: 0.7,
  },
  pokemonImage: {
    width: 250,
    height: 250,
    position: "absolute",
    bottom: -15,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
