import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  View,
  Image,
} from "react-native";

import colors from "../../config/colors";
// import Today from "../../screens/ComponentsTest/Today";
// import SearchMenu from "../../screens/SearchMenu";

import StyleMain from "../../styles/StyleMain";

function NavMainTop({ navigation }) {
  return (
    <SafeAreaView style={StyleMain.navMainTop}>
      {/* -------------------------------------------------------- Logo */}
      {/* <View style={StyleMain.navTopItem}> */}
      <View style={StyleMain.navTopElement}>
        <Image
          source={require("../../../assets/icons/png/plantastic.png")}
          style={StyleMain.navTopElementImage}
        />
        <Text style={StyleMain.navTopText}>Plantastic</Text>
      </View>
      {/* </View> */}
      {/* ---------------------------------- SearchMenu (search button) */}
      <View
        name="hamburgerMenu/searchButton"
        style={StyleMain.searchMenuWrapperRight}
      >
        <TouchableOpacity
          style={StyleMain}
          onPress={() =>
            navigation.navigate("SearchMenu", {
              propOne: "propOne props",
            })
          }
        >
          <View style={StyleMain.searchMenuWrapper}>
            <View style={StyleMain.rowSpaceBetween}>
              <View style={StyleMain.searchMenuLeaf}></View>
              <View style={StyleMain.searchMenuLeaf}></View>
            </View>

            <View style={StyleMain.rowSpaceBetween}>
              <View style={StyleMain.searchMenuLeaf}></View>
              <View style={StyleMain.searchMenuLeaf}></View>
            </View>
          </View>
        </TouchableOpacity>
        {/* ------------------------------------ Add Task (plus button) */}
        <TouchableOpacity style={StyleMain.addWrapper}>
          {/*onPress={() => handleAddTask()}*/}
          <View style={StyleMain}>
            <Text style={StyleMain.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default NavMainTop;

{
  /* <Route exact path="/" component={Home} /> */
}
{
  /* <Route path="/searchMenu" component={SearchMenu} /> */
}
{
  /* <Route path="/today" component={Today} /> */
}
