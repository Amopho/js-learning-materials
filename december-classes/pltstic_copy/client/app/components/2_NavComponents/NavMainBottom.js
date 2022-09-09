import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Button,
} from "react-native";

// for styling
import colors from "../../config/colors";
import StyleMain from "../../styles/StyleMain";

// Note: Need to add active tab color prepared in >> StyleMain.active

function NavMainBottom({ navigation }) {
  // console.log("from navbottom: " + navigation);

  return (
    <SafeAreaView
      name="navMainBottom-container"
      style={StyleMain.navMainBottom}
    >
      {/* --------------- Today Button --------------- */}

      <TouchableHighlight
        underlayColor={colors.sage25}
        style={[StyleMain.navItem]}
        onPress={() =>
          navigation.navigate("Today", {
            propOne: "props of Today from bottom nav",
          })
        }
      >
        <View style={[StyleMain.navElement]}>
          <Image
            source={require("../../../assets/icons/png/shed.png")}
            style={StyleMain.navElementImage}
          />
          <Text style={StyleMain.navText}>Heute</Text>
        </View>
      </TouchableHighlight>

      {/* --------------- Overview Button --------------- */}

      <TouchableHighlight
        underlayColor={colors.sage25}
        style={[StyleMain.navItem]}
        onPress={() =>
          navigation.navigate("Overview", {
            propOne: "propOne props",
          })
        }
      >
        <View style={[StyleMain.navElement]}>
          <Image
            source={require("../../../assets/icons/png/calendarView.png")}
            style={StyleMain.navElementImage}
          />
          <Text style={StyleMain.navText}>Übersicht</Text>
        </View>
      </TouchableHighlight>

      {/* --------------- MyGarden Button --------------- */}

      <TouchableHighlight
        underlayColor={colors.sage25}
        style={[StyleMain.navItem]}
        onPress={() =>
          navigation.navigate("MyGarden", {
            propOne: "propOne props",
          })
        }
      >
        <View style={[StyleMain.navElement]}>
          <Image
            source={require("../../../assets/icons/png/meinGarten.png")}
            style={StyleMain.navElementImage}
          />
          <Text style={StyleMain.navText}>Mein Garten</Text>
        </View>
      </TouchableHighlight>

      {/* --------------- Community Button --------------- */}

      <TouchableHighlight
        underlayColor={colors.sage25}
        style={[StyleMain.navItem]}
        onPress={() =>
          navigation.navigate("Community", {
            propOne: "propOne props",
          })
        }
      >
        <View style={[StyleMain.navElement]}>
          <Image
            source={require("../../../assets/icons/png/reihenAbstand.png")}
            style={StyleMain.navElementImage}
          />
          <Text style={StyleMain.navText}>Community</Text>
        </View>
      </TouchableHighlight>
    </SafeAreaView>
  );
}

export default NavMainBottom;
