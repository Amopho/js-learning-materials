import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
} from "react-native";

// piece components >>
import NavMainTop from "../../components/2_NavComponents/NavMainTop";
import NavMainBottom from "../../components/2_NavComponents/NavMainBottom";
import SearchMenu from "../3_SearchMenuScreens/0_SearchMenu";
import MyGardenBanderole from "../../components/3_Banderolen/MyGardenBanderole";
import SeedStarted from "../../components/Calendar/SeedStarted";
// for styling >>
import colors from "../../config/colors";
import StyleMain from "../../styles/StyleMain";

const MyGarden = ({ navigation }) => {
  return (
    <SafeAreaView style={StyleMain.container}>
      {/* --------------------------------------------------------------- Banderole */}
      <MyGardenBanderole navigation={navigation} />
      {/* ----------------------------------------------------- Main Part */}
      <View
        style={{
          width: "100%",
          marginTop: 200,
          height: 125,
          backgroundColor: colors.sage25,
          position: "absolute",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flex: 1,
            width: "100%",
          }}
        >
          <SeedStarted />
          {/* map through the list of user's plants */}
        </View>
      </View>
      {/* ---------------------------------------- Navigation Main Bottom */}
      <NavMainBottom navigation={navigation} />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // platformContainer: {
  //   flex: 1,
  //   paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  // },
});
export default MyGarden;
