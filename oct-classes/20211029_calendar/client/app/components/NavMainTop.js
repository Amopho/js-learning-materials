import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  View,
  Image,
} from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import colors from "../config/colors";
// import Home from "../screens/Home";
import Today from "../screens/Today";
import Overview from "../screens/Overview";
import MyGarden from "../screens/MyGarden";
import Community from "../screens/Community";

function NavMainTop() {
  return (
    <NativeRouter>
      <SafeAreaView style={styles.navMainTop}>
        <Link to="/today" style={styles.navTopItem}>
          <View style={styles.navTopElements}>
            <Image
              source={require("../../assets/icons/png/plantastic.png")}
              style={{ height: 50, width: 50, alignItems: "center", margin: 5 }}
            />
            <Text style={styles.navTopText}>Plantastic</Text>
          </View>
        </Link>
      </SafeAreaView>

      {/* <Route exact path="/" component={Home} /> */}
      <Route path="/today" component={Today} />
      <Route path="/overview" component={Overview} />
      <Route path="/myGarden" component={MyGarden} />
      <Route path="/community" component={Community} />
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  // TOP Nav
  navMainTop: {
    position: "absolute",
  },
  navTopItem: {},
  navTopElements: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "center",
  },
  navTopText: {
    fontSize: 30,
  },
});

export default NavMainTop;
