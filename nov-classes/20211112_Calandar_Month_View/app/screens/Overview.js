import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  Platform,
  StatusBar,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
} from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import colors from "../config/colors";
// import Home from "../screens/Home";
import Today from "../screens/Today";
import MyGarden from "../screens/MyGarden";
import Community from "../screens/Community";
import SearchMenu from "./SearchMenu";

import StyleMain from "../styles/StyleMain";
// imports Alina
import Calendar from "../components/OverviewCalendar";
// import NumberToMonth from "../components/NumberToMonth";
// import { StatusBar } from "expo-status-bar";

const Overview = () => {
  return (
    <SafeAreaView
      style={[StyleMain.container, styles.platformContainer]}
      backgroundColor="white"
    >
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
        <View
          style={{
            width: "100%",
            marginTop: 90,
            height: 150,
            backgroundColor: colors.sage5,
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
            <Calendar />
          </View>
        </View>
        {/* ----------------------------------------------------- Main Part */}

        {/* ---------------------------------------- Navigation Main Bottom */}
        <SafeAreaView style={StyleMain.navMainBottom}>
          <Link
            to="/today"
            underlayColor={colors.sage25}
            style={StyleMain.navItem}
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
            style={[StyleMain.navItem, StyleMain.active]}
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
export default Overview;
