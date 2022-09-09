import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
} from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import colors from "../config/colors";
import MyGarden from "../screens/MyGarden";
import QuickView from "./QuickView.js";
import PlantPortrait from "./PlantPortrait";
// import Diary from "./Diary";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Task from "../components/Task";
import StylePlants from "../styles/StylePlants";

const Diary = () => {
  return (
    <SafeAreaView style={StylePlants.container}>
      <NativeRouter>
        {/* ----------------------------------------------------- Navigation Main Top */}
        <SafeAreaView style={StylePlants.navMainTop}>
          <Link
            to="/myGarden"
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
        </SafeAreaView>
        {/* --------------------------------------------------------------- Banderole */}
        <SafeAreaView style={StylePlants.banderole}>
          <Text style={StylePlants.mainText}>kurz {"&"} dreckig</Text>
        </SafeAreaView>
        {/* ----------------------------------------------------- Main Part */}

        {/* ---------------------------------------- Navigation Main Bottom */}
        <SafeAreaView style={StylePlants.navMainBottom}>
          <Link
            to="/quickView"
            underlayColor={colors.sage25}
            style={StylePlants.navItem}
          >
            <View style={StylePlants.navElements}>
              <Image
                source={require("../../assets/icons/png/fork.png")}
                style={{ height: 50, width: 50, alignItems: "center" }}
              />
              <Text style={StylePlants.navText}>Kurz {"&"} dreckig</Text>
            </View>
          </Link>

          <Link
            to="/plantPortrait"
            underlayColor={colors.sage25}
            style={StylePlants.navItem}
          >
            <View style={StylePlants.navElements}>
              <Image
                source={require("../../assets/icons/png/pflanzenPortrait.png")}
                style={{ height: 50, width: 50 }}
              />
              <Text style={StylePlants.navText}>Pflanzenportrait</Text>
            </View>
          </Link>

          <Link
            to="/diary"
            underlayColor={colors.sage25}
            style={[StylePlants.navItem, StylePlants.active]}
          >
            <View style={StylePlants.navElements}>
              <Image
                source={require("../../assets/icons/png/tageBuch.png")}
                style={{ height: 50, width: 50 }}
              />
              <Text style={StylePlants.navText}>Tagebuch</Text>
            </View>
          </Link>
        </SafeAreaView>
        {/* <Route exact path="/" component={Home} /> */}
        <Route path="/quickView" component={QuickView} />
        <Route path="/plantPortrait" component={PlantPortrait} />
        {/* <Route path="/diary" component={Diary} /> */}
        <Route path="/myGarden" component={MyGarden} />
        {/* <Route path="/community" component={Community} /> */}
      </NativeRouter>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default Diary;
