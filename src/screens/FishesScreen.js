import React, { useContext } from "react";
import { View, StatusBar, StyleSheet, Image } from "react-native";
import StateContext from "../../StateContext";
import GoBackButton from "../components/GoBackButton";
import ScrollList from "../components/ScrollList";
import Title from "../components/Title";
import colors from "../theme/colors";

const FishesScreen = ({ route }) => {
  const { titleText } = route.params;
  const { fishes } = useContext(StateContext);

  // Si llego a esta pantalla porque quise mostrar alguna 'familia' hago el filter, sino muestro todos los peces
  let fishesToDisplay = [];
  titleText === ""
    ? (fishesToDisplay = fishes)
    : (fishesToDisplay = fishes.filter((fish) => fish.family === titleText));

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
      <Image
        source={{
          uri: "https://www.comunicaciontucuman.gob.ar/fotos/cache/notas/2020/12/01/650x440_201201102518_14329.jpg",
        }}
        style={StyleSheet.absoluteFillObject}
        blurRadius={2}
      />
      {titleText !== "" && <Title text={titleText} />}
      <ScrollList data={fishesToDisplay} />
      <GoBackButton />
    </View>
  );
};

export default FishesScreen;
