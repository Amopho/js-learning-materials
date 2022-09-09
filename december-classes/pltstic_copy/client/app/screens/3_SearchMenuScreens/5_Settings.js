import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  StatusBar,
  SafeAreaView,
  View,
  TextInput,
} from "react-native";
import colors from "../../config/colors";

const Settings = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* ----------------------------------------------------- Main Stuff */}
      <View style={styles.mainStuff}>
        {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Daten bearbeiten */}
        <View style={styles.headlineTextWrapper}>
          <Text style={styles.headline}>Daten bearbeiten</Text>
        </View>
        <TouchableHighlight
          underlayColor={colors.sage25}
          style={styles.Button}
          onPress={() =>
            navigation.navigate("GardeningTipps", {
              propOne: "propOne props",
            })
          }
        >
          <View style={styles.buttonGoTo}>
            <Text style={styles.buttonGoToText}>Persönliche Daten</Text>
            <View style={styles.leafWrapper}>
              <View style={styles.leafKL}></View>
              <View style={styles.leaf}></View>
            </View>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor={colors.sage25}
          style={styles.Button}
          onPress={() =>
            navigation.navigate("GardeningTipps", {
              propOne: "propOne props",
            })
          }
        >
          <View style={styles.topLine}>
            <View style={styles.buttonGoTo}>
              <Text style={styles.buttonGoToText}>Garten Infos</Text>
              <View style={styles.leafWrapper}>
                <View style={styles.leafKL}></View>
                <View style={styles.leaf}></View>
              </View>
            </View>
          </View>
        </TouchableHighlight>

        {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Einstellungen */}
        <View style={styles.headlineTextWrapper}>
          <Text style={styles.headline}>Einstellungen</Text>
        </View>

        <TouchableHighlight
          underlayColor={colors.sage25}
          style={styles.Button}
          onPress={() =>
            navigation.navigate("GardeningTipps", {
              propOne: "propOne props",
            })
          }
        >
          <View style={styles.buttonGoTo}>
            <Text style={styles.buttonGoToText}>Push-Benachrichtigungen</Text>
            <View style={styles.leafWrapper}>
              <View style={styles.leafKL}></View>
              <View style={styles.leaf}></View>
            </View>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor={colors.sage25}
          style={styles.Button}
          onPress={() =>
            navigation.navigate("GardeningTipps", {
              propOne: "propOne props",
            })
          }
        >
          <View style={styles.topLine}>
            <View style={styles.buttonGoTo}>
              <Text style={styles.buttonGoToText}>Datenfreigabe</Text>
              <View style={styles.leafWrapper}>
                <View style={styles.leafKL}></View>
                <View style={styles.leaf}></View>
              </View>
            </View>
          </View>
        </TouchableHighlight>
      </View>
      {/* ------------------------------------------------------ Buttons */}
      <View style={styles.buttonWrapperWrapper}>
        <View style={styles.buttonWrapper}>
          <TouchableHighlight
            underlayColor={colors.sage25}
            style={styles.signInButton}
            onPress={() => {
              navigation.navigate("Today", {
                propOne: "propOne props",
              });
            }}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Abmelden</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableHighlight
            underlayColor={colors.sage25}
            style={styles.signInButton}
            onPress={() => {
              navigation.navigate("Today", {
                propOne: "propOne props",
              });
            }}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Konto löschen</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
      <View style={styles.fussNoteWrapper}>
        <Text style={styles.fussNoteTextLove}>Made with &hearts;</Text>
        <Text style={styles.fussNoteTextCopy}>&copy; Plantastic</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.white,
    height: "100%",
  },
  // ----------------------------------------------------------------------- main Stuff
  mainStuff: {
    width: "85%",
  },
  // ------------------ Zwischentext
  headlineTextWrapper: {
    borderBottomColor: colors.sage5,
    borderBottomWidth: 2,
    borderStyle: "solid",
    marginBottom: 10,
    marginTop: 10,
  },
  headline: {
    color: colors.sage5,
    fontSize: 24,
    marginTop: 20,
    marginBottom: 13,
  },
  topLine: {
    paddingTop: 6,
    paddingBottom: 6,

    borderTopColor: colors.sage5,
    borderTopWidth: 1,
    borderStyle: "solid",
    borderBottomColor: colors.sage5,
    borderBottomWidth: 1,
    borderStyle: "solid",
  },

  Button: {
    marginBottom: 4,
  },
  buttonGoTo: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 10,
    paddingLeft: 10,
  },
  buttonGoToText: {
    color: colors.sage,
    fontSize: 25,
    marginTop: 7,
    marginBottom: 7,
  },
  leaf: {
    margin: 10,
    marginTop: 12,
    width: 15,
    height: 15,
    borderTopColor: colors.sage5,
    borderRightColor: colors.sage5,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderStyle: "solid",

    transform: [{ rotate: "45deg" }],
  },
  leafKL: {
    margin: 10,
    marginRight: -14,
    marginTop: 12,
    width: 15,
    height: 15,
    borderTopColor: colors.sage5,
    borderRightColor: colors.sage5,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderStyle: "solid",
    transform: [{ rotate: "45deg" }],
  },
  leafWrapper: {
    flexDirection: "row",
  },

  // --------------------------------------------------------------------- buttons
  buttonWrapperWrapper: { marginTop: 30 },
  buttonWrapper: {
    alignItems: "center",
    flexDirection: "column",
  },
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
  fussNoteWrapper: { marginTop: 30 },
  fussNoteTextLove: { textAlign: "center", fontSize: 14 },
  fussNoteTextCopy: { textAlign: "center", fontSize: 12 },
});

export default Settings;
