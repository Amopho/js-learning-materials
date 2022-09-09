import React from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TextInput,
  SafeAreaView,
  View,
  Image,
  ScrollView,
} from "react-native";
import colors from "../../config/colors";
import StyleMain from "../../styles/StyleMain";

const SearchResults = () => {
  const [text, onChangeText] = React.useState("");
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.wrapper}>
          <Text style={styles.text}>
            Wir haben leider nüscht passendes gefunden
          </Text>
          <Image
            source={require("../../../assets/icons/png/deadStar.png")}
            style={StyleMain.navElementImage}
          />
          <Text style={styles.cta}>Willste was anderes suchen?</Text>
        </View>
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
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Was anderes suchen!"
              />
              <View style={styles.lupeWrapper}>
                <View style={styles.lupeKL}></View>
                <View style={styles.lupe}></View>
              </View>
            </View>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.white,
    height: "100%",
    justifyContent: "center",
    flex: 1,
  },
  wrapper: { alignItems: "center", justifyContent: "center", marginTop: 30 },
  text: { margin: 10 },
  cta: { fontSize: 18, margin: 10 },
  search: { width: "90%", margin: 20, backgroundColor: colors.sage25 },
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
});

export default SearchResults;
