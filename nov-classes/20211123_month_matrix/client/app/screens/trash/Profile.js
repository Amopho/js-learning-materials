import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function Profile({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text>Your app works!</Text>
      <StatusBar style="auto" />
      <Text>This is {route.params.name}'s profile</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Home", { title: "new title does not work?" })
        }
      >
        <Text>Go back Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("newTest", { userName: "userName" })}
      >
        <Text>Go back to test2/newTest</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Profile;
