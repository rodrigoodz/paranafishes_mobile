import React from "react";
import { View, Text } from "react-native";
import colors from "../theme/colors";
import fonts from "../theme/fonts";

const FishTextItem = ({ title = null, subtitle = null }) => {
  if (Boolean(subtitle)) {
    return (
      <View style={{ marginBottom: 5 }}>
        <Text
          style={{
            color: colors.textPrimary,
            fontSize: fonts.size.font14,
            fontWeight: "bold",
          }}
        >
          {title}
        </Text>
        <Text style={{ textAlign: "justify", color: colors.textPrimary }}>
          {subtitle}
        </Text>
      </View>
    );
  } else {
    return null;
  }
};

export default FishTextItem;
