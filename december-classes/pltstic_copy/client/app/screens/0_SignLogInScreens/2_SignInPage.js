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

// data processing >>
import axios from "axios";

// GET
// function Test() {
//   axios({
//     method: "get",
//     url: "https://plantastic-backend-heroku.herokuapp.com/",
//   })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));
// }
// Test();

const SignIn = ({ navigation }) => {
  const [username, onChangeUsername] = useState("");
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  const [showError, setShowError] = useState(false);

  // POST
  function SendRegisterData() {
    // console.log(username, email, password);
    axios({
      method: "post",
      url: "https://plantastic-backend-heroku.herokuapp.com/auth/register",
      data: {
        email: email,
        password: password,
        name: username,
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
        setShowError(true);
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      {showError && (
        <View>
          <Text>Ooops, something went wrong!</Text>
        </View>
      )}

      <View style={styles.logo}>
        <Image
          source={require("../../../assets/icons/png/plantastic.png")}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>Plantastic</Text>
      </View>
      <Text style={styles.welcomeText}>Registriere Dich!</Text>
      {/* --------------------------------------------- Form */}

      {/* Username Input */}
      <View style={styles.inputField}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeUsername}
          value={username}
          placeholder="Gib einen Benutzernamen ein!"
        />
      </View>
      {/* email Address Input */}
      <View style={styles.inputField}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Wir brauchen deine eMail Adresse"
        />
      </View>
      {/* Passwort Input */}
      <View style={styles.inputField}>
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="und ein starkes Passwort"
          // secureTextEntry={true}
          // onSubmitEditing={Keyboard.dismiss}
        />
      </View>

      {/* ---------------------------------------- SignIn "Button" */}
      <View style={styles.buttonWrapper}>
        <TouchableHighlight
          underlayColor={colors.sage25}
          style={styles.signInButton}
          onPress={() => {
            navigation.navigate("Today", {
              propOne: "propOne props",
            });
            console.log(username);
            console.log(password);
            SendRegisterData();
          }}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
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
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: colors.sage,
    width: "80%",
    margin: 7,
  },
  input: { textAlign: "center", fontSize: 22, paddingTop: 5, paddingBottom: 5 },
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
    fontSize: 40,
    textAlign: "center",
    color: colors.sage,
  },
  orText: { textAlign: "center", fontSize: 25, margin: 5 },
});
export default SignIn;
