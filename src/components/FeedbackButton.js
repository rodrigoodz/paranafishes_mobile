import React from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import colors from "../theme/colors";

const FeedbackButton = () => {
  const handleMailTo = () => {
    Linking.openURL("mailto:orrasoftware@gmail.com?subject=Feedback%20");
  };

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 5,
      }}
    >
      <Text style={{ color: colors.textPrimary }}>¿Problemas con la app?</Text>
      <TouchableOpacity onPress={handleMailTo}>
        <Text style={{ color: colors.textSecondary, fontWeight: "bold" }}>
          Enviá tu sugerencia
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FeedbackButton;
