import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import StyleMain from "../styles/StyleMain";
import { format, formatDistance, formatRelative, subDays } from "date-fns";
import { de } from "date-fns/esm/locale";

const NumberToMonth = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [currentWeekday, setCurrentWeekday] = useState("");

  useEffect(() => {
    const date = new Date();

    // let year = new Date().getFullYear(); //Current Year
    let year = format(date, "yyyy", {
      awareOfUnicodeTokens: true,
      locale: de,
    });
    // let d = new Date().getMonth(); // current Month ! starting index 0 !
    let monthName = format(date, "MMMM", {
      awareOfUnicodeTokens: true,
      locale: de,
    });
    // let day = new Date().getDay();
    let day = format(date, "d", {
      awareOfUnicodeTokens: true,
      locale: de,
    });
    // let weekday = format(new Date(), "eeee");
    let weekday = format(new Date(), "EEEE", {
      awareOfUnicodeTokens: true,
      locale: de,
    });
    //=> "Today is a Thursday"

    console.log(
      format(date, "EEEE d MMMM yyyy", {
        awareOfUnicodeTokens: true,
        locale: de,
      })
    );

    const dateWord = formatRelative(subDays(new Date(), 4), new Date(), {
      locale: de,
    });

    console.log(dateWord);

    // const formatRelativeLocale = {
    //   lastWeek: "'letzten' dddd 'um' LT",
    //   yesterday: "'gestern um' LT",
    //   today: "'heute um' LT",
    //   tomorrow: "'morgen um' LT",
    //   nextWeek: "dddd 'um' LT",
    //   other: "L LT", // Difference: Add time to the date
    // };

    // const locale = {
    //   ...de,
    //   formatRelative: (token) => formatRelativeLocale[token],
    // };

    // const text = formatRelative(date, new Date(), { locale });

    // let monthNames = [
    //   "Januar",
    //   "Februar",
    //   "März",
    //   "April",
    //   "Mai",
    //   "Juni",
    //   "Juli",
    //   "August",
    //   "September",
    //   "Oktober",
    //   "November",
    //   "Dezember",
    // ];

    // const monthName = monthNames[d];

    setCurrentDate(
      day + "." + " " + monthName + " " + year //+ " " + hours + ":" + min + ":" + sec
    );
    setCurrentWeekday(weekday);
  }, []);

  return (
    <View style={styles.dateWrapper}>
      <Text style={styles.date}>{currentWeekday || "Dienstag"}</Text>
      <Text style={styles.date}>{currentDate || "06.Dezember, 2021"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dateWrapper: {},
  date: {
    fontSize: 18,
    alignSelf: "center",
    marginHorizontal: 4,
  },
});

export default NumberToMonth;
