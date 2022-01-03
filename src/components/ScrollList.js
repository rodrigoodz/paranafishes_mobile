import React, { useState } from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import fonts from "../theme/fonts";
import colors from "../theme/colors";

const AVATAR_SIZE = 70;
const SPACING = 10;

const ScrollList = ({ data, previousScreen = null }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          margin: 10,
        }}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Pez", {
                  fishName: item.scientificName,
                  previousScreen: previousScreen,
                })
              }
            >
              <View
                style={{
                  flexDirection: "row",
                  padding: SPACING,
                  marginBottom: SPACING,
                  backgroundColor: "rgba(255,255,255,0.5)",
                  borderRadius: 12,
                  overflow: "hidden",
                }}
              >
                {Boolean(item.imageName) ? (
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
                    }}
                    resizeMode={"contain"}
                  />
                ) : (
                  <View
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignContent: "center",
                      width: AVATAR_SIZE,
                      height: AVATAR_SIZE,
                      marginRight: SPACING,
                    }}
                  >
                    <Ionicons
                      name={"image-outline"}
                      size={50}
                      color={colors.primary}
                      style={{
                        textAlign: "center",
                      }}
                    />
                  </View>
                )}

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
                    {item.commonName.length !== 0 &&
                      item.commonName.map((name, index) => (
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
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ScrollList;
