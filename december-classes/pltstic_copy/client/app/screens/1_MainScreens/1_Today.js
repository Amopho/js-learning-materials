import React, { useState, useEffect } from "react";

import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  TouchableHighlight,
  Platform,
  TouchableOpacity,
  StatusBar,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  Button,
  FlatList,
  Modal,
  Pressable,
  Animated,
  SwipeView,
} from "react-native";
// import { StatusBar } from "expo-status-bar";

// piece components >>
import NavMainTop from "../../components/2_NavComponents/NavMainTop";
import NavMainBottom from "../../components/2_NavComponents/NavMainBottom";
// import SearchMenu from "../3_SearchMenuScreens/SearchMenu";
// import Task from "../../components/Task";
import TodayBanderole from "../../components/3_Banderolen/TodayBanderole";

// For styling >>
import StyleMain from "../../styles/StyleMain";
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from "../../config/colors";

// user >>
import exampleUser from "../../../assets/jsons/exampleUser.json";

const Today = ({ navigation, route }) => {
  // console.log(route.params?.taskInputVisible);
  // let taskInputVis = route.params?.taskInputVisible;
  // console.log(taskInputVis);
  // console.log("<<<<<<<<<<<<<<<<<<<<<<");

  const [modalVisible, setModalVisible] = useState(false);
  const [taskInputVisible, setTaskInputVisible] = useState(false);
  const [enteredTask, setEnteredTask] = useState("");
  const [allTasks, setAllTasks] = useState(exampleUser.userTasks); // start with userTasks already saved

  // entered text becomes a task as a state >>
  const taskInputHandler = (enteredText) => {
    setEnteredTask(enteredText);
  };

  // new task gets added to task list (newest in top) >>
  const addNewTaskHandler = () => {
    enteredTask.length > 1
      ? setAllTasks((tasks) => [
          { id: Math.random().toString(), value: enteredTask },
          ...tasks,
        ])
      : setEnteredTask("");
    setEnteredTask("");
  };

  // console.log("from Today: " + navigation);

  return (
    <SafeAreaView style={[StyleMain.container, styles.platformContainer]}>
      {/* ------------------------------------------------------------------------------ status bar */}

      <StatusBar style="auto" />

      {/* ------------------------------------------------------------------------------ header (top navigation) */}
      <SafeAreaView style={StyleMain.navMainTop}>
        {/* -------------------------------------------------------- Logo */}
        {/* <View style={StyleMain.navTopItem}> */}
        <View style={StyleMain.navTopElement}>
          <Image
            source={require("../../../assets/icons/png/plantastic.png")}
            style={StyleMain.navTopElementImage}
          />
          <Text style={StyleMain.navTopText}>Plantastic</Text>
        </View>
        {/* </View> */}
        {/* ---------------------------------- SearchMenu (search button) */}
        <View
          name="hamburgerMenu/searchButton"
          style={StyleMain.searchMenuWrapperRight}
        >
          <TouchableOpacity
            style={StyleMain}
            onPress={() =>
              navigation.navigate("SearchMenu", {
                propOne: "propOne props",
              })
            }
          >
            <View style={StyleMain.searchMenuWrapper}>
              <View style={StyleMain.rowSpaceBetween}>
                <View style={StyleMain.searchMenuLeaf}></View>
                <View style={StyleMain.searchMenuLeaf}></View>
              </View>

              <View style={StyleMain.rowSpaceBetween}>
                <View style={StyleMain.searchMenuLeaf}></View>
                <View style={StyleMain.searchMenuLeaf}></View>
              </View>
            </View>
          </TouchableOpacity>
          {/* ------------------------------------ Add Task/Plant (plus button) */}
          <TouchableOpacity
            style={StyleMain.addWrapper}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <View style={StyleMain}>
              <Text style={StyleMain.addText}>+</Text>
            </View>
          </TouchableOpacity>

          {/* ------------------------------------ overlay from plus button */}
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            // onRequestClose={() => {
            //   Alert.alert("Modal has been closed.");
            //   setModalVisible(!modalVisible);
            // }}
          >
            <View style={styles.modalBox}>
              <View style={styles.modalView}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Add Plant</Text>
                </Pressable>

                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    setTaskInputVisible(true);
                  }}
                >
                  <Text style={styles.textStyle}>Add Task</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
      </SafeAreaView>

      {/* ------------------------------------------------------------------------------ Banderole */}

      <TodayBanderole />

      {/* ------------------------------------------------------------------------------- Main Part */}

      {/* ------------------------------------------------------------------------------- Tasks */}
      <View style={styles.taskListArea}>
        {/* {useEffect(() => {
          // console.log("I am working here!");
          // console.log(route.params?.taskInputVisible);
          setTaskInputVisible(!taskInputVisible);
          console.log("taskinput is: " + taskInputVisible);
        }, [taskInputVis])} */}

        {taskInputVisible ? (
          <View style={styles.taskContainer}>
            <View style={styles.inputTitle}>
              <Text> Neue Aufgabe: </Text>
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Schreibe eine neue Aufgabe"
                style={styles.input}
                onChangeText={taskInputHandler}
                value={enteredTask}
                // clearButtonMode="unless-editing"
                // clearTextOnFocus={true}
                // autoFocus={true}
              />
              <Pressable
                style={[styles.addButton, styles.buttonClose]}
                onPress={() => {
                  addNewTaskHandler();
                  setTaskInputVisible(!taskInputVisible);
                }}
              >
                <Text style={styles.addText}>Adden</Text>
              </Pressable>
            </View>
          </View>
        ) : null}

        {/* --------------------------- Daily View Thingie >> NOT permanent here */}
        <TouchableHighlight
          underlayColor={colors.sage25}
          style={styles.paleButton}
          onPress={() =>
            navigation.navigate("DailyView", {
              tasks: allTasks,
            })
          }
        >
          <View style={styles.buttonPale}>
            <Text style={styles.buttonTextPale}>Siehe Andere Aufgaben</Text>
          </View>
        </TouchableHighlight>
        {/* ------------------------------------------------------------------------------- List of tasks */}
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={allTasks}
          renderItem={(itemData) => (
            <View style={styles.listItem}>
              {/* -------------- swipe function for later */}
              {/* <SwipeView onSwipedLeft={() => deleteItemById(item.id)} />
              <SwipeView
                disableSwipeToRight={false}
                renderVisibleContent={() => (
                  <View>
                    <Text style={styles.listItemText}>
                      {itemData.item.task || itemData.item.value}{" "}
                    </Text>
                  </View>
                )}
                renderRightView={() => (
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "flex-end",
                      alignItems: "center",
                      backgroundColor: "red",
                    }}
                  ></View>
                )}
                leftOpenValue={"this.leftOpenValue"}
                rightOpenValue={"this.rightOpenValue"}
                onSwipedLeft={
                  (() => alert("deleted"), this.deleteItemById(item.id))
                }
                swipeDuration={300}
                swipeToOpenPercent={40}
                disableSwipeToRight={true}
              /> */}

              <View style={styles.taskIconWrapper}>
                {/* <Text style={styles.listItemText}>icon</Text> */}
                <Image
                  source={require("../../../assets/icons/png/shovel.png")}
                  style={styles.taskIcon}
                />
              </View>
              <Text style={styles.listItemText}>
                {itemData.item.task || itemData.item.value}
              </Text>
            </View>
          )}
          style={styles.flatlist}
        />
      </View>

      {/* ------------------------------------------------------------------------------- Navigation Main Bottom */}
      <NavMainBottom navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // dunno what this is >>
  // platformContainer: {
  //   flex: 1,
  //   paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  // },
  // ----------------------------------Modal (triggered by plus button in top right corner)
  overlay: {
    // flex: 1,
    // height: 100,
    // width: 100,
    // backgroundColor: "red",
  },
  modalBox: {
    display: "flex",
    alignItems: "flex-end",
    // marginTop: 70,
    // borderRadius: 30,
    // backgroundColor: "blue",
  },
  modalView: {
    marginTop: 70,
    backgroundColor: "white",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    width: 150,
    margin: 27,
    borderBottomRightRadius: 25,
    borderTopLeftRadius: 25,
    padding: 10,
    elevation: 2,
  },
  // buttonOpen: {
  //   backgroundColor: colors.sage25,
  // },
  buttonClose: {
    backgroundColor: colors.sage5,
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 17,
  },
  // modalText: {
  //   marginBottom: 15,
  //   textAlign: "center",
  // },

  // ----------------------------------Tasks
  // tasks whole thing >>
  taskListArea: {
    // marginTop: 250,
    marginBottom: 90,
    justifyContent: "center",
    alignContent: "center",
  },
  taskContainer: {
    flexDirection: "column",
    // justifyContent: "space-between",
    // justifyContent: "center",
    // alignItems: "center",
    marginLeft: 10,
  },

  // task input box >>
  inputContainer: {
    // width: 30,
    display: "flex",
    flexDirection: "row",
    marginLeft: 10,
  },
  input: {
    justifyContent: "center",
    width: "80%",
    borderColor: colors.sage,
    borderWidth: 1,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 10,
  },

  // add task button >>
  addButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 8,
    // borderRadius: 4,
    elevation: 3,
    backgroundColor: colors.sage,
    // textAlign: "center",
    borderBottomRightRadius: 23,
    borderTopLeftRadius: 23,
    marginLeft: 8,
  },
  addText: {
    fontSize: 15,
    // lineHeight: 21,
    fontWeight: "bold",
    color: "black",
  },

  // list of tasks >>
  flatlist: {
    height: 350, // <-- pls adjust to iPhone so that it does not go below the bottom navigation
  },
  listItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 2,
    width: "95%",
    margin: 5,
    marginLeft: 10,
    backgroundColor: colors.sage25,
    borderColor: colors.sage5,
    borderWidth: 1,
    borderStyle: "solid",
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 8,
  },

  // task icon >>
  taskIconWrapper: {
    transform: [{ rotate: "90deg" }],
    // backgroundColor: "violet",
    // padding: 2,
    marginLeft: 7,
    width: 35,
    display: "flex",
    alignItems: "center",
  },
  taskIcon: {
    width: 30,
    height: 50,
    // backgroundColor: "orange",
  },

  // task text >>
  listItemText: {
    fontSize: 19,
    // textAlign: "center",
    alignSelf: "center",
    // backgroundColor: "yellow",
    marginLeft: 10,
  },

  // ---------------------------------- other tasks Daily View thingie >>
  paleButton: {
    borderTopColor: colors.sage25,
    borderTopWidth: 1,
    borderStyle: "solid",
  },
  buttonPale: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonTextPale: {
    color: colors.sage25,
    fontSize: 20,
    margin: 7,
  },
  leafWrapper: {
    flexDirection: "row",
  },
});
export default Today;
