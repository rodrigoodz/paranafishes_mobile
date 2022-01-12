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
import FishTextItem from "../components/FishTextItem";
import GoBackButton from "../components/GoBackButton";
import colors from "../theme/colors";
import fonts from "../theme/fonts";
import ImageViewer from "../components/ImageViewer";

const ITEM_WIDTH = Math.round(Dimensions.get("window").width * 0.85);

const FishDescriptionScreen = ({ route }) => {
  const { fishes } = useContext(StateContext);
  const { fishName } = route.params;

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
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            margin: 10,
            zIndex: 10,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: fonts.size.font18,
              color: colors.textPrimary,
            }}
          >
            {fishInfo.scientificName}
          </Text>
          <ImageViewer fishName={fishName} />
        </View>
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
              fishName
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
          marginTop: 10,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <FishTextItem title={"Orden"} subtitle={fishInfo.order} />
          <FishTextItem title={"Familia"} subtitle={fishInfo.family} />
          <FishTextItem title={"Descripción"} subtitle={fishInfo.description} />
          <FishTextItem title={"Biología"} subtitle={fishInfo.biology} />
          <FishTextItem
            title={"Distribución"}
            subtitle={fishInfo.distribution}
          />
          <FishTextItem
            title={"Observaciones"}
            subtitle={fishInfo.observations}
          />
        </ScrollView>
      </View>
      <GoBackButton />
    </View>
  );
};

export default FishDescriptionScreen;
