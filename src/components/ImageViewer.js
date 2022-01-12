import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import ImageView from "react-native-image-viewing";
import colors from "../theme/colors";
import fonts from "../theme/fonts";
import getImagesThatExists from "../helpers/getImagesThatExists";

const ImageViewer = ({ fishName }) => {
  const [visible, setIsVisible] = useState(false);
  const [imagesUrls, setImagesUrls] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const init = async () => {
      const urls = await getImagesThatExists(fishName);
      if (isMounted) {
        setImagesUrls(
          urls.map((url) => ({
            uri: url,
          }))
        );
      }
    };
    init();

    return () => {
      isMounted = false;
    };
  }, []);

  if (Boolean(imagesUrls.length)) {
    return (
      <View>
        <ImageView
          images={imagesUrls}
          imageIndex={0}
          visible={visible}
          swipeToCloseEnabled={false}
          doubleTapToZoomEnabled={false}
          onRequestClose={() => setIsVisible(false)}
        />

        <TouchableOpacity onPress={() => setIsVisible(true)}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: fonts.size.font14,
              color: colors.textSecondary,
            }}
          >
            Ver más imagenes
          </Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return null;
  }
};

export default ImageViewer;
