import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  View,
  Image,
  Linking,
  ScrollView,
} from "react-native";

import colors from "../../config/colors";

import Today from "../1_MainScreens/1_Today";

import StyleMain from "../../styles/StyleMain";
import StylePlants from "../../styles/StylePlants";

const Settings = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.wrapper}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.white,
    height: "100%",
  },
  wrapper: { margin: 25 },
  h1: {
    fontSize: 22,
    color: colors.sage,
    textAlign: "center",
    marginBottom: 30,
    fontWeight: "bold",
  },
  h2: { fontSize: 18, color: colors.sage75, marginTop: 10, marginBottom: 10 },
  h3: {
    fontSize: 14,
    textDecorationLine: "underline",
    marginTop: 10,
    marginBottom: 10,
  },
  p: { fontSize: 14 },
  pp: { fontSize: 14, marginTop: 15 },
  link: { textDecorationLine: "underline" },
});

export default Settings;
