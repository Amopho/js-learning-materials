import React from "react";
import { View, Text } from "react-native";

export default function Card({ name, icon, temp, hour }) {
  return (
    <View>
      <Image source={icon} />
      <Text>{name}</Text>
      <Text>{temp}°C</Text>
      <Text>{hour}h</Text>
    </View>
  );
}
