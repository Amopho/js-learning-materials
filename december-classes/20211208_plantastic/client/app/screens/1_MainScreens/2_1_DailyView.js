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

// piece components >>
import NavMainTop from "../../components/2_NavComponents/NavMainTop";
import NavMainBottom from "../../components/2_NavComponents/NavMainBottom";
import SearchMenu from "../3_SearchMenuScreens/0_SearchMenu";

// for styling >>
import StyleMain from "../../styles/StyleMain";
import colors from "../../config/colors";

// imports Alina
import Calendar from "../../components/OverviewCalendar";
import MonthView from "../../components/Calendar/MonthView";
// import NumberToMonth from "../components/NumberToMonth";
// import { StatusBar } from "expo-status-bar";

const DailyView = ({ navigation }) => {
  return (
    <SafeAreaView
      style={[StyleMain.container, styles.platformContainer]}
      backgroundColor="white"
    >
      {/* ---------------------------------------- Banderole */}
      <View
        style={{
          width: "100%",
          height: 160,
          backgroundColor: colors.white,
          borderColor: colors.white,
          borderBottomColor: colors.sage5,
          borderTopColor: colors.sage5,
          borderStyle: "solid",
          borderWidth: 2,
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
      {/* ---------------------------------------- Main Part */}
      <View
        style={{
          width: "100%",
          marginTop: 160,
          height: 325,
          backgroundColor: colors.white,
          position: "absolute",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <View
          style={{
            flex: 1,
            width: "100%",
          }}
        >
          <MonthView />
        </View> */}
      </View>
      {/* ---------------------------------------- Something */}

      {/* ---------------------------------------- Something */}

      {/* ---------------------------------------- Something */}

      {/* <View style={{ marginTop: 70 }}>
        <Text>This is Overview</Text>
      </View> */}

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
export default DailyView;
