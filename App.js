import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "./src/screens/HomeScreen";
import SearchScreen from "./src/screens/SearchScreen";
import OrderScreen from "./src/screens/OrderScreen";
import FishesScreen from "./src/screens/FishesScreen";
import FishDescriptionScreen from "./src/screens/FishDescriptionScreen";
import { StateProvider } from "./StateContext";

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />

      <HomeStack.Screen name="Orden" component={OrderScreen} />
      <HomeStack.Screen name="Peces" component={FishesScreen} />
      <HomeStack.Screen name="Pez" component={FishDescriptionScreen} />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StateProvider>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Explorar") {
                iconName = focused
                  ? "ios-information-circle"
                  : "ios-information-circle-outline";
              } else if (route.name === "Buscar") {
                iconName = focused ? "search-circle" : "search-circle-outline";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "white",
            tabBarInactiveTintColor: "gray",
            headerShown: false,
            tabBarStyle: { backgroundColor: "#1e272e" },
          })}
        >
          <Tab.Screen name="Explorar" component={HomeStackScreen} />
          <Tab.Screen name="Buscar" component={SearchScreen} />
        </Tab.Navigator>
      </StateProvider>
    </NavigationContainer>
  );
}
