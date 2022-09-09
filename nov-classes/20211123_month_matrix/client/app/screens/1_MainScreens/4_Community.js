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

// piece components >>
import NavMainTop from "../../components/2_NavComponents/NavMainTop";
import NavMainBottom from "../../components/2_NavComponents/NavMainBottom";
import Task from "../../components/Task";
import SearchMenu from "../3_SearchMenuScreens/SearchMenu";

// for styling >>
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from "../../config/colors";
import StyleMain from "../../styles/StyleMain";

const Community = ({ navigation }) => {
  return (
    <SafeAreaView style={StyleMain.container}>
      {/* ----------------------------------------------------- Banderole */}
      <SafeAreaView style={StyleMain.banderole}>
        <Text style={StyleMain.mainText}>Community</Text>
      </SafeAreaView>

      {/* ----------------------------------------------------- Main Part */}
      {/* <View style={StyleMain.quick}>
        <Text style={StyleMain.mainText}>
          <View style={StyleMain.quick}>
            <View underlayColor={colors.sage25} style={StyleMain}>
              <View style={StyleMain}>
                <Image
                  source={require("../../../assets/icons/png/berries.png")}
                  style={{ height: 50, width: 50, alignItems: "center" }}
                />
                <Text style={StyleMain}>Beeren</Text>
              </View>
            </View>
          </View>
        </Text>
      </View> */}
      {/* ---------------------------------------- Navigation Main Bottom */}

      <NavMainBottom navigation={navigation} />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Community;

// unused stuff >

// const styles = StyleSheet.create({
//   // platformContainer: {
//   //   flex: 1,
//   //   paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//   // },
// });

{
  /* <SafeAreaView style={StyleMain.navMainTop}>
  <View to="/today" underlayColor="white" style={StyleMain.navTopItem}>
    <View style={StyleMain.navTopElements}>
      <Image
        source={require("../../../assets/icons/png/plantastic.png")}
        style={{
          height: 50,
          width: 50,
          alignItems: "center",
          margin: 5,
        }}
      />
      <Text style={StyleMain.navTopText}>Plantastic</Text>
    </View>
  </View> */
}
{
  /* ------------- SearchMenu */
}
// <View style={StyleMain.searchMenuWrapperRight}>
//   <View to="/searchMenu" underlayColor="white">
//     <SafeAreaView style={StyleMain.searchMenuWrapper}>
//       <View style={StyleMain.searchMenuWrapperFirstRow}>
//         <View style={StyleMain.searchMenuItem}></View>
//         <View style={StyleMain.searchMenuItem}></View>
//       </View>

//       <View style={StyleMain.searchMenuWrapperSecondRow}>
//         <View style={StyleMain.searchMenuItem}></View>
//         <View style={StyleMain.searchMenuItem}></View>
//       </View>
//     </SafeAreaView>
//   </View>
{
  /* ------------- Add Task */
}
// <TouchableOpacity>
{
  /*onPress={() => handleAddTask()}*/
}
//       <View style={StyleMain.addWrapper}>
//         <Text style={StyleMain.addText}>+</Text>
//       </View>
//     </TouchableOpacity>
//   </View>
// </SafeAreaView>
