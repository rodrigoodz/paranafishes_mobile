import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import colors from "../theme/colors";

const LoadingScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.backgroundColor,
      }}
    >
      <ActivityIndicator size={50} color={colors.secondary} />
      <Text style={{ color: colors.secondary, marginTop: 10 }}>
        Cargando información
      </Text>
    </View>
  );
};

export default LoadingScreen;
