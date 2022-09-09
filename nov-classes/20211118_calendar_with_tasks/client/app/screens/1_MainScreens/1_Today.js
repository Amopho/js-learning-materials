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
  TextInput,
  Button,
  FlatList,
} from "react-native";
// import { StatusBar } from "expo-status-bar";

// piece components >>
import NavMainTop from "../../components/2_NavComponents/NavMainTop";
import NavMainBottom from "../../components/2_NavComponents/NavMainBottom";
// import SearchMenu from "../3_SearchMenuScreens/SearchMenu";
// import Task from "../../components/Task";

// For styling >>
import StyleMain from "../../styles/StyleMain";
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from "../../config/colors";

// weather imports
import useWeather from "../../components/WeatherAPI/useWeather";
import Weather from "../../components/WeatherAPI/Weather";
import Loading from "../../components/WeatherAPI/Loading";

const Today = ({ navigation, route }) => {
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

  // console.log("from Today: " + navigation);

  // added by Vivi end -------------------
  const weather = useWeather();

  return (
    <SafeAreaView style={[StyleMain.container, styles.platformContainer]}>
      {/* -------------------------------------- Banderole */}
      <View
        style={{
          width: "100%",
          marginTop: 90,
          height: 150,
          backgroundColor: colors.sage5,
          position: "absolute",
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
          {/* <Text style={StyleMain.addText}>
              This is today {"\n"} {currentDate}
            </Text> */}
          <View>
            {!weather ? <Loading /> : <Weather forecast={weather} />}
            {/* <Weather forecast={weather} /> */}
          </View>
        </View>
      </View>

      {/* -------------------------------------- Main Part */}

      <View style={{ marginTop: 70 }}>
        <Text>This is TODAY</Text>
      </View>

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

      {/* -------------------------------------- Something */}

      {/*--------------------------------------- Something */}

      {/* ------------------------- Navigation Main Bottom */}
      <NavMainBottom navigation={navigation} />
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

// Unused parts for right now:

// import Today from "../screens/Today";
// import Overview from "./Overview";
// import MyGarden from "./MyGarden";
// import Community from "./Community";

// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// const Stack = createNativeStackNavigator();

{
  /* ------------------- Navigation Main Top */
}
// <SafeAreaView style={StyleMain.navMainTop}>
{
  /*  <Link to="/today" underlayColor="white" style={StyleMain.navTopItem}>*/
}
{
  /* <View style={StyleMain.navTopElements}>
          <Image
            source={require("../../../assets/icons/png/plantastic.png")}
            style={{
              height: 50,
              width: 50,
              alignItems: "center",
              margin: 5,
            }}
          />
          <Text style={StyleMain.navTopText}>Plantastic</Text>
        </View> */
}
{
  /* </Link> */
}
{
  /* ------------- SearchMenu */
}
{
  /* <View style={StyleMain.searchMenuWrapperRight}> */
}
{
  /*  <Link to="/searchMenu" underlayColor="white">*/
}
{
  /* <SafeAreaView style={StyleMain.searchMenuWrapper}>
  
          <View style={StyleMain.searchMenuWrapperFirstRow}>
            <View style={StyleMain.searchMenuItem}></View>
            <View style={StyleMain.searchMenuItem}></View>
          </View>

          <View style={StyleMain.searchMenuWrapperSecondRow}>
            <View style={StyleMain.searchMenuItem}></View>
            <View style={StyleMain.searchMenuItem}></View>
          </View>
        </SafeAreaView> */
}
{
  /*  </Link> */
}
{
  /* ------------- Add Task */
}
{
  /* <TouchableOpacity> */
}
{
  /*onPress={() => handleAddTask()}*/
}
{
  /* <View style={StyleMain.addWrapper}>
                <Text style={StyleMain.addText}>+</Text>
              </View>
            </TouchableOpacity>
          </View>*/
}
{
  /* </SafeAreaView> */
}
{
  /* ---------------------------------------- Navigation Main Bottom */
}
{
  /* <SafeAreaView style={StyleMain.navMainBottom}>
          <Link
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
          </Link>

          <Link
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
          </Link>

          <Link
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
          </Link>

          <Link
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
          </Link>
        </SafeAreaView> */
}

{
  /* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Today"
            component={Today}
            options={{ title: "Welcome, username", prop: "props" }}
          />
          <Stack.Screen
            name="Monthly overview"
            component={Overview}
            options={{ title: "Monatsübersicht" }}
          />
          <Stack.Screen
            name="My Garden"
            component={MyGarden}
            options={{ title: "Mein Garten" }}
          />
          <Stack.Screen
            name="My Community"
            component={Community}
            options={{ title: "Mein Gartenverein" }}
          />
        </Stack.Navigator>
      </NavigationContainer> */
}
