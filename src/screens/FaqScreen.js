import React from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import Title from "../components/Title";
import getQuestions from "../helpers/getQuestions";
import colors from "../theme/colors";
import fonts from "../theme/fonts";

const FaqScreen = () => {
  const handleMailTo = () => {
    Linking.openURL(
      "mailto:orrasoftware@gmail.com?subject=Feedback%20App%20&body=Mi%20mail%20es%20%3D%0ASugerencia:"
    );
  };

  return (
    <View
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
        backgroundColor: colors.backgroundColor,
        paddingBottom: 10,
        paddingRight: 10,
        paddingLeft: 10,
      }}
    >
      <Title text="FAQs" />
      <ScrollView
        style={{
          flex: 1,
        }}
      >
        {getQuestions().map((q, idx) => (
          <View
            style={{
              backgroundColor: colors.primary,
              borderRadius: 8,
              padding: 5,
              marginTop: 5,
            }}
            key={idx}
          >
            <Text
              style={{
                color: colors.textPrimary,
                fontWeight: "bold",
                textAlign: "justify",
                fontSize: fonts.size.font16,
              }}
            >
              {q.question}
            </Text>
            <Text
              style={{
                color: colors.textPrimary,
                textAlign: "justify",
                fontSize: fonts.size.font14,
              }}
            >
              {q.answer}
            </Text>
          </View>
        ))}
      </ScrollView>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 5,
        }}
      >
        <Text style={{ color: colors.textPrimary }}>
          ¿Problemas con la app?
        </Text>
        <TouchableOpacity onPress={handleMailTo}>
          <Text style={{ color: colors.textSecondary, fontWeight: "bold" }}>
            Enviá tu sugerencia
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FaqScreen;
