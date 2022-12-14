import colors from "../config/colors";
import StyleMain from "../styles/StyleMain";
import AppButton from "./AppButton";
import { StatusBar } from "expo-status-bar";

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
} from "react-native";
import moment from "moment";
import * as Calendar from "expo-calendar";
import * as Localization from "expo-localization";

import CalendarStrip from "react-native-calendar-strip";
// import DateTimePicker from "react-native-modal-datetime-picker";
// import { Task } from "@calendar/components";
// import { useStore } from "@calendar/store";
import { SafeAreaView } from "react-native-safe-area-context";

const datesWhitelist = [
  {
    start: moment(),
    end: moment().add(365, "days"), // total 4 days enabled
  },
];

export default function overviewCalendar() {
  // const { updateSelectedTask, deleteSelectedTask, todo } = useStore(
  //   (state) => ({
  //     updateSelectedTask: state.updateSelectedTask,
  //     deleteSelectedTask: state.deleteSelectedTask,
  //     todo: state.todo,
  //   })
  // );

  // const [todoList, setTodoList] = useState([]);
  const [markedDate, setMarkedDate] = useState([]);
  const [currentDate, setCurrentDate] = useState(
    `${moment().format("YYYY")}-${moment().format("MM")}-${moment().format(
      "DD"
    )}`
  );
  // const [isModalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isDateTimePickerVisible, setDateTimePickerVisible] = useState(false);

  // useEffect(() => {
  //   handleDeletePreviousDayTask(todo);
  // }, [todo, currentDate]);

  // const handleDeletePreviousDayTask = async (oldTodo) => {
  //   try {
  //     if (oldTodo !== []) {
  //       const todayDate = `${moment().format("YYYY")}-${moment().format(
  //         "MM"
  //       )}-${moment().format("DD")}`;
  //       const checkDate = moment(todayDate);
  //       await oldTodo.filter((item) => {
  //         const currDate = moment(item.date);
  //         const checkedDate = checkDate.diff(currDate, "days");
  //         if (checkedDate > 0) {
  //           item.todoList.forEach(async (listValue) => {
  //             try {
  //               await Calendar.deleteEventAsync(
  //                 listValue.alarm.createEventAsyncRes.toString()
  //               );
  //             } catch (error) {
  //               console.log(error);
  //             }
  //           });
  //           return false;
  //         }
  //         return true;
  //       });

  //       // await AsyncStorage.setItem('TODO', JSON.stringify(updatedList));
  //       updateCurrentTask(currentDate);
  //     }
  //   } catch (error) {
  //     // Error retrieving data
  //   }
  // };

  // const handleModalVisible = () => {
  //   setModalVisible(!isModalVisible);
  // };

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

  // const deleteAlarm = async () => {
  //   try {
  //     if (selectedTask?.alarm.createEventAsyncRes) {
  //       await Calendar.deleteEventAsync(
  //         selectedTask?.alarm.createEventAsyncRes
  //       );
  //     }
  //     let updateTask = JSON.parse(JSON.stringify(selectedTask));
  //     updateTask.alarm.createEventAsyncRes = "";
  //     setSelectedTask(updateTask);
  //   } catch (error) {
  //     console.log("deleteAlarm", error.message);
  //   }
  // };

  // const getEvent = async () => {
  //   if (selectedTask?.alarm.createEventAsyncRes) {
  //     try {
  //       await Calendar.getEventAsync(
  //         selectedTask?.alarm.createEventAsyncRes.toString()
  //       );
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // };

  const createNewCalendar = async () => {
    // const defaultCalendarSource =
    //   Platform.OS === "ios"
    //     ? await Calendar.getDefaultCalendarAsync(Calendar.EntityTypes.EVENT)
    //     : { isLocalAccount: true, name: "Google Calendar" };

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
          {/* <View>
            <TextInput
              onChangeText={(text) => {
                let prevSelectedTask = JSON.parse(JSON.stringify(selectedTask));
                prevSelectedTask.title = text;
                setSelectedTask(prevSelectedTask);
              }}
              value={selectedTask.title}
              placeholder="What do you need to do?"
            />
            <Text
              style={{
                fontSize: 14,
                color: "#BDC6D8",
                marginVertical: 10,
              }}
            >
              Suggestion
            </Text>
            <View style={{ flexDirection: "row" }}>
              <View>
                <Text style={{ textAlign: "center", fontSize: 14 }}>
                  Read book
                </Text>
              </View>
              <View>
                <Text style={{ textAlign: "center", fontSize: 14 }}>
                  Design
                </Text>
              </View>
              <View>
                <Text style={{ textAlign: "center", fontSize: 14 }}>Learn</Text>
              </View>
            </View>
            <View />
            <View>
              <Text
                style={{
                  color: "#9CAAC4",
                  fontSize: 16,
                  fontWeight: "600",
                }}
              >
                Notes
              </Text>
              <TextInput
                style={{
                  height: 25,
                  fontSize: 19,
                  marginTop: 3,
                }}
                onChangeText={(text) => {
                  let prevSelectedTask = JSON.parse(
                    JSON.stringify(selectedTask)
                  );
                  prevSelectedTask.notes = text;
                  setSelectedTask(prevSelectedTask);
                }}
                value={selectedTask.notes}
                placeholder="Enter notes about the task."
              />
            </View>
            <View />
            <View>
              <Text
                style={{
                  color: "#9CAAC4",
                  fontSize: 16,
                  fontWeight: "600",
                }}
              >
                Times
              </Text>
              <TouchableOpacity
                onPress={() => showDateTimePicker()}
                style={{
                  height: 25,
                  marginTop: 3,
                }}
              >
                <Text style={{ fontSize: 19 }}>
                  {moment(selectedTask?.alarm?.time || moment()).format(
                    "h:mm A"
                  )}
                </Text>
              </TouchableOpacity>
            </View>
            <View />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View>
                <Text
                  style={{
                    color: "#9CAAC4",
                    fontSize: 16,
                    fontWeight: "600",
                  }}
                >
                  Alarm
                </Text>
                <View
                  style={{
                    height: 25,
                    marginTop: 3,
                  }}
                >
                  <Text style={{ fontSize: 19 }}>
                    {moment(selectedTask?.alarm?.time || moment()).format(
                      "h:mm A"
                    )}
                  </Text>
                </View>
              </View>
              <Switch
                value={selectedTask?.alarm?.isOn || false}
                onValueChange={handleAlarmSet}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            > */}
          {/* <TouchableOpacity
                onPress={async () => {
                  handleModalVisible();
                  console.log("isOn", selectedTask?.alarm.isOn);
                  if (selectedTask?.alarm.isOn) {
                    await updateAlarm();
                  } else {
                    await deleteAlarm();
                  }
                  await updateSelectedTask({
                    date: currentDate,
                    todo: selectedTask,
                  });
                  updateCurrentTask(currentDate);
                }}              >
                <Text
                  style={{
                    fontSize: 18,
                    textAlign: "center",
                    color: "#fff",
                  }}
                >
                  UPDATE
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={async () => {
                  handleModalVisible();
                  deleteAlarm();
                  await deleteSelectedTask({
                    date: currentDate,
                    todo: selectedTask,
                  });
                  updateCurrentTask(currentDate);
                }}
                style={styles.deleteButton}
              >
                <Text
                  style={{
                    fontSize: 18,
                    textAlign: "center",
                    color: "#fff",
                  }}
                >
                  DELETE
                </Text>
              </TouchableOpacity> */}
          {/* </View> */}
          {/* </View> */}
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
          calendarHeaderStyle={{ color: "#000000" }}
          dateNumberStyle={{ color: "#000000", paddingTop: 10 }}
          dateNameStyle={{ color: "#BBBBBB" }}
          highlightDateNumberStyle={{
            color: "#fff",
            backgroundColor: "#2E66E7",
            marginTop: 10,
            height: 35,
            width: 35,
            textAlign: "center",
            borderRadius: 17.5,
            overflow: "hidden",
            paddingTop: 6,
            fontWeight: "400",
            justifyContent: "center",
            alignItems: "center",
          }}
          highlightDateNameStyle={{ color: "#2E66E7" }}
          disabledDateNameStyle={{ color: "grey" }}
          disabledDateNumberStyle={{ color: "grey", paddingTop: 10 }}
          datesWhitelist={datesWhitelist}
          iconLeft={require("../../assets/icons/png/back-button.png")}
          iconRight={require("../../assets/icons/png/back-button.png")}
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
        {/* <View
          style={{
            width: "100%",
            height: Dimensions.get("window").height - 170,
          }}
        > */}
        {/* <ScrollView
            contentContainerStyle={{
              paddingBottom: 20,
            }}
          >
            {todoList.map((item) => (
              <TouchableOpacity
                onPress={() => {
                  setSelectedTask(item);
                  setModalVisible(true);
                  getEvent();
                }}
                key={item.key}
                style={styles.taskListContent}
              >
                <View
                  style={{
                    marginLeft: 13,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        height: 12,
                        width: 12,
                        borderRadius: 6,
                        backgroundColor: item.color,
                        marginRight: 8,
                      }}
                    />
                    <Text
                      style={{
                        color: "#554A4C",
                        fontSize: 20,
                        fontWeight: "700",
                      }}
                    >
                      {item.title}
                    </Text>
                  </View>
                  <View>
                    <View
                      style={{
                        flexDirection: "row",
                        marginLeft: 20,
                      }}
                    >
                      <Text
                        style={{
                          color: "#BBBBBB",
                          fontSize: 14,
                          marginRight: 5,
                        }}
                      >{`${moment(item.alarm.time).format("YYYY")}/${moment(
                        item.alarm.time
                      ).format("MM")}/${moment(item.alarm.time).format(
                        "DD"
                      )}`}</Text>
                      <Text
                        style={{
                          color: "#BBBBBB",
                          fontSize: 14,
                        }}
                      >
                        {item.notes}
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    height: 80,
                    width: 5,
                    backgroundColor: item.color,
                    borderRadius: 5,
                  }}
                />
              </TouchableOpacity>
            ))}
          </ScrollView> */}
        {/* </View> */}
      </SafeAreaView>
    </Fragment>
  );
}

// function Calendar() {
//   return (
//     <SafeAreaView style={StyleMain.container}>
//       <View style={styles.buttonsContainer}>
//         <Text style={styles.mainText}>Banderole Test</Text>
//         <AppButton title="Login" />
//         <AppButton title="Register" color="secondary" />
//       </View>
//       <StatusBar style="auto" />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   banderole: {
//     marginTop: 80,
//     height: 150,
//     width: "100%",
//     backgroundColor: colors.sage5,

//     position: "relative",
//     textAlign: "center",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   background: {
//     flex: 2,
//     justifyContent: "flex-start",
//     alignItems: "center",
//   },
// });

// export default Calendar;
