import React from "react";
import { View } from "react-native";

import Carousel from "react-native-snap-carousel";
import CarouselCardItem, { ITEM_WIDTH, SLIDER_WIDTH } from "./CarouselCardItem";

const MyCarousel = ({ data }) => {
  const isCarousel = React.useRef(null);

  return (
    <View
      style={{
        flex: 1,
        marginTop: 5,
        marginBottom: 5,
      }}
    >
      <Carousel
        layout={"default"}
        layoutCardOffset={8}
        ref={isCarousel}
        data={data}
        renderItem={(props) => <CarouselCardItem {...props} />}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
        inactiveSlideScale={0.94}
        inactiveSlideOpacity={0.7}
        firstItem={1}
      />
    </View>
  );
};

export default MyCarousel;
