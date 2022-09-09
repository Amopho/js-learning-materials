import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  View,
  Image,
} from "react-native";
import colors from "../config/colors";
import { NativeRouter, Route, Link } from "react-router-native";
import Today from "./Today";
import Terms from "./Terms";
import StyleMain from "../styles/StyleMain";
import StylePlants from "../styles/StylePlants";

const SearchMenu = () => {
  return (
    <SafeAreaView style={StyleMain.container}>
      <NativeRouter>
        <SafeAreaView style={StylePlants.navMainTop}>
          <Link
            to="/today"
            underlayColor="white"
            style={StylePlants.navTopItem}
          >
            <View style={StylePlants.navTopElements}>
              <Image
                source={require("../../assets/icons/png/back-button.png")}
                style={{
                  height: 50,
                  width: 50,
                  alignItems: "center",
                  margin: 5,
                }}
              />
            </View>
          </Link>
          <Text style={styles.text}>
            Here will be a Searchbar and the MainMenu
          </Text>
          <Text>
            <View style={StyleMain.quick}>
              <Link
                to="/Terms"
                underlayColor={colors.sage25}
                style={styles.quickLink}
              >
                <View style={styles.quicky}>
                  <Image
                    source={require("../../assets/icons/png/flower.png")}
                    style={{ height: 50, width: 50, alignItems: "center" }}
                  />
                  <Text style={styles.quickyText}>Beeren</Text>
                </View>
              </Link>
            </View>
          </Text>
        </SafeAreaView>
        <Route path="/today" component={Today} />
        <Route path="/terms" component={Terms} />
      </NativeRouter>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // platformContainer: {
  //   flex: 1,
  //   paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  // },
  text: {
    alignItems: "center",
    justifyContent: "center",
    top: 100,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SearchMenu;
