import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  ScrollView,
} from "react-native";
import colors from "../../config/colors";

const GardeningTipps = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.wrapper}>
          <Image
            source={require("../../../assets/icons/png/workInProgress.png")}
            style={styles.image}
          />
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
  },
  wrapper: { marginTop: 150 },
  image: { height: 100, width: 100 },
});

export default GardeningTipps;
