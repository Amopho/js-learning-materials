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
  TouchableHighlight,
} from "react-native";

// piece components >>
import NavMainTop from "../../components/2_NavComponents/NavMainTop";
import NavMainBottom from "../../components/2_NavComponents/NavMainBottom";
import Task from "../../components/Task";
import SearchMenu from "../3_SearchMenuScreens/0_SearchMenu";

// for styling >>
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from "../../config/colors";
import StyleMain from "../../styles/StyleMain";

const Landing = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcomeText}>Servas und Grias di bei</Text>
      <View style={styles.logo}>
        <Image
          source={require("../../../assets/icons/png/plantastic.png")}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>Plantastic</Text>
      </View>
      <View style={styles.buttonWrapper}>
        {/* ---------------------------------------- SignIn */}
        <TouchableHighlight
          underlayColor={colors.sage25}
          style={styles.signInButton}
          onPress={() =>
            navigation.navigate("SignIn", {
              propOne: "propOne props",
            })
          }
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Registriere dich</Text>
          </View>
        </TouchableHighlight>
        <Text style={styles.orText}>oder</Text>
        {/* --------------------------------------------LogIn */}
        <TouchableHighlight
          underlayColor={colors.sage25}
          style={styles.logInButton}
          onPress={() =>
            navigation.navigate("LogIn", {
              propOne: "propOne props",
            })
          }
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Melde dich an</Text>
          </View>
        </TouchableHighlight>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.white,
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 30,
    marginBottom: 50,
    textAlign: "center",
    marginTop: -50,
  },
  logo: { alignItems: "center", marginBottom: 30 },
  logoImage: { width: 150, height: 150 },
  logoText: { fontSize: 50, textAlign: "center" },
  buttonWrapper: { alignItems: "center", flexDirection: "column" },
  button: {
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: colors.sage,
    width: "80%",
    borderBottomRightRadius: 25,
    borderTopLeftRadius: 25,
    padding: 3,
    backgroundColor: colors.sage25,
    margin: 10,
  },
  buttonText: {
    width: 300,
    fontSize: 30,
    textAlign: "center",
    color: colors.sage,
    padding: 8,
  },
  orText: { textAlign: "center", fontSize: 25, margin: 5 },
});
export default Landing;
