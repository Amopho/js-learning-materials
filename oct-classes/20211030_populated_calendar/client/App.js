import React from "react";
import { StyleSheet, Text, SafeAreaView, View, Image } from "react-native";
import { NativeRouter, Route, Link, BackButton } from "react-router-native";
import colors from "./app/config/colors";
// import Home from "./app/screens/Home";
import Today from "./app/screens/Today";
import Overview from "./app/screens/Overview";
import MyGarden from "./app/screens/MyGarden";
import Community from "./app/screens/Community";
import { Colors } from "react-native/Libraries/NewAppScreen";
import NavMainBottom from "./app/components/NavMainBottom";
import NavMainTop from "./app/components/NavMainTop";

export default function App() {
  return (
    <SafeAreaView style={styles.router}>
      {/* <Link to="/today" underlayColor={colors.sage25} style={styles.item}>
          <View style={styles.elements}>
            <Image
              source={require("./assets/icons/png/plantastic.png")}
              style={{
                height: 100,
                width: 100,
                margin: 5,
                justifyContent: "center",
              }}
            />
            <Text style={styles.textLogo}>Plantastic</Text>
            <Text style={styles.text}>Let's get started</Text>
          </View>
        </Link> */}
      <Today />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  router: {
    backgroundColor: "white",
    flex: 1,
    width: "100%",
    height: "100%",
    alignContent: "center",
    justifyContent: "center",
  },
  item: {
    width: "100%",
    height: "100%",
    alignContent: "center",
    justifyContent: "center",
    borderColor: colors.sage75,
    borderStyle: "solid",
    borderWidth: 23,
  },
  elements: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderColor: colors.sage5,
    borderStyle: "solid",
    borderWidth: 30,
    alignContent: "center",
    justifyContent: "center",
  },
  textLogo: { fontSize: 40, textAlign: "center" },
  text: { fontSize: 22.5, textAlign: "center" },
});
