import colors from "../config/colors";
import StyleMain from "../styles/StyleMain";
import AppButton from "./AppButton";
import { StatusBar } from "expo-status-bar";
import { LocaleConfig } from "react-native-calendars";

import React, { Fragment, useEffect, useState } from "react";
import {
  Alert,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import moment from "moment";
import * as Calendar from "expo-calendar";
import * as Localization from "expo-localization";

import CalendarStrip from "react-native-calendar-strip";
// import DateTimePicker from "react-native-modal-datetime-picker";
// import { Task } from "@calendar/components";
// import { useStore } from "@calendar/store";
// import { SafeAreaView } from "react-native-safe-area-context";

const datesWhitelist = [
  {
    start: moment(),
    end: moment().add(365, "days"), // total 4 days enabled
  },
];

export default function overviewCalendar() {
  const [todoList, setTodoList] = useState([]);
  const [markedDate, setMarkedDate] = useState([]);
  const [currentDate, setCurrentDate] = useState(
    `${moment().format("YYYY")}-${moment().format("MM")}-${moment().format(
      "DD"
    )}`
  );
  const [selectedTask, setSelectedTask] = useState(null);
  const [isDateTimePickerVisible, setDateTimePickerVisible] = useState(false);

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

  const updateCurrentTask = async (currentDate) => {
    try {
      if (todo !== [] && todo) {
        const markDot = todo.map((item) => item.markedDot);
        const todoLists = todo.filter((item) => {
          if (currentDate === item.date) {
            return true;
          }
          return false;
        });
        setMarkedDate(markDot);
        if (todoLists.length !== 0) {
          setTodoList(todoLists[0].todoList);
        } else {
          setTodoList([]);
        }
      }
    } catch (error) {
      console.log("updateCurrentTask", error.message);
    }
  };

  const showDateTimePicker = () => setDateTimePickerVisible(true);

  const hideDateTimePicker = () => setDateTimePickerVisible(false);

  const handleDatePicked = (date) => {
    let prevSelectedTask = JSON.parse(JSON.stringify(selectedTask));
    const selectedDatePicked = prevSelectedTask.alarm.time;
    const hour = moment(date).hour();
    const minute = moment(date).minute();
    let newModifiedDay = moment(selectedDatePicked).hour(hour).minute(minute);
    prevSelectedTask.alarm.time = newModifiedDay;
    setSelectedTask(prevSelectedTask);
    hideDateTimePicker();
  };

  const handleAlarmSet = () => {
    let prevSelectedTask = JSON.parse(JSON.stringify(selectedTask));
    prevSelectedTask.alarm.isOn = !prevSelectedTask.alarm.isOn;
    setSelectedTask(prevSelectedTask);
  };

  const updateAlarm = async () => {
    const calendarId = await createNewCalendar();
    const event = {
      title: selectedTask.title,
      notes: selectedTask.notes,
      startDate: moment(selectedTask?.alarm.time).add(0, "m").toDate(),
      endDate: moment(selectedTask?.alarm.time).add(5, "m").toDate(),
      timeZone: Localization.timezone,
    };

    if (!selectedTask?.alarm.createEventAsyncRes) {
      try {
        const createEventAsyncRes = await Calendar.createEventAsync(
          calendarId.toString(),
          event
        );
        let updateTask = JSON.parse(JSON.stringify(selectedTask));
        updateTask.alarm.createEventAsyncRes = createEventAsyncRes;
        setSelectedTask(updateTask);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await Calendar.updateEventAsync(
          selectedTask?.alarm.createEventAsyncRes.toString(),
          event
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  const createNewCalendar = async () => {
    const newCalendar = {
      title: "Personal",
      entityType: Calendar.EntityTypes.EVENT,
      color: "#2196F3",
      sourceId: defaultCalendarSource?.sourceId || undefined,
      source: defaultCalendarSource,
      name: "internal",
      accessLevel: Calendar.CalendarAccessLevel.OWNER,
      ownerAccount: "personal",
    };

    let calendarId = null;

    try {
      calendarId = await Calendar.createCalendarAsync(newCalendar);
    } catch (e) {
      Alert.alert(e.message);
    }

    return calendarId;
  };

  return (
    <Fragment>
      {selectedTask !== null && (
        <Task {...{ setModalVisible, isModalVisible }}>
          <DateTimePicker
            isVisible={isDateTimePickerVisible}
            onConfirm={handleDatePicked}
            onCancel={hideDateTimePicker}
            mode="time"
            date={new Date()}
            isDarkModeEnabled
          />
        </Task>
      )}
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <CalendarStrip
          calendarAnimation={{ type: "sequence", duration: 30 }}
          daySelectionAnimation={{
            type: "background",
            duration: 200,
          }}
          style={{
            height: 150,
            paddingTop: 20,
            paddingBottom: 20,
          }}
          // month ++ year:
          calendarHeaderStyle={{ color: colors.sage, fontSize: 30 }}
          // numbers
          dateNumberStyle={{ color: colors.sage, fontSize: 16, paddingTop: 10 }}
          // mo di mi do fr sa so
          dateNameStyle={{ color: colors.sage, fontSize: 16 }}
          // today
          highlightDateNumberStyle={{
            color: colors.white,
            backgroundColor: colors.sage,
            marginTop: 7.5,
            height: 35,
            width: 35,
            textAlign: "center",
            borderRadius: 17.5,
            overflow: "hidden",
            paddingTop: 9.5,
            fontWeight: "400",
            fontSize: 16,
            justifyContent: "center",
            alignItems: "center",
          }}
          highlightDateNameStyle={{
            color: colors.sage,
            fontSize: 16,
            fontWeight: "bold",
          }}
          disabledDateNameStyle={{ color: colors.sage, fontSize: 16 }}
          disabledDateNumberStyle={{
            color: colors.sage,
            fontSize: 16,
            paddingTop: 10,
          }}
          datesWhitelist={datesWhitelist}
          iconLeft={require("../../assets/icons/png/leftArrow.png")}
          iconRight={require("../../assets/icons/png/rightArrow.png")}
          iconContainer={{ flex: 0.1 }}
          // If you get this error => undefined is not an object (evaluating 'datesList[_this.state.numVisibleDays - 1].date')
          // temp: https://github.com/BugiDev/react-native-calendar-strip/issues/303#issuecomment-864510769
          markedDates={markedDate}
          selectedDate={currentDate}
          onDateSelected={(date) => {
            const selectedDate = `${moment(date).format("YYYY")}-${moment(
              date
            ).format("MM")}-${moment(date).format("DD")}`;
            updateCurrentTask(selectedDate);
            setCurrentDate(selectedDate);
          }}
        />
      </SafeAreaView>
    </Fragment>
  );
}
