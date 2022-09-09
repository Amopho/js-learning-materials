import React from "react";
import { View, SafeAreaView, Text, TouchableOpacity } from "react-native";

function HomeTest({ navigation, route }) {
  return (
    <SafeAreaView>
      <Text>Hello, I am a Testing Home Page.</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("newTest", {
            title:
              "title's cannot be changed like this, only in App.js, need state manager?",
          })
        }
      >
        <Text>Go to newTest</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ComponentName")}>
        <Text>Dummies click here.</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default HomeTest;
