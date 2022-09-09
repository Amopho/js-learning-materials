import React from "react";
import { StyleSheet, Text, SafeAreaView, View, Image } from "react-native";
import { NativeRouter, Route, Link, Switch } from "react-router-native";
import colors from "../config/colors";
// import Home from "../screens/Home";
import Today from "../screens/Today";
import Overview from "../screens/Overview";
import MyGarden from "../screens/MyGarden";
import Community from "../screens/Community";

function NavMainBottom() {
  return (
    <NativeRouter>
      <SafeAreaView style={styles.navMainBottom}>
        <Link
          to="/today"
          underlayColor="rgba(109, 153, 130, 0.25)"
          style={styles.navItem}
        >
          <View style={styles.navElements}>
            <Image
              source={require("../../assets/icons/png/shed.png")}
              style={{ height: 50, width: 50, alignItems: "center" }}
            />
            <Text style={styles.navText}>Heute</Text>
          </View>
        </Link>

        <Link
          to="/overview"
          underlayColor="rgba(109, 153, 130, 0.25)"
          style={styles.navItem}
        >
          <View style={styles.navElements}>
            <Image
              source={require("../../assets/icons/png/calendarView.png")}
              style={{ height: 50, width: 50 }}
            />
            <Text style={styles.navText}>Übersicht</Text>
          </View>
        </Link>

        <Link
          to="/myGarden"
          underlayColor="rgba(109, 153, 130, 0.25)"
          style={styles.navItem}
        >
          <View style={styles.navElements}>
            <Image
              source={require("../../assets/icons/png/meinGarten.png")}
              style={{ height: 50, width: 50 }}
            />
            <Text style={styles.navText}>Mein Garten</Text>
          </View>
        </Link>

        <Link
          to="/community"
          underlayColor="rgba(109, 153, 130, 0.25)"
          style={styles.navItem}
        >
          <View style={styles.navElements}>
            <Image
              source={require("../../assets/icons/png/reihenAbstand.png")}
              style={{ height: 50, width: 50 }}
            />
            <Text style={styles.navText}>Community</Text>
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
  navMainBottom: {
    backgroundColor: "white",
    borderColor: "white",
    borderTopColor: colors.sage25,
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    height: 100,
    position: "absolute",
    bottom: 0,
  },
  navItem: {
    width: "25%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  navElements: {
    alignItems: "center",
    justifyContent: "center",
  },
  navText: {
    marginTop: 5,
  },
});

export default NavMainBottom;
