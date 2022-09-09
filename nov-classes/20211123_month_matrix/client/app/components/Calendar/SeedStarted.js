import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { differenceInDays } from "date-fns";
// styling
import colors from "../../config/colors";

export default function SeedStarted() {
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
      (months > 0 ? months + " month" + (months > 1 ? "s, " : ", ") : "") +
      (weeks > 0 ? weeks + " week" + (weeks > 1 ? "s, " : ", ") : "") +
      (days > 0 ? days + " day" + (days > 1 ? "s " : " ") : "")
    );
  };

  return (
    <LinearGradient
      colors={[colors.sage25, colors.white]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Text style={styles.whiteText}>Meine Pflanzen</Text>
      <Text style={styles.baseText}>Tomate "Roma"</Text>
      <Text style={styles.number}>{parseInt(germAdvanc())}%</Text>
      <Text style={styles.baseText}>Started {restDays()} ago</Text>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    fontWeight: "bold",
    fontSize: 20,
  },
  baseText: {
    fontWeight: "bold",
    fontSize: 15,
  },
  whiteText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#FFFFFF",
  },
});
