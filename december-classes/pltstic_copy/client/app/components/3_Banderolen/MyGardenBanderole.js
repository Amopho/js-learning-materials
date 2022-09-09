import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
  DatePickerAndroid,
} from "react-native";

// for styling >>
import colors from "../../config/colors";
import StyleMain from "../../styles/StyleMain";

function MyGardenBanderole({ navigation }) {
  return (
    <SafeAreaView>
      <View style={StyleMain.banderole}>
        <View style={styles.texts}>
          <Text style={styles.textB}>410m² Kleingarten im</Text>
          <Text style={styles.textG}>"KGV Einigkeit"</Text>
        </View>
        <View style={styles.icons}>
          {/* Gemüse */}
          <View style={styles.iconWrapper}>
            <Image
              source={require("../../../assets/icons/png/vegetable.png")}
              style={styles.icon}
            />
            <Text style={styles.iconText}>1</Text>
          </View>
          {/* Beeren */}
          <View style={styles.iconWrapper}>
            <Image
              source={require("../../../assets/icons/png/berries.png")}
              style={styles.icon}
            />
            <Text style={styles.iconText}>0</Text>
          </View>
          {/* Obst */}
          <View style={styles.iconWrapper}>
            <Image
              source={require("../../../assets/icons/png/fruits.png")}
              style={styles.icon}
            />
            <Text style={styles.iconText}>0</Text>
          </View>
          {/* Kräuter */}
          <View style={styles.iconWrapper}>
            <Image
              source={require("../../../assets/icons/png/herbs.png")}
              style={styles.icon}
            />
            <Text style={styles.iconText}>0</Text>
          </View>
          {/*Blumen  */}
          <View style={styles.iconWrapper}>
            <Image
              source={require("../../../assets/icons/png/flower.png")}
              style={styles.icon}
            />
            <Text style={styles.iconText}>0</Text>
          </View>
        </View>
        <View style={styles.zusammenfassung}>
          <Text style={styles.textNum}>keine </Text>
          <Text style={styles.textBushes}>Halb- und Sträucher </Text>
          <Text style={styles.textNum}>keine </Text>
          <Text style={styles.textTrees}>Bäume </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  icons: {
    paddingHorizontal: 30,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    // borderColor: "pink",
    // borderWidth: 2,
    // borderStyle: "solid",
  },
  iconWrapper: {},
  icon: { height: 35, width: 35 },

  iconText: {
    textAlign: "center",
    fontSize: 20,
    color: colors.sage,
    marginTop: 5,
  },
  texts: {
    paddingHorizontal: 30,
    marginBottom: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  textB: { fontSize: 22 },
  textG: { fontSize: 22, color: colors.sage },
  zusammenfassung: {
    paddingHorizontal: 20,
    marginTop: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  textPlants: {},
  textBushes: {},
  textTrees: {},
  textNum: { color: colors.sage },
});

export default MyGardenBanderole;
