import React from "react";
import HomeStack from "./HomeStack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import SearchScreen from "../screens/SearchScreen";
import colors from "../theme/colors";
import FaqScreen from "../screens/FaqScreen";

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
          } else if (route.name === "FAQ") {
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
      <Tab.Screen name="Buscar" component={SearchScreen} />
      <Tab.Screen name="FAQ" component={FaqScreen} />
    </Tab.Navigator>
  );
};

export default NavTab;
