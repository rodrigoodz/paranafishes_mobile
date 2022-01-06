import React from "react";
import { Text, TouchableOpacity, View, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const GoBackButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={{
          backgroundColor: "rgba(255,255,255,0.4)",
          width: Dimensions.get("window").width * 0.4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          padding: 2,
          borderRadius: 5,
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <Text style={{ fontSize: 25, color: "rgba(0,0,0,.8)" }}>Volver</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoBackButton;
