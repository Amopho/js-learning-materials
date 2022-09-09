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
  FlatList,
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

const DailyView = ({ navigation, route }) => {
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
          // position: "absolute",
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

        {/* useEffect(() => {
    if (route.params?.tasks) {
      console.log(route.params?.tasks)
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.tasks]); */}

        <FlatList
          keyExtractor={(item, index) => item.id}
          data={route.params?.tasks}
          renderItem={(itemData) => (
            <View style={styles.listItem}>
              <View style={styles.taskIconWrapper}>
                {/* <Text style={styles.listItemText}>icon</Text> */}
                <Image
                  source={require("../../../assets/icons/png/shovel.png")}
                  style={styles.taskIcon}
                />
              </View>
              <Text style={styles.listItemText}>
                {itemData.item.task || itemData.item.value}
              </Text>
            </View>
          )}
          style={styles.flatlist}
        />
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
  // list of tasks
  flatlist: {
    height: 350,
  },
  listItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 2,
    width: "95%",
    margin: 5,
    marginLeft: 10,
    backgroundColor: colors.sage25,
    borderColor: colors.sage5,
    borderWidth: 1,
    borderStyle: "solid",
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  taskIconWrapper: {
    transform: [{ rotate: "90deg" }],
    // backgroundColor: "violet",
    // padding: 2,
    marginLeft: 7,
    width: 35,
    display: "flex",
    alignItems: "center",
  },
  taskIcon: {
    width: 30,
    height: 50,
    // backgroundColor: "orange",
  },
  listItemText: {
    fontSize: 19,
    // textAlign: "center",
    alignSelf: "center",
    // backgroundColor: "yellow",
    marginLeft: 10,
  },
});
export default DailyView;
