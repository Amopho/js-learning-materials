import React from "react";
import { StyleSheet, Text, TouchableOpacity, SafeAreaView } from "react-native";
import colors from "../config/colors";

function BanderoleDressy() {
  return (
    <SafeAreaView style={styles.banderole}>
      <Text style={styles.mainText}>Banderole Test</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  banderole: {
    marginTop: 80,
    height: 150,
    width: "100%",
    backgroundColor: colors.sage5,

    position: "absolute",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BanderoleDressy;
