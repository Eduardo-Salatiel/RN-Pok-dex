import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import StackNavigator from "./StackNavigator";
import Tab2Screen from "./Tab2Screen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: "white",
      }}
      tabBarOptions={{
        activeTintColor: "#5856D6",
        labelStyle: {
          marginBottom: Platform.OS === "ios" ? 0 : 10,
        },
        style: {
          position: "absolute",
          backgroundColor: "rgba(255,255,255,0.9)",
          borderWidth: 0,
          elevation: 0,
          height: Platform.OS === "ios" ? 80 : 55,
        },
      }}
    >
      <Tab.Screen
        name="StackNavigator"
        options={{
          tabBarLabel: "Listado",
          tabBarIcon: ({ color }) => (
            <Icon name="list-outline" size={25} color={color} />
          ),
        }}
        component={StackNavigator}
      />
      <Tab.Screen
        name="SearchScreen"
        options={{
          tabBarLabel: "Busqueda",
          tabBarIcon: ({ color }) => (
            <Icon name="search-outline" size={25} color={color} />
          ),
        }}
        component={Tab2Screen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
