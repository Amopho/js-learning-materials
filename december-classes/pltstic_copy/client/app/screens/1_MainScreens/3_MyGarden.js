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
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.wrapperHeadline}>
            <Text style={[styles.headlineText]}>Meine Pflanzen </Text>
          </View>
          <TouchableOpacity
            style={styles.listItem}
            onPress={() =>
              navigation.navigate("QuickView", {
                propOne: "propOne props",
              })
            }
          >
            <Text>
              <SeedStarted />
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* map through the list of user's plants */}

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
  container: { justifyContent: "center" },
  wrapperHeadline: {
    width: "95%",
    marginVertical: 5,
    justifyContent: "center",
    alignSelf: "center",
    borderStyle: "solid",
    borderBottomWidth: 3,
    borderBottomColor: colors.sage25,
  },
  headlineText: {
    margin: 20,
    fontSize: 30,
    color: colors.sage5,
  },
  listItem: {},
});
export default MyGarden;
