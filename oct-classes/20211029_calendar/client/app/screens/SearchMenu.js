import React, { useEffect } from "react";

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Button,
  BackHandler,
  Alert,
  View,
  Link,
} from "react-native";
import colors from "../config/colors";

const SearchMenu = () => {
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to go back?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        { text: "YES", onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.text}>Click Back button!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "white",

    position: "absolute",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  backButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SearchMenu;
