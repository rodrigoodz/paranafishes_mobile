import React from "react";
import { View, Text, Image } from "react-native";
import colors from "../theme/colors";

const ErrorScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#d62828",
      }}
    >
      <Text style={{ color: colors.secondary, marginTop: 10 }}>
        Error! La aplicación necesita conexión a internet
      </Text>
      <Image source={require("../images/others/deadfish.png")} />
    </View>
  );
};

export default ErrorScreen;
