import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

// for styling >>
import colors from "../../config/colors";
import StyleMain from "../../styles/StyleMain";

function MyGardenBanderole({ navigation }) {
  return (
    <TouchableOpacity
      style={StyleMain.banderole}
      onPress={() =>
        navigation.navigate("QuickView", {
          propOne: "propOne props",
        })
      }
    >
      <View style={StyleMain.nothing}>
        <Image
          source={require("../../../assets/icons/png/berries.png")}
          style={StyleMain.navTopElementImage}
        />
        <Text style={StyleMain.nothing}>Beeren</Text>
      </View>
    </TouchableOpacity>
  );
}

// const styles = StyleSheet.create({
//   banderole: {
//     marginTop: 0,
//     height: 200,
//     width: "100%",
//     backgroundColor: colors.sage5,

//     // position: "absolute",
//     // textAlign: "center",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

export default MyGardenBanderole;
