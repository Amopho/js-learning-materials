import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { differenceInDays } from "date-fns";
// styling
import colors from "../../config/colors";

export default function SeedStarted({ navigation }) {
  const ShowCurrentDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    return year + "," + month + "," + date;
  };
  // axios fetching starting date from user's plant database
  const startDate = new Date(2021, 9, 5);
  const todaysDate = new Date();
  var resultDays = differenceInDays(todaysDate, startDate);
  var harvest = 70;

  const germAdvanc = (stageOfGrowth) => {
    var stageOfGrowth = (resultDays / harvest) * 100;
    return stageOfGrowth > 100 ? 100 : stageOfGrowth;
  };

  const restDays = (days) => {
    var resultDays = differenceInDays(todaysDate, startDate);
    var months = parseInt(resultDays / 30.5);
    var days = resultDays - months * 30.5;
    var weeks = parseInt(days / 7);
    days = parseInt(days - weeks * 7);
    return (
      (months > 0 ? months + " Monat" + (months > 1 ? "en, " : ", ") : "") +
      (weeks > 0 ? weeks + " Woche" + (weeks > 1 ? "n, " : ", ") : "") +
      (days > 0 ? days + " Tag" + (days > 1 ? "en " : " ") : "")
    );
  };

  return (
    // <LinearGradient
    //   colors={[colors.sage25, colors.white]}
    //   style={styles.container}
    //   start={{ x: 0, y: 0 }}
    //   end={{ x: 1, y: 1 }}
    // >
    <View style={styles.tomatoWrapper}>
      <View style={styles.nothing}>
        <Image
          source={require("../../../assets/icons/png/tomatoes.png")}
          style={styles.icon}
        />
      </View>
      <View style={styles.wrapper}>
        <View style={styles.baseTextWrapper}>
          <Text style={styles.baseText}>Romatomate "Ravello"</Text>
          <Text style={styles.baseText}>Gepflanzt vor {restDays()}</Text>
        </View>
        <View style={styles.percentWrapper}>
          <Text style={styles.percentText}>{parseInt(germAdvanc())}%</Text>
        </View>
      </View>
    </View>
    // </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tomatoWrapper: {
    width: "100%",
    alignSelf: "center",
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: colors.sage,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  nothing: {
    margin: 5,
  },
  icon: { height: 45, width: 45 },

  wrapper: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  baseTextWrapper: {
    justifyContent: "space-between",
  },
  baseText: {
    fontSize: 18,
  },
  percentWrapper: { justifyContent: "center", margin: 5 },
  percentText: {
    fontSize: 30,
    color: colors.sage,
  },
});
