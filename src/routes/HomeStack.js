import React from "react";
import FishDescriptionScreen from "../screens/FishDescriptionScreen";
import FishesScreen from "../screens/FishesScreen";
import HomeScreen from "../screens/HomeScreen";
import OrderScreen from "../screens/OrderScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
        animation: "fade",
      })}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Orden" component={OrderScreen} />
      <Stack.Screen name="Peces" component={FishesScreen} />
      <Stack.Screen name="Pez" component={FishDescriptionScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
