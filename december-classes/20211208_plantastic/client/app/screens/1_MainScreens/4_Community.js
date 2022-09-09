import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  SafeAreaView,
} from "react-native";

// piece components >>
import NavMainTop from "../../components/2_NavComponents/NavMainTop";
import NavMainBottom from "../../components/2_NavComponents/NavMainBottom";

// for styling >>

import colors from "../../config/colors";
import StyleMain from "../../styles/StyleMain";

const Community = ({ navigation }) => {
  return (
    <SafeAreaView style={StyleMain.container}>
      {/* ----------------------------------------------------- Banderole */}
      <SafeAreaView style={StyleMain.banderole}>
        <Text style={StyleMain.mainText}>Community</Text>
      </SafeAreaView>

      {/* ----------------------------------------------------- Main Part */}
      <View style={styles.body}>
        <Image
          source={require("../../../assets/icons/png/soon.png")}
          style={styles.image}
        />
      </View>
      {/* ---------------------------------------- Navigation Main Bottom */}

      <NavMainBottom navigation={navigation} />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  body: { alignItems: "center", justifyContent: "center" },
  image: { width: 150, height: 150, marginTop: 50 },
});
export default Community;
