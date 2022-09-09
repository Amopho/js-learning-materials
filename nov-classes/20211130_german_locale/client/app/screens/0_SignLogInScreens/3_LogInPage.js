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
import SearchMenu from "../3_SearchMenuScreens/SearchMenu";

// for styling >>
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from "../../config/colors";
import StyleMain from "../../styles/StyleMain";

const LogIn = ({ navigation }) => {
  const [username, onChangeUsername] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={require("../../../assets/icons/png/plantastic.png")}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>Plantastic</Text>
      </View>
      <Text style={styles.welcomeText}>Melde dich an!</Text>
      {/* --------------------------------------------- Form */}

      {/* email Address Input */}
      <View style={styles.inputField}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Deine eMail-Adresse"
        />
      </View>
      {/* Passwort Input */}
      <View style={styles.inputField}>
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Dein Passwort"
        />
      </View>

      {/* ---------------------------------------- SignIn "Button" */}
      <View style={styles.buttonWrapper}>
        <TouchableHighlight
          underlayColor={colors.sage25}
          style={styles.signInButton}
          onPress={() =>
            navigation.replace("Today", {
              propOne: "propOne props",
            })
          }
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Anmelden</Text>
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
  welcomeText: { fontSize: 30, marginBottom: 10, textAlign: "center" },
  logo: { alignItems: "center", marginBottom: 30, marginTop: -200 },
  logoImage: { width: 50, height: 50 },
  logoText: { fontSize: 20, textAlign: "center" },
  // inputs

  inputField: {
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: colors.sage,
    width: "80%",
    margin: 7,
  },
  input: { textAlign: "center", fontSize: 22, paddingTop: 5, paddingBottom: 5 },
  buttonWrapper: { alignItems: "center", flexDirection: "column" },
  button: {
    borderWidth: 1,
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
    fontSize: 40,
    textAlign: "center",
    color: colors.sage,
  },
  orText: { textAlign: "center", fontSize: 25, margin: 5 },
});
export default LogIn;
