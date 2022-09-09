import colors from "../../config/colors";
import StyleMain from "../../styles/StyleMain";
import AppButton from "../AppButton";
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
  SafeAreaView,
} from "react-native";
import moment from "moment";
import * as Calendar from "expo-calendar";
import * as Localization from "expo-localization";

import CalendarStrip from "react-native-calendar-strip";
import MyCalendar from "./MyCalendar";

export default function overviewCalendar() {
  return (
    <Fragment>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <MyCalendar />
      </SafeAreaView>
    </Fragment>
  );
}
