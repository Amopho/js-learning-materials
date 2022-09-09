import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
} from "react-native";

// for styling >>
import colors from "../../config/colors";
import StyleMain from "../../styles/StyleMain";

function MyGardenBanderole({ navigation }) {
  return (
    <SafeAreaView>
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
            source={require("../../../assets/icons/png/tomatoes.png")}
            style={StyleMain.navTopElementImage}
          />
          <Text style={StyleMain.nothing}>Tomaten</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
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
