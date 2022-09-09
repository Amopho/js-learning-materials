import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  Platform,
  StatusBar,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
} from "react-native";

// piece components >>
import NavMainTop from "../../components/2_NavComponents/NavMainTop";
import NavMainBottom from "../../components/2_NavComponents/NavMainBottom";
import SearchMenu from "../3_SearchMenuScreens/0_SearchMenu";

// for styling >>
import StyleMain from "../../styles/StyleMain";
import colors from "../../config/colors";

// imports Alina
import Weather from "../../components/WeatherAPI/Weather";
import DetailedWeather from "../../components/WeatherAPI/DetailedWeather";
import useWeather from "../../components/WeatherAPI/useWeather";
import Loading from "../../components/WeatherAPI/Loading";
import imageDictionary from "../../components/WeatherAPI/imageDictionary";
import { isSameDay, format } from "date-fns";
// import NumberToMonth from "../components/NumberToMonth";

const WeatherDetail = ({ navigation }) => {
  const weather = useWeather();

  return (
    <SafeAreaView style={StyleMain.container} backgroundColor="white">
      {/* ---------------------------------------- Banderole */}
      <View
        style={{
          width: "100%",
          backgroundColor: colors.white,
          borderColor: colors.white,
          borderBottomColor: colors.sage5,
          borderTopColor: colors.sage5,
          borderStyle: "solid",
          borderWidth: 2,
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
          <View>
            {!weather ? <Loading /> : <DetailedWeather forecast={weather} />}
          </View>
        </View>
      </View>
      {/* ---------------------------------------- Main Part */}
      {/* <View
        style={{
          width: "100%",
          marginTop: 160,
          height: 325,
          backgroundColor: colors.white,
          position: "absolute",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></View> */}
      {/* ---------------------------------------- Something */}

      {/* ---------------------------------------- Something */}

      {/* ---------------------------------------- Something */}

      {/* <View style={{ marginTop: 70 }}>
        <Text>This is Overview</Text>
      </View> */}

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  styledContainer: {
    flex: 1,
    backgroundColor: "#272343",
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
  },
});

export default WeatherDetail;
