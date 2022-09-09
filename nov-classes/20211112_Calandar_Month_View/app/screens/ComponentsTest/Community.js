import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
} from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import colors from "../../config/colors";
import NavMainTop from "../../components/MainComponents/NavMainTop";
import NavMainBottom from "../../components/MainComponents/NavMainBottom";
import StyleMain from "../../styles/StyleMain";

const Community = () => {
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
  return (
    <SafeAreaView style={StyleMain.container}>
      <NavMainTop />
      <NavMainBottom />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemThree: { backgroundColor: colors.sage25 },
});
export default Community;
