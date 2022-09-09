import { Calendar } from "react-native-calendars";
import { View } from "react-native";
import React from "react";
import colors from "../../config/colors";

export default class Example extends React.Component {
  render() {
    return (
      <View style={{ paddingTop: 5, flex: 1 }}>
        <Calendar
          // Initially visible month. Default = Date()
          current={Date()}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={"2021-11-10"}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={undefined}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={(day) => {
            console.log("selected day", day);
          }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={"yyyy MMM"}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={(month) => {
            console.log("month changed", month);
          }}
          // Hide month navigation arrows. Default = false
          hideArrows={false}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={true}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={1}
          // Enable the option to swipe between months. Default = false
          enableSwipeMonths={true}
          //  Collection of dates that have to be marked. Default = {}
          markedDates={{
            "2021-11-24": {
              selected: true,
              marked: true,
              selectedColor: colors.sage,
            },
            "2021-11-17": { marked: true, dotColor: colors.sage5 },
            "2021-11-18": {
              marked: true,
              dotColor: colors.sage5,
              activeOpacity: 0,
            },
            "22021-11-25": { disabled: true, disableTouchEvent: true },
          }}
        />
      </View>
    );
  }
}
