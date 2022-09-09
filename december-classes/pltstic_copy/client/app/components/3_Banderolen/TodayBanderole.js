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

// For styling >>
import StyleMain from "../../styles/StyleMain";
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from "../../config/colors";

// user >>
import exampleUser from "../../../assets/jsons/exampleUser.json";

// weather imports
import useWeather from "../../components/WeatherAPI/useWeather";
import Weather from "../../components/WeatherAPI/Weather";
import Loading from "../../components/WeatherAPI/Loading";

const weatherBanderole = ({ navigation, route }) => {
  // console.log(route.params?.taskInputVisible);
  // let taskInputVis = route.params?.taskInputVisible;
  // console.log(taskInputVis);
  // console.log("<<<<<<<<<<<<<<<<<<<<<<");

  const [currentDate, setCurrentDate] = useState("");

  // const [modalVisible, setModalVisible] = useState(false);
  const [taskInputVisible, setTaskInputVisible] = useState(false);
  const [enteredTask, setEnteredTask] = useState("");
  const [allTasks, setAllTasks] = useState(exampleUser.userTasks); // start with userTasks already saved

  const weather = useWeather();
  // console.log("Look here -------------->");
  // console.log(weather);

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
  return (
    <View style={styles.banderoleStyle}>
      <TouchableHighlight
        underlayColor={colors.sage25}
        style={styles.paleButton}
        onPress={() =>
          navigation.navigate("WeatherDetail", {
            propOne: "propOne props",
          })
        }
      >
        <View style={styles.weatherBanderole}>
          {/* ------------------ user greeting area */}
          <View style={styles.userWrapper}>
            <Text style={styles.userGreeting}>
              Hej, {exampleUser.userData.username}!
            </Text>
            <Text style={{ fontSize: 16 }}>
              Heute warten {allTasks.length} Aufgaben auf dich!
            </Text>
          </View>

          {/* ------------------ weather forecast area */}
          {/* <View name="weather">
          {!weather ? <Loading /> : <Weather forecast={weather} />} */}
          {/* <Weather forecast={weather} /> */}
          {/* </View> */}
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  // ---------------------------------- Banderole

  // banderole whole thing >>
  banderoleStyle: {
    width: "100%",
    // marginTop: 90,
    height: 200,
    backgroundColor: colors.sage5,
    // position: "absolute",
    // textAlign: "center",
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "grey",
  },

  // user area inside banderole >>
  userWrapper: {
    width: "50%",
    padding: 10,
    // backgroundColor: "lightgrey",
  },
  userGreeting: {
    fontSize: 30,
    // width: " 50%",
    // alignSelf: "flex-start",
  },

  // weather inside banderole >>
  weatherBanderole: {
    // flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // alignContent: "center",
    // backgroundColor: "orange",
    // height: "100%",
  },
});

export default weatherBanderole;
