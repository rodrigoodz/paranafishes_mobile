import React from "react";
import { View, StatusBar } from "react-native";
import FeedbackButton from "../components/FeedbackButton";
import Title from "../components/Title";
import colors from "../theme/colors";
import MyAccordion from "../components/MyAccordion";

const InfoScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
        backgroundColor: colors.backgroundColor,
        paddingBottom: 10,
        paddingRight: 10,
      }}
    >
      <Title text="Información" />
      <View
        style={{
          flex: 1,
          paddingLeft: 20,
        }}
      >
        <MyAccordion />
      </View>
      <FeedbackButton />
    </View>
  );
};

export default InfoScreen;
