import React, { useContext } from "react";
import NavTab from "./NavTab";
import { NavigationContainer } from "@react-navigation/native";
import LoadingScreen from "../screens/LoadingScreen";
import StateContext from "../../StateContext";

const Navigation = () => {
  const fishesData = useContext(StateContext);

  if (Boolean(fishesData.fishes.length === 0)) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      <NavTab />
    </NavigationContainer>
  );
};

export default Navigation;
