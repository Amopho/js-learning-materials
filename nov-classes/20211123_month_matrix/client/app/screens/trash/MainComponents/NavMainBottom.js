import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  Button,
} from "react-native";
import { NativeRouter, Route, Link, Switch } from "react-router-native";
import colors from "../../../config/colors";
import Today from "../NavBottomMain/Today";
import Overview from "../NavBottomMain/Overview";
import MyGarden from "../NavBottomMain/MyGarden";
import Community from "../NavBottomMain/Community";
import StyleMain from "../../../styles/StyleMain";

function NavMainBottom() {
  return (
    <NativeRouter>
      <SafeAreaView style={StyleMain.navMainBottom}>
        {/* <Button title="Heute" onPress={() => history.push("/today")} />
      <Button title="Übersicht" onPress={() => history.push("/overview")} />
      <Button title="Mein Garten" onPress={() => history.push("/myGarden")} />
      <Button title="Community" onPress={() => history.push("/community")} /> */}
        <Link
          to="/today"
          underlayColor="rgba(109, 153, 130, 0.25)"
          style={[StyleMain.navItem, styles.itemOne]}
        >
          <View style={StyleMain.navElements}>
            <Image
              source={require("../../../assets/icons/png/shed.png")}
              style={{ height: 50, width: 50, alignItems: "center" }}
            />
            <Text style={StyleMain.navText}>Heute</Text>
          </View>
        </Link>

        <Link
          to="/overview"
          underlayColor="rgba(109, 153, 130, 0.25)"
          style={[StyleMain.navItem, StyleMain.itemTwo]}
        >
          <View style={StyleMain.navElements}>
            <Image
              source={require("../../../assets/icons/png/calendarView.png")}
              style={{ height: 50, width: 50 }}
            />
            <Text style={StyleMain.navText}>Übersicht</Text>
          </View>
        </Link>

        <Link
          to="/myGarden"
          underlayColor="rgba(109, 153, 130, 0.25)"
          style={[StyleMain.navItem, styles.itemThree]}
        >
          <View style={StyleMain.navElements}>
            <Image
              source={require("../../../assets/icons/png/meinGarten.png")}
              style={{ height: 50, width: 50 }}
            />
            <Text style={StyleMain.navText}>Mein Garten</Text>
          </View>
        </Link>

        <Link
          to="/community"
          underlayColor="rgba(109, 153, 130, 0.25)"
          style={[StyleMain.navItem, StyleMain.itemFour]}
        >
          <View style={StyleMain.navElements}>
            <Image
              source={require("../../../assets/icons/png/reihenAbstand.png")}
              style={{ height: 50, width: 50 }}
            />
            <Text style={StyleMain.navText}>Community</Text>
          </View>
        </Link>
      </SafeAreaView>
      <Route path="/today" component={Today} />
      <Route path="/overview" component={Overview} />
      <Route path="/myGarden" component={MyGarden} />
      <Route path="/community" component={Community} />
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  itemOne: { backgroundColor: "white" },
  itemTwo: { backgroundColor: "white" },
  itemThree: { backgroundColor: "red" },
  itemFour: { backgroundColor: "white" },
  // navMainBottom: {
  //   backgroundColor: "white",
  //   borderColor: "white",
  //   borderTopColor: colors.sage25,
  //   borderWidth: 1,
  //   borderStyle: "solid",
  //   alignItems: "center",
  //   justifyContent: "space-around",
  //   flexDirection: "row",
  //   height: 100,
  //   position: "absolute",
  //   bottom: 0,
  // },
  // navItem: {
  //   width: "25%",
  //   height: "100%",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // navElements: {
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // navText: {
  //   marginTop: 5,
  // },
});

export default NavMainBottom;
