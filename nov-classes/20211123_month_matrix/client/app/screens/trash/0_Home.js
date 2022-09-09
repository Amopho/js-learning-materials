import React from "react";
import { StyleSheet, Text, TouchableOpacity, SafeAreaView } from "react-native";
import colors from "../../config/colors";
import BanderoleDressy from "../../components/BanderoleDressy";

function Home({ title, onPress, color = "primary" }) {
  return (
    <BanderoleDressy>
      <Text style={styles.mainText}>you are at home</Text>
    </BanderoleDressy>
  );
}

const styles = StyleSheet.create({});

export default Home;
