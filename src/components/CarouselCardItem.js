import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import fonts from "../theme/fonts";

export const SLIDER_WIDTH = Dimensions.get("window").width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.85);

const CarouselCardItem = ({ item, index }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      key={index}
      onPress={() =>
        navigation.navigate(item.navigationScreen, { titleText: item.title })
      }
    >
      <View style={styles.imageContainer}>
        <Image
          source={item.image}
          style={styles.image}
          resizeMode={"contain"}
        />
      </View>
      <Text style={styles.header}>{item.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: ITEM_WIDTH - 20,
    height: 200,
  },
  header: {
    color: "#222",
    fontSize: fonts.size.font26,
    fontWeight: "bold",
    paddingLeft: 5,
    // paddingTop: 5,
  },
});

export default CarouselCardItem;
