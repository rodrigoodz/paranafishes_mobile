import React, { useState } from "react";
import {
  Image,
  Animated,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import fonts from "../theme/fonts";
import colors from "../theme/colors";

const AVATAR_SIZE = 70;
const SPACING = 10;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

const ScrollList = ({ data }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const navigation = useNavigation();

  const scrollY = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={{ flex: 1 }}>
      <Animated.FlatList
        data={data}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          margin: 10,
        }}
        renderItem={({ item, index }) => {
          const inputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 2),
          ];

          const opacityInputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 1),
          ];
          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          });
          const opacity = scrollY.interpolate({
            inputRange: opacityInputRange,
            outputRange: [1, 1, 1, 0],
          });
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Pez", { fishName: item.scientificName })
              }
            >
              <Animated.View
                style={{
                  flexDirection: "row",
                  padding: SPACING,
                  marginBottom: SPACING,
                  backgroundColor: "rgba(255,255,255,0.5)",
                  borderRadius: 12,
                  overflow: "hidden",
                  transform: [{ scale }],
                  opacity: opacity,
                  // shadowColor: "#000",
                  // shadowOffset: {
                  //   width: 0,
                  //   height: 10,
                  // },
                  // shadowOpacity: 0.3,
                  // shadowRadius: 20,
                }}
              >
                <Image
                  source={{
                    uri: `https://firebasestorage.googleapis.com/v0/b/paranafishes.appspot.com/o/${encodeURIComponent(
                      item.imageName
                    )}.png?alt=media`,
                  }}
                  onLoadEnd={() => setImageLoaded(true)}
                  style={{
                    width: AVATAR_SIZE,
                    height: AVATAR_SIZE,
                    borderRadius: AVATAR_SIZE,
                    marginRight: SPACING,
                    // backgroundColor: "rgba(255,255,255,0.4)",
                  }}
                  resizeMode={"contain"}
                />
                {!imageLoaded && (
                  <ActivityIndicator
                    size="large"
                    color="#000"
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 0,
                      marginLeft: 25,
                    }}
                  />
                )}

                <View>
                  <Text
                    style={{
                      fontSize: fonts.size.font16,
                      fontWeight: "bold",
                      color: colors.textPrimary,
                    }}
                  >
                    {item.scientificName}
                  </Text>
                  <View style={{ flexDirection: "row" }}>
                    {item.commonName.map((name, index) => (
                      <View
                        key={index}
                        style={{
                          backgroundColor: colors.primary,
                          borderRadius: 8,
                          padding: name ? 2 : 0,
                          marginRight: 5,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: fonts.size.font12,
                            fontWeight: "600",
                            color: colors.textPrimary,
                          }}
                        >
                          {name}
                        </Text>
                      </View>
                    ))}
                  </View>
                </View>
              </Animated.View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ScrollList;
