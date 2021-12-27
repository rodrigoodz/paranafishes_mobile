import React from "react";
import HomeStack from "./HomeStack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import SearchScreen from "../screens/SearchScreen";
import colors from "../theme/colors";

const Tab = createBottomTabNavigator();

const NavTab = () => {
  return (
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
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#f3f3f3",
        headerShown: false,
        tabBarStyle: { backgroundColor: colors.tabNavigatorColor },
      })}
    >
      <Tab.Screen name="Explorar" component={HomeStack} />
      <Tab.Screen name="Buscar" component={SearchScreen} />
    </Tab.Navigator>
  );
};

export default NavTab;
