import React, { Fragment } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import PokemonCard from "../components/PokemonCard";
import { usePokemonPaginated } from "../hooks/usePokemonPaginated";
import { styles } from "../theme/appTheme";

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { simplePokemonList, isLoading, loadPokemos } = usePokemonPaginated();

  return (
    <Fragment>
      <Image
        source={require("./../assets/pokebola.png")}
        style={styles.pokebolaBG}
      />
      <View style={{alignItems: 'center'}}>
      <FlatList
        data={simplePokemonList}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        ListHeaderComponent={
          <Text
            style={{
              ...styles.title,
              ...styles.globalMargin,
              marginTop: top + 20,
              marginBottom: top + 20,
            }}
          >
            Pokédex
          </Text>
        }
        ListFooterComponent={
          <ActivityIndicator color="grey" size={30} style={{ height: 100 }} />
        }
        showsVerticalScrollIndicator={false}
        numColumns={2}
        onEndReached={loadPokemos}
        onEndReachedThreshold={0.4}
      />
      </View>
    </Fragment>
  );
};

export default HomeScreen;
