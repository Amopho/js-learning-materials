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

const SearchMenu = ({ navigation }) => {
  const [text, setText] = useState("");
  // const [textInput, setTextInput] = useState(); //this state always holds the text
  const submitHandler = () => {
    //runs on submit and sets the state to nothing.
    setText("");
  };
  // const changeHandler = (value) => {
  //   //grabs textinput value and puts it in state
  //   setTextInput(value);
  // };
  return (
    <SafeAreaView style={styles.container}>
      {/* ----------------------------------------------------- Search */}
      <View style={styles.search}>
        <TouchableHighlight
          underlayColor={colors.sage25}
          style={styles.ButtonSearch}
          onPress={() =>
            navigation.navigate("SearchResults", {
              propOne: "propOne props",
            })
          }
        >
          <View style={styles.buttonSearch}>
            <TextInput
              onSubmitEditing={submitHandler} //when click on "done" button on keyboard
              // onChangeText={changeHandler} //when text is changed, add it to the state.
              // value={textInput} //text inside is always the same as in our state.
              // type="text"
              style={styles.input}
              placeholder="Was suchst du?"
              onChangeText={(text) => setText(text)}
              // defaultValue={""}

              // clearButtonMode="always" >>> iOS clear Button
            />
            <View style={styles.lupeWrapper}>
              <View style={styles.lupeKL}></View>
              <View style={styles.lupe}></View>
            </View>
          </View>
        </TouchableHighlight>
      </View>
      {/* ----------------------------------------------------- Main Stuff */}
      <View style={styles.mainStuff}>
        <TouchableHighlight
          underlayColor={colors.sage25}
          style={styles.Button}
          onPress={() =>
            navigation.navigate("AllPlants", {
              propOne: "propOne props",
            })
          }
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Alle Pflanzen</Text>
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
            navigation.navigate("Blog", {
              propOne: "propOne props",
            })
          }
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Blog</Text>
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
          <View style={styles.button}>
            <Text style={styles.buttonText}>Gartentipps</Text>
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
            navigation.navigate("Settings", {
              propOne: "propOne props",
            })
          }
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Einstellungen</Text>
            <View style={styles.leafWrapper}>
              <View style={styles.leafKL}></View>
              <View style={styles.leaf}></View>
            </View>
          </View>
        </TouchableHighlight>
      </View>
      {/* ------------------------------------------------------Imprint Stuff */}
      <View style={styles.imprintStuff}>
        <TouchableHighlight
          underlayColor={colors.sage25}
          style={styles.paleButton}
          onPress={() =>
            navigation.navigate("Terms", {
              propOne: "propOne props",
            })
          }
        >
          <View style={styles.buttonPale}>
            <Text style={styles.buttonTextPale}>Datenschutzerklärung</Text>
            <View style={styles.leafWrapper}>
              <View style={styles.leafKLPale}></View>
              <View style={styles.leafPale}></View>
            </View>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor={colors.sage25}
          style={styles.paleButton}
          onPress={() =>
            navigation.navigate("Conditions", {
              propOne: "propOne props",
            })
          }
        >
          <View style={styles.buttonPale}>
            <Text style={styles.buttonTextPale}>Nutzungsbedingungen</Text>
            <View style={styles.leafWrapper}>
              <View style={styles.leafKLPale}></View>
              <View style={styles.leafPale}></View>
            </View>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor={colors.sage25}
          style={styles.paleButton}
          onPress={() =>
            navigation.navigate("Imprint", {
              propOne: "propOne props",
            })
          }
        >
          <View style={styles.buttonPale}>
            <Text style={styles.buttonTextPale}>Impressum</Text>
            <View style={styles.leafWrapper}>
              <View style={styles.leafKLPale}></View>
              <View style={styles.leafPale}></View>
            </View>
          </View>
        </TouchableHighlight>
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
  // ------------------------------------------------ Search Stuff
  search: { width: "85%", margin: 20, backgroundColor: colors.sage25 },
  input: { fontSize: 22, marginLeft: 12, width: "70%" },
  buttonSearch: { flexDirection: "row", justifyContent: "space-between" },
  lupeText: { color: colors.sage, fontSize: 25, margin: 7 },
  lupeWrapper: { flexDirection: "row", justifyContent: "space-between" },
  lupe: {
    margin: 10,
    marginTop: 25,
    width: 5,
    height: 5,
    borderTopWidth: 2,
    borderTopColor: colors.sage5,
    borderStyle: "solid",

    transform: [{ rotate: "45deg" }],
  },
  lupeKL: {
    margin: 10,

    width: 15,
    height: 15,
    borderColor: colors.sage5,
    borderRadius: 15,
    borderWidth: 2,
    marginRight: -14,
    borderStyle: "solid",

    transform: [{ rotate: "45deg" }],
  },
  // ------------------------------------------- main Stuff
  mainStuff: {
    width: "85%",
    borderTopColor: colors.sage25,
    borderTopWidth: 2,
    borderStyle: "solid",
  },
  Button: {
    borderTopColor: colors.sage25,
    borderTopWidth: 1,
    borderStyle: "solid",
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 6,
  },
  buttonText: { color: colors.sage, fontSize: 25, margin: 7 },
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
  //  ---------------------------------------------------------------- imprint Stuff
  imprintStuff: {
    width: "85%",
    borderTopColor: colors.sage25,
    borderTopWidth: 2,
    borderStyle: "solid",
  },
  paleButton: {
    borderTopColor: colors.sage25,
    borderTopWidth: 1,
    borderStyle: "solid",
  },
  buttonPale: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 6,
  },
  buttonTextPale: { color: colors.sage5, fontSize: 25, margin: 7 },
  leafWrapper: {
    flexDirection: "row",
  },

  leafPale: {
    margin: 10,
    marginTop: 12,
    width: 15,
    height: 15,
    borderTopColor: colors.sage25,
    borderRightColor: colors.sage25,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderStyle: "solid",

    transform: [{ rotate: "45deg" }],
  },
  leafKLPale: {
    margin: 10,
    marginRight: -14,
    marginTop: 12,
    width: 15,
    height: 15,
    borderTopColor: colors.sage25,
    borderRightColor: colors.sage25,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderStyle: "solid",
    transform: [{ rotate: "45deg" }],
  },
});

export default SearchMenu;
