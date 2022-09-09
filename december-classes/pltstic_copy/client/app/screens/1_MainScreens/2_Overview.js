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
import NumberToMonth from "../../components/NumberToMonth";
// import { StatusBar } from "expo-status-bar";

const Overview = ({ navigation }) => {
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
          backgroundColor: colors.sage5,
          position: "absolute",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View>
          <NumberToMonth />
        </View>
        {/* <View
          style={{
            flex: 1,
            width: "100%",
          }}
        >
          <Calendar />
        </View> */}
      </View>
      {/* ---------------------------------------- Main Part */}
      <View
        style={{
          width: "100%",
          marginTop: 160,
          height: 325,
          backgroundColor: colors.sage25,
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
          <MonthView />
        </View>
      </View>
      {/* ---------------------------------------- Something */}

      {/* ---------------------------------------- Something */}

      {/* ---------------------------------------- Something */}

      {/* <View style={{ marginTop: 70 }}>
        <Text>This is Overview</Text>
      </View> */}

      {/* --------------------------- Navigation Main Bottom */}
      <NavMainBottom navigation={navigation} />

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

/*

<SafeAreaView
      style={[StyleMain.container, styles.platformContainer]}
      backgroundColor="white"
    >
      ----------------------------------------------------- Navigation Main Top */
// <SafeAreaView style={StyleMain.navMainTop}>
//   <View to="/today" underlayColor="white" style={StyleMain.navTopItem}>
//     <View style={StyleMain.navTopElements}>
//       <Image
//         source={require("../../../assets/icons/png/plantastic.png")}
//         style={{
//           height: 50,
//           width: 50,
//           alignItems: "center",
//           margin: 5,
//         }}
//       />
//       <Text style={StyleMain.navTopText}>Plantastic</Text>
//     </View>
//   </View>
{
  /* ------------- SearchMenu */
}
{
  /* <View style={StyleMain.searchMenuWrapperRight}>
          <View to="/searchMenu" underlayColor="white">
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
          </View> */
}
{
  /* ------------- Add Task */
}
{
  /* <TouchableOpacity> */
}
{
  /*onPress={() => handleAddTask()}*/
}
{
  /* <View style={StyleMain.addWrapper}>
              <Text style={StyleMain.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView> */
}
{
  /* --------------------------------------------------------------- Banderole */
}
// <View
//   style={{
//     width: "100%",
//     marginTop: 70,
//     height: 150,
//     backgroundColor: colors.sage5,
//     position: "absolute",
//     textAlign: "center",
//     alignItems: "center",
//     justifyContent: "center",
//   }}
// >
//   <View
//     style={{
//       flex: 1,
//       width: "100%",
//     }}
//   >
//     <Calendar />
//   </View>
// </View>
{
  /* ----------------------------------------------------- Main Part */
}

{
  /* ---------------------------------------- Navigation Main Bottom */
}
//   <SafeAreaView style={StyleMain.navMainBottom}>
//     <View
//       to="/today"
//       underlayColor={colors.sage25}
//       style={StyleMain.navItem}
//     >
//       <View style={StyleMain.navElements}>
//         <Image
//           source={require("../../../assets/icons/png/shed.png")}
//           style={{ height: 50, width: 50, alignItems: "center" }}
//         />
//         <Text style={StyleMain.navText}>Heute</Text>
//       </View>
//     </View>

//     <View
//       to="/overview"
//       underlayColor={colors.sage25}
//       style={[StyleMain.navItem, StyleMain.active]}
//     >
//       <View style={StyleMain.navElements}>
//         <Image
//           source={require("../../../assets/icons/png/calendarView.png")}
//           style={{ height: 50, width: 50 }}
//         />
//         <Text style={StyleMain.navText}>Übersicht</Text>
//       </View>
//     </View>

//     <View
//       to="/myGarden"
//       underlayColor={colors.sage25}
//       style={StyleMain.navItem}
//     >
//       <View style={StyleMain.navElements}>
//         <Image
//           source={require("../../../assets/icons/png/meinGarten.png")}
//           style={{ height: 50, width: 50 }}
//         />
//         <Text style={StyleMain.navText}>Mein Garten</Text>
//       </View>
//     </View>

//     <View
//       to="/community"
//       underlayColor={colors.sage25}
//       style={StyleMain.navItem}
//     >
//       <View style={StyleMain.navElements}>
//         <Image
//           source={require("../../../assets/icons/png/reihenAbstand.png")}
//           style={{ height: 50, width: 50 }}
//         />
//         <Text style={StyleMain.navText}>Community</Text>
//       </View>
//     </View>
//   </SafeAreaView>

//   <StatusBar style="auto" />
// </SafeAreaView>
