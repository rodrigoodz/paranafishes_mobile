import React from "react";
import HomeStack from "./HomeStack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import SearchScreen from "../screens/SearchScreen";
import colors from "../theme/colors";
import InfoScreen from "../screens/InfoScreen";
import SearchStack from "./SearchStack";

const Tab = createBottomTabNavigator();

const NavTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Explorar") {
            iconName = focused ? "md-compass-sharp" : "md-compass-outline";
          } else if (route.name === "Buscar") {
            iconName = focused ? "ios-search" : "ios-search-outline";
          } else if (route.name === "Info") {
            iconName = focused ? "reader" : "reader-outline";
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
      <Tab.Screen name="Buscar" component={SearchStack} />
      <Tab.Screen name="Info" component={InfoScreen} />
    </Tab.Navigator>
  );
};

export default NavTab;
