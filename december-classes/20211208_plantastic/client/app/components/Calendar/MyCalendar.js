import { Calendar, LocaleConfig } from "react-native-calendars";
import { View, ScrollView, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import colors from "../../config/colors";
import { format } from "date-fns";
import { de } from "date-fns/esm/locale";

export default function MyCalendar() {
  const [currentDate, setCurrentDate] = useState(`${year}-${monthName}-${day}`);
  const [todoList, setTodoList] = useState([]);
  const [markedDate, setMarkedDate] = useState([]);
  const date = new Date();
  let year = format(date, "yyyy", {
    awareOfUnicodeTokens: true,
    locale: de,
  });
  let monthName = format(date, "MMMM", {
    awareOfUnicodeTokens: true,
    locale: de,
  });
  let day = format(date, "d", {
    awareOfUnicodeTokens: true,
    locale: de,
  });
  let weekday = format(new Date(), "EEEE", {
    awareOfUnicodeTokens: true,
    locale: de,
  });
  LocaleConfig.locales["de"] = {
    monthNames: [
      "Januar",
      "Februar",
      "März",
      "April",
      "Mai",
      "Juni",
      "July",
      "August",
      "September",
      "Oktober",
      "November",
      "Dezember",
    ],
    monthNamesShort: [
      "Jan.",
      "Feb.",
      "Mär.",
      "Apr.",
      "Mai",
      "Jun.",
      "Jul.",
      "Aug.",
      "Sept.",
      "Okt.",
      "Nov.",
      "Dez.",
    ],
    dayNames: [
      "Sonntag",
      "Montag",
      "Dienstag",
      "Mittwoch",
      "Donnerstag",
      "Freitag",
      "Samstag",
    ],
    dayNamesShort: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
    today: "Heute",
  };
  LocaleConfig.defaultLocale = "de";
  return (
    <View
      style={{
        backgroundColor: colors.white,
        paddingTop: 0,
        flex: 1,
        fontsize: 20,
      }}
    >
      <ScrollView>
        <Calendar
          locale={{ code: "de" }}
          // Initially visible month. Default = Date()
          current={Date()}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={undefined}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={undefined}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={(day) => {
            console.log("selected day", day);
          }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={"MMM yyyy "}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={(month) => {
            console.log("month changed", month);
          }}
          // Hide month navigation arrows. Default = false
          hideArrows={false}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={false}
          // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={true}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={1}
          // Enable the option to swipe between months. Default = false
          enableSwipeMonths={true}
          //  selected date
          // selectedDate={currentDate}
          //  Collection of dates that have to be marked. Default = {}
          markedDates={{
            "2021-12-08": {
              selected: true,
              marked: true,
              selectedColor: colors.sage,
            },
            "2021-12-17": { marked: true, dotColor: colors.sage5 },
            "2021-12-18": {
              marked: true,
              dotColor: colors.sage5,
              activeOpacity: 0,
            },
            "22021-12-25": { disabled: true, disableTouchEvent: true },
          }}
        />
      </ScrollView>
    </View>
  );
}
