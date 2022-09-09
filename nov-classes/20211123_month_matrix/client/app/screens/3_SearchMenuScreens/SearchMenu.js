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
import colors from "../../config/colors";

import Terms from "./Terms";
import StyleMain from "../../styles/StyleMain";
import StylePlants from "../../styles/StylePlants";

const SearchMenu = () => {
  return (
    <SafeAreaView style={StyleMain.container}>
      {/* back button */}
      <View style={StylePlants}>
        <View underlayColor="white" style={StylePlants}>
          <View style={StylePlants}>
            <Image
              source={require("../../../assets/icons/png/back-button.png")}
              style={{
                height: 50,
                width: 50,
                alignItems: "center",
                margin: 5,
              }}
            />
          </View>
        </View>
        {/* main content */}
        <Text style={styles.text}>
          Here will be a Searchbar and the MainMenu
        </Text>
        <Text>
          <View style={StyleMain.quick}>
            <View
              name="Terms-link?"
              underlayColor={colors.sage25}
              style={styles.quickLink}
            >
              <View style={styles.quicky}>
                <Image
                  source={require("../../../assets/icons/png/flower.png")}
                  style={{ height: 50, width: 50, alignItems: "center" }}
                />
                <Text style={styles.quickyText}>Beeren</Text>
              </View>
            </View>
          </View>
        </Text>
      </View>

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
