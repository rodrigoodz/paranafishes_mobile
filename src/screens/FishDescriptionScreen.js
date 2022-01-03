import React, { useContext } from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import StateContext from "../../StateContext";
import GoBackButton from "../components/GoBackButton";
import colors from "../theme/colors";
import fonts from "../theme/fonts";

const ITEM_WIDTH = Math.round(Dimensions.get("window").width * 0.85);

const FishDescriptionScreen = ({ route }) => {
  const { fishes } = useContext(StateContext);
  const { fishName, previousScreen } = route.params;

  const fishInfo = fishes.find((fish) => fish.scientificName === fishName);

  return (
    <View
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight,
        backgroundColor: colors.backgroundColor,
        flexDirection: "column",
      }}
    >
      <View
        style={{
          flex: 1 / 2,
          backgroundColor: "rgba(255,255,255,0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Text
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            margin: 10,
            zIndex: 10,
            fontWeight: "bold",
            fontSize: fonts.size.font18,
            color: colors.textPrimary,
          }}
        >
          {fishInfo.scientificName}
        </Text>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            zIndex: 10,
            padding: 15,
            flexDirection: "row",
          }}
        >
          {fishInfo.commonName.map((name, index) => (
            <View
              key={index}
              style={{
                backgroundColor: colors.primary,
                borderRadius: 8,
                padding: name ? 4 : 0,
                marginLeft: 5,
              }}
            >
              <Text
                style={{
                  fontSize: fonts.size.font12,
                  color: colors.textPrimary,
                }}
              >
                {name}
              </Text>
            </View>
          ))}
        </View>
        <Image
          source={{
            uri: `https://firebasestorage.googleapis.com/v0/b/paranafishes.appspot.com/o/${encodeURIComponent(
              fishInfo.imageName
            )}.png?alt=media`,
          }}
          resizeMode={"contain"}
          style={{ width: ITEM_WIDTH, height: ITEM_WIDTH * 0.8 }}
        />
      </View>
      <View
        style={{
          flex: 1 / 2,
          display: "flex",
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 20,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginBottom: 5 }}>
            <Text
              style={{
                color: colors.textPrimary,
                fontSize: fonts.size.font14,
                fontWeight: "bold",
              }}
            >
              Orden
            </Text>
            <Text style={{ textAlign: "justify", color: colors.textPrimary }}>
              {fishInfo.order}
            </Text>
          </View>
          <View style={{ marginBottom: 5 }}>
            <Text
              style={{
                color: colors.textPrimary,
                fontSize: fonts.size.font14,
                fontWeight: "bold",
              }}
            >
              Familia
            </Text>
            <Text style={{ textAlign: "justify", color: colors.textPrimary }}>
              {fishInfo.family}
            </Text>
          </View>
          {Boolean(fishInfo.description) && (
            <View style={{ marginBottom: 5 }}>
              <Text
                style={{
                  color: colors.textPrimary,
                  fontSize: fonts.size.font14,
                  fontWeight: "bold",
                }}
              >
                Descripción
              </Text>
              <Text style={{ textAlign: "justify", color: colors.textPrimary }}>
                {fishInfo.description}
              </Text>
            </View>
          )}
          {Boolean(fishInfo.biology) && (
            <View style={{ marginBottom: 5 }}>
              <Text
                style={{
                  color: colors.textPrimary,
                  fontSize: fonts.size.font14,
                  fontWeight: "bold",
                }}
              >
                Biología
              </Text>
              <Text style={{ textAlign: "justify", color: colors.textPrimary }}>
                {fishInfo.biology}
              </Text>
            </View>
          )}

          {Boolean(fishInfo.distribution) && (
            <View style={{ marginBottom: 5 }}>
              <Text
                style={{
                  color: colors.textPrimary,
                  fontSize: fonts.size.font14,
                  fontWeight: "bold",
                }}
              >
                Distribución
              </Text>
              <Text style={{ textAlign: "justify", color: colors.textPrimary }}>
                {fishInfo.distribution}
              </Text>
            </View>
          )}
          {Boolean(fishInfo.observations) && (
            <View style={{ marginBottom: 5 }}>
              <Text
                style={{
                  color: colors.textPrimary,
                  fontSize: fonts.size.font14,
                  fontWeight: "bold",
                }}
              >
                Observaciones
              </Text>
              <Text style={{ textAlign: "justify", color: colors.textPrimary }}>
                {fishInfo.observations}
              </Text>
            </View>
          )}
        </ScrollView>
      </View>
      <GoBackButton previousScreen={previousScreen} />
    </View>
  );
};

export default FishDescriptionScreen;
