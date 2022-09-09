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
  Button,
  FlatList,
  TextInput,
  VirtualizedList,
} from "react-native";
// import { NativeRouter, Route, Link } from "react-router-native";
import colors from "../config/colors";
// import Home from "../screens/Home";
// import Today from "../screens/Today";
// import Overview from "../screens/Overview";
// import MyGarden from "../screens/MyGarden";
// import Community from "../screens/Community";
// import SearchMenu from "./SearchMenu";
// import { Colors } from "react-native/Libraries/NewAppScreen";
// import Task from "../components/Task";
import StyleMain from "../styles/StyleMain";
// import { StatusBar } from "expo-status-bar";

const Today = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    // var hours = new Date().getHours(); //Current Hours
    // var min = new Date().getMinutes(); //Current Minutes
    // var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      date + "/" + month + "/" + year //+ " " + hours + ":" + min + ":" + sec
    );
  }, []);

  // added by Vivi start -------------------

  const [enteredTask, setEnteredTask] = useState("");
  const [AllTasks, setAllTasks] = useState([]);

  // entered text becomes a task as a state >>
  const taskInputHandler = (enteredText) => {
    setEnteredTask(enteredText);
  };

  // new task gets added to task list (newest in top) >>
  const addNewTaskHandler = () => {
    setAllTasks((tasks) => [
      { id: Math.random().toString(), value: enteredTask },
      ...tasks,
    ]);
  };

  // added by Vivi end -------------------

  return (
    <SafeAreaView style={[StyleMain.container, styles.platformContainer]}>
      {/* <NativeRouter> */}
      {/* ----------------------------------------------------- Navigation Main Top */}
      <SafeAreaView style={StyleMain.navMainTop}>
        <View to="/today" underlayColor="white" style={StyleMain.navTopItem}>
          <View style={StyleMain.navTopElements}>
            <Image
              source={require("../../assets/icons/png/plantastic.png")}
              style={{
                height: 50,
                width: 50,
                alignItems: "center",
                margin: 5,
              }}
            />
            <Text style={StyleMain.navTopText}>Plantastic</Text>
          </View>
        </View>
        {/* ------------- SearchMenu */}
        <View style={StyleMain.searchMenuWrapperRight}>
          <View to="/searchMenu" underlayColor="white">
            <SafeAreaView style={StyleMain.searchMenuWrapper}>
              <View style={StyleMain.searchMenuWrapperFirstRow}>
                <View style={StyleMain.searchMenuItem}></View>
                <View style={StyleMain.searchMenuItem}></View>
              </View>

              <View style={StyleMain.searchMenuWrapperSecondRow}>
                <View style={StyleMain.searchMenuItem}></View>
                <View style={StyleMain.searchMenuItem}></View>
              </View>
            </SafeAreaView>
          </View>
          {/* ------------- Add Task */}
          <TouchableOpacity>
            {/*onPress={() => handleAddTask()}*/}
            <View style={StyleMain.addWrapper}>
              <Text style={StyleMain.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {/* --------------------------------------------------------------- Banderole */}
      <SafeAreaView style={StyleMain.banderole}>
        <Text style={StyleMain.mainText}>
          This is today {"\n"}
          {currentDate}
        </Text>
      </SafeAreaView>
      {/* ----------------------------------------------------- Main Part */}
      {/* Added by Vivi start ------------------- */}
      <View style={styles.taskListArea}>
        <View style={styles.inputContainer}>
          <Text>Task: </Text>
          <TextInput
            placeholder="Enter new task here"
            style={styles.input}
            onChangeText={taskInputHandler}
            value={enteredTask}
          />
          <Button title="Add Task" onPress={addNewTaskHandler} />
        </View>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={AllTasks}
          renderItem={(itemData) => (
            <View style={styles.listItem}>
              <Text>{itemData.item.value}</Text>
            </View>
          )}
        />
      </View>
      {/* Added by Vivi end ------------------- */}
      {/* ---------------------------------------- Navigation Main Bottom */}
      <SafeAreaView style={StyleMain.navMainBottom}>
        <View
          to="/today"
          underlayColor={colors.sage25}
          style={[StyleMain.navItem, StyleMain.active]}
        >
          <View style={StyleMain.navElements}>
            <Image
              source={require("../../assets/icons/png/shed.png")}
              style={{ height: 50, width: 50, alignItems: "center" }}
            />
            <Text style={StyleMain.navText}>Heute</Text>
          </View>
        </View>

        <View
          to="/overview"
          underlayColor={colors.sage25}
          style={StyleMain.navItem}
        >
          <View style={StyleMain.navElements}>
            <Image
              source={require("../../assets/icons/png/calendarView.png")}
              style={{ height: 50, width: 50 }}
            />
            <Text style={StyleMain.navText}>Übersicht</Text>
          </View>
        </View>

        <View
          to="/myGarden"
          underlayColor={colors.sage25}
          style={StyleMain.navItem}
        >
          <View style={StyleMain.navElements}>
            <Image
              source={require("../../assets/icons/png/meinGarten.png")}
              style={{ height: 50, width: 50 }}
            />
            <Text style={StyleMain.navText}>Mein Garten</Text>
          </View>
        </View>

        <View
          to="/community"
          underlayColor={colors.sage25}
          style={StyleMain.navItem}
        >
          <View style={StyleMain.navElements}>
            <Image
              source={require("../../assets/icons/png/reihenAbstand.png")}
              style={{ height: 50, width: 50 }}
            />
            <Text style={StyleMain.navText}>Community</Text>
          </View>
        </View>
      </SafeAreaView>
      {/* <Route exact path="/" component={Home} /> */}
      {/* <Route path="/searchMenu" component={SearchMenu} />
        <Route path="/today" component={Today} />
        <Route path="/overview" component={Overview} />
        <Route path="/myGarden" component={MyGarden} />
        <Route path="/community" component={Community} /> */}
      {/* </NativeRouter> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // platformContainer: {
  //   flex: 1,
  //   paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  // },

  // added by Vivi start -------------------
  taskListArea: {
    marginTop: 250,
    marginBottom: 90,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
  listItem: {
    padding: 10,
    marginVertical: 8,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
  // added by Vivi end -------------------
});
export default Today;
