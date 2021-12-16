import React, { useContext } from "react";
import {
  View,
  Text,
  Button,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Title from "../components/Title";
import colors from "../theme/colors";
import StateContext from "../../StateContext";

const OrderScreen = ({ route, navigation }) => {
  const { orders } = useContext(StateContext);
  const { titleText } = route.params;

  // busco el order pasado como parametro dentro del context
  const orderInfo = orders.find((order) => order.name === titleText);

  return (
    <View
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
        backgroundColor: colors.backgroundColor,
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <Title text={titleText} />
      <ScrollView
        style={{
          marginLeft: 20,
          marginRight: 30,
          flex: 1,
        }}
        showsVerticalScrollIndicator={false}
      >
        {orderInfo && (
          <View>
            <Text
              style={{
                color: "white",
                textAlign: "justify",
              }}
            >
              {orderInfo.description}
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 20,
                marginTop: 5,
                marginBottom: 5,
                fontWeight: "bold",
              }}
            >
              Familias
            </Text>
            {orderInfo.family.map((family) => (
              <TouchableOpacity
                style={{
                  backgroundColor: "white",
                  marginBottom: 5,
                  padding: 5,
                  borderRadius: 8,
                }}
                key={family}
                onPress={() =>
                  navigation.navigate("Peces", {
                    titleText: family,
                  })
                }
              >
                <Text style={{ fontWeight: "bold" }}>{family}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default OrderScreen;
