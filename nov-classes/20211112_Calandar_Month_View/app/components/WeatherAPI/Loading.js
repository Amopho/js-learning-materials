import React from "react";
import { View, Text, Image } from "react-native";

import imageDictionary from "./imageDictionary";

const Loading = (props) => {
  return (
    <View>
      <Text>Welcome!</Text>
      <Image
        source={imageDictionary["01d"]}
        style={{
          height: 20,
          width: 20,
          alignItems: "center",
          margin: 5,
        }}
      />
      <Text>Loading...</Text>
    </View>
  );
};
export default Loading;
