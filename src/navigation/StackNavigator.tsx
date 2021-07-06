import React from "react";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import PokemonScreen from "../screens/PokemonScreen";
import { SimplePokemon } from '../interfaces/pokemonInterfaces';

 export type RootStackParams = {
  HomeScreen: undefined,
  PokemonScreen: {simplePokemon: SimplePokemon, color: string}
}

const Stack = createStackNavigator<RootStackParams>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "white" },
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        options={{ ...defaultOptions }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="PokemonScreen"
        options={{ ...defaultOptions }}
        component={PokemonScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const defaultOptions = {
  gestureDirection: "horizontal",
} as StackNavigationOptions;
