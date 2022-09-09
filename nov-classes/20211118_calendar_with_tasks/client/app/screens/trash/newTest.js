import React from "react";

import { View, Text, Button, TouchableOpacity } from "react-native";

function newTest({ navigation }) {
  return (
    <View>
      <Text>Hello see me?</Text>
      <TouchableOpacity>
        <Button
          title="Go to Jane's profile"
          onPress={() => navigation.navigate("Profile", { name: "Jane" })}
        />
        <Text>
          no change visible for button when TouchableOpacity around button, only
          when clicking this text
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default newTest;
