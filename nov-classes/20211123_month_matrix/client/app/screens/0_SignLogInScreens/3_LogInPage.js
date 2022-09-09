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
} from "react-native";

// piece components >>
import NavMainTop from "../../components/2_NavComponents/NavMainTop";
import NavMainBottom from "../../components/2_NavComponents/NavMainBottom";
import Task from "../../components/Task";
import SearchMenu from "../3_SearchMenuScreens/SearchMenu";

// for styling >>
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from "../../config/colors";
import StyleMain from "../../styles/StyleMain";

const LogIn = ({ navigation }) => {
  return (
    <SafeAreaView style={StyleMain.container}>
      <Text>Grias di</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default LogIn;
