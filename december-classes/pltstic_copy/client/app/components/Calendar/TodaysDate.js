import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";

const TodaysDate = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    let year = new Date().getFullYear(); //Current Year
    let m = new Date().getMonth(); // current Month ! starting index 0 !
    let d = new Date().getDate();

    let monthNames = [
      "Januar",
      "Februar",
      "März",
      "April",
      "Mai",
      "Juni",
      "Juli",
      "August",
      "September",
      "Oktober",
      "November",
      "Dezember",
    ];

    const monthName = monthNames[m];

    setCurrentDate(
      d + ". " + monthName + " " + year //+ " " + hours + ":" + min + ":" + sec
    );
  }, []);

  return (
    <View>
      <Text style={styles.date}>{currentDate}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  date: { fontSize: 20, alignSelf: "flex-end", marginTop: 4 },
});

export default TodaysDate;
