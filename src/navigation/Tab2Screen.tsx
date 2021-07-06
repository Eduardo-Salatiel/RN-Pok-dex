import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParams } from "./StackNavigator";
import PokemonScreen from "../screens/PokemonScreen";
import SearchScreen from "../screens/SearchScreen";

const Tab2 = createStackNavigator<RootStackParams>();

const Tab2Screen = () => {
  return (
    <Tab2.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "white" },
      }}
    >
      <Tab2.Screen
        name="HomeScreen"
        component={SearchScreen}
      />
      <Tab2.Screen
        name="PokemonScreen"
        component={PokemonScreen}
      />
    </Tab2.Navigator>
  );
};

export default Tab2Screen;