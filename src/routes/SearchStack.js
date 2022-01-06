import React from "react";
import FishDescriptionScreen from "../screens/FishDescriptionScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "../screens/SearchScreen";

const Stack = createNativeStackNavigator();

const SearchStack = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
        animation: "fade",
      })}
    >
      <Stack.Screen name="Busqueda" component={SearchScreen} />
      <Stack.Screen name="Pez" component={FishDescriptionScreen} />
    </Stack.Navigator>
  );
};

export default SearchStack;
