import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  View,
  Image,
  Modal,
  Pressable,
} from "react-native";

import colors from "../../config/colors";

import StyleMain from "../../styles/StyleMain";

function NavMainTop({ navigation, route }) {
  const [modalVisible, setModalVisible] = useState(false);

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
        {/* ------------------------------------ Add Task/Plant (plus button) */}
        <TouchableOpacity
          style={StyleMain.addWrapper}
          onPress={() => setModalVisible(!modalVisible)}
          // onPress={() =>
          //   modalVisible ? setModalVisible(false) : setModalVisible(true)
          // }
        >
          <View style={StyleMain}>
            <Text style={StyleMain.addText}>+</Text>
          </View>
        </TouchableOpacity>

        {/* ------------------------------------ overlay from plus button */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          // onRequestClose={() => {
          //   Alert.alert("Modal has been closed.");
          //   setModalVisible(!modalVisible);
          // }}
        >
          {/* <View>
            <Pressable
              style={styles.overlay}
              onPress={() => setModalVisible(!modalVisible)}
            > */}
          {/* <Text style={{}}>Press</Text> */}

          <View style={styles.modalBox}>
            <View style={styles.modalView}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Add Plant</Text>
              </Pressable>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setModalVisible(!modalVisible);

                  // Pass and merge params back to Today screen >>
                  navigation.navigate({
                    name: "Today",
                    params: { taskInputVisible: true },
                    merge: true,
                  });
                }}
              >
                <Text style={styles.textStyle}>Add Task</Text>
              </Pressable>
            </View>
          </View>
          {/* </Pressable>
          </View> */}
        </Modal>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  overlay: {
    // flex: 1,
    // height: 100,
    // width: 100,
    // backgroundColor: "red",
  },
  modalBox: {
    display: "flex",
    alignItems: "flex-end",
    // marginTop: 70,
    // borderRadius: 30,
    // backgroundColor: "blue",
  },
  modalView: {
    marginTop: 70,
    backgroundColor: "white",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    width: 150,
    margin: 27,
    borderBottomRightRadius: 25,
    borderTopLeftRadius: 25,
    padding: 10,
    elevation: 2,
  },
  // buttonOpen: {
  //   backgroundColor: colors.sage25,
  // },
  buttonClose: {
    backgroundColor: colors.sage5,
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 17,
  },
  // modalText: {
  //   marginBottom: 15,
  //   textAlign: "center",
  // },
});

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
