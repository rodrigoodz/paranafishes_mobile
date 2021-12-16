import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import MyCarousel from "../components/MyCarousel";
import Title from "../components/Title";
import StateContext from "../../StateContext";
import colors from "../theme/colors";
import getFamilies from "../helpers/getFamilies";
import getOrders from "../helpers/getOrders";
import fonts from "../theme/fonts";

const HomeScreen = ({ navigation }) => {
  const fishesData = useContext(StateContext);

  const { orders, families } = fishesData;

  return (
    <View
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
        backgroundColor: colors.backgroundColor,
      }}
    >
      {/* <Image
        source={{
          uri: "https://www.comunicaciontucuman.gob.ar/fotos/cache/notas/2020/12/01/650x440_201201102518_14329.jpg",
        }}
        style={StyleSheet.absoluteFillObject}
        blurRadius={2}
      /> */}
      <Title text={"Explorar"} />
      <View
        style={{
          flex: 1 / 2,
          marginTop: 10,
        }}
      >
        <Text
          style={{
            color: colors.textPrimary,
            fontSize: fonts.size.font16,
            marginLeft: 20,
            fontStyle: "italic",
          }}
        >
          Por orden
        </Text>
        {orders && <MyCarousel data={getOrders()} />}
      </View>
      <View
        style={{
          flex: 1 / 2,
          marginBottom: 10,
        }}
      >
        <Text
          style={{
            color: colors.textPrimary,
            fontSize: fonts.size.font16,
            marginLeft: 20,
            fontStyle: "italic",
          }}
        >
          Por familia
        </Text>
        {families && <MyCarousel data={getFamilies()} />}
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("Peces", { titleText: "" })}
      >
        <Text
          style={{
            color: colors.textPrimary,
            fontSize: fonts.size.font18,
            fontWeight: "bold",
            marginBottom: 10,
            textAlign: "center",
          }}
        >
          Ver todas las especies
        </Text>
      </TouchableOpacity>
      <StatusBar backgroundColor="#B1D0E0" translucent />
    </View>
  );
};

export default HomeScreen;
