import React from "react";
import { View, Text } from "react-native";
import colors from "../theme/colors";

const Title = ({ text }) => {
  return (
    <View>
      <Text
        style={{
          color: colors.textPrimary,
          fontSize: 32,
          fontWeight: "bold",
          marginTop: 20,
          marginLeft: 20,
        }}
      >
        {text}
      </Text>
    </View>
  );
};

export default Title;
