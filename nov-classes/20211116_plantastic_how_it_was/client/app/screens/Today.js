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
import { NativeRouter, Route, Link } from "react-router-native";
import colors from "../config/colors";
// import Home from "../screens/Home";
// import Today from "../screens/Today";
import Overview from "../screens/Overview";
import MyGarden from "../screens/MyGarden";
import Community from "../screens/Community";
import SearchMenu from "./SearchMenu";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Task from "../components/Task";
import StyleMain from "../styles/StyleMain";
// import { StatusBar } from "expo-status-bar";

const Today = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    // var hours = new Date().getHours(); //Current Hours
    // var min = new Date().getMinutes(); //Current Minutes
    // var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      date + "/" + month + "/" + year //+ " " + hours + ":" + min + ":" + sec
    );
  }, []);
  return (
    <SafeAreaView style={[StyleMain.container, styles.platformContainer]}>
      <NativeRouter>
        {/* ----------------------------------------------------- Navigation Main Top */}
        <SafeAreaView style={StyleMain.navMainTop}>
          <Link to="/today" underlayColor="white" style={StyleMain.navTopItem}>
            <View style={StyleMain.navTopElements}>
              <Image
                source={require("../../assets/icons/png/plantastic.png")}
                style={{
                  height: 50,
                  width: 50,
                  alignItems: "center",
                  margin: 5,
                }}
              />
              <Text style={StyleMain.navTopText}>Plantastic</Text>
            </View>
          </Link>
          {/* ------------- SearchMenu */}
          <View style={StyleMain.searchMenuWrapperRight}>
            <Link to="/searchMenu" underlayColor="white">
              <SafeAreaView style={StyleMain.searchMenuWrapper}>
                <View style={StyleMain.searchMenuWrapperFirstRow}>
                  <View style={StyleMain.searchMenuItem}></View>
                  <View style={StyleMain.searchMenuItem}></View>
                </View>

                <View style={StyleMain.searchMenuWrapperSecondRow}>
                  <View style={StyleMain.searchMenuItem}></View>
                  <View style={StyleMain.searchMenuItem}></View>
                </View>
              </SafeAreaView>
            </Link>
            {/* ------------- Add Task */}
            <TouchableOpacity>
              {/*onPress={() => handleAddTask()}*/}
              <View style={StyleMain.addWrapper}>
                <Text style={StyleMain.addText}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        {/* --------------------------------------------------------------- Banderole */}
        <SafeAreaView style={StyleMain.banderole}>
          <Text style={StyleMain.mainText}>
            This is today {"\n"}
            {currentDate}
          </Text>
        </SafeAreaView>
        {/* ----------------------------------------------------- Main Part */}

        {/* ---------------------------------------- Navigation Main Bottom */}
        <SafeAreaView style={StyleMain.navMainBottom}>
          <Link
            to="/today"
            underlayColor={colors.sage25}
            style={[StyleMain.navItem, StyleMain.active]}
          >
            <View style={StyleMain.navElements}>
              <Image
                source={require("../../assets/icons/png/shed.png")}
                style={{ height: 50, width: 50, alignItems: "center" }}
              />
              <Text style={StyleMain.navText}>Heute</Text>
            </View>
          </Link>

          <Link
            to="/overview"
            underlayColor={colors.sage25}
            style={StyleMain.navItem}
          >
            <View style={StyleMain.navElements}>
              <Image
                source={require("../../assets/icons/png/calendarView.png")}
                style={{ height: 50, width: 50 }}
              />
              <Text style={StyleMain.navText}>Übersicht</Text>
            </View>
          </Link>

          <Link
            to="/myGarden"
            underlayColor={colors.sage25}
            style={StyleMain.navItem}
          >
            <View style={StyleMain.navElements}>
              <Image
                source={require("../../assets/icons/png/meinGarten.png")}
                style={{ height: 50, width: 50 }}
              />
              <Text style={StyleMain.navText}>Mein Garten</Text>
            </View>
          </Link>

          <Link
            to="/community"
            underlayColor={colors.sage25}
            style={StyleMain.navItem}
          >
            <View style={StyleMain.navElements}>
              <Image
                source={require("../../assets/icons/png/reihenAbstand.png")}
                style={{ height: 50, width: 50 }}
              />
              <Text style={StyleMain.navText}>Community</Text>
            </View>
          </Link>
        </SafeAreaView>
        {/* <Route exact path="/" component={Home} /> */}
        <Route path="/searchMenu" component={SearchMenu} />
        <Route path="/today" component={Today} />
        <Route path="/overview" component={Overview} />
        <Route path="/myGarden" component={MyGarden} />
        <Route path="/community" component={Community} />
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
});
export default Today;
