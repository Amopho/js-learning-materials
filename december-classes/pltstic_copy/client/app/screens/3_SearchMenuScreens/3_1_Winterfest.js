import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  ScrollView,
} from "react-native";
import colors from "../../config/colors";
import blaubeeren from "../../../assets/jsons/gardeningTipps/blaubeeren.json";
import huegelbeet from "../../../assets/jsons/gardeningTipps/huegelbeet.json";
import mulchen from "../../../assets/jsons/gardeningTipps/mulchen.json";
import winterfest from "../../../assets/jsons/gardeningTipps/winterfest.json";
const Winterfest = ({ navigation }) => {
  // winterfest
  const title = winterfest.head.headline;
  const subtitle = winterfest.head.subHeadline;
  const teaser = winterfest.teaser;
  const preParagraph = winterfest.body.preParagraph;
  const headline1 = winterfest.body.headline1;
  const paragraph1 = winterfest.body.paragraph1;
  const extraTipp1 = winterfest.body.extraTipp1;
  const headline2 = winterfest.body.headline2;
  const paragraph2 = winterfest.body.paragraph2;
  const headline3 = winterfest.body.headline3;
  const paragraph3 = winterfest.body.paragraph3;
  const extraTipp2 = winterfest.body.extraTipp2;
  const headline4 = winterfest.body.headline4;
  const paragraph4 = winterfest.body.paragraph4;
  const headline5 = winterfest.body.headline5;
  const paragraph5 = winterfest.body.paragraph5;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* <View style={styles.wrapper}>
          <Image
            source={require("../../../assets/icons/png/workInProgress.png")}
            style={styles.image}
          />
        </View> */}
        {/* ----------------------------------------------------------------Season Tipp------------ */}

        <View style={styles.beitragWrapper}>
          <View style={styles.beitragTextWrapper}>
            <Text style={styles.beitragTitle}>{title}</Text>
            <Text style={styles.beitragSub}>{subtitle}</Text>
            <Image
              source={require("../../../assets/images/gardeningTipps/winterfest.jpg")}
              style={styles.imageSeason}
            />
          </View>
          <Text style={styles.beitragPrePara}>{preParagraph}</Text>
          <Text style={styles.beitragHead}>{headline1}</Text>
          <Text style={styles.beitragPara}>{paragraph1}</Text>
          <Text style={styles.beitragTipp}>{extraTipp1}</Text>
          <Text style={styles.beitragHead}>{headline2}</Text>
          <Text style={styles.beitragPara}>{paragraph2}</Text>
          <Text style={styles.beitragHead}>{headline3}</Text>
          <Text style={styles.beitragPara}>{paragraph3}</Text>
          <Text style={styles.beitragTipp}>{extraTipp2}</Text>
          <Text style={styles.beitragHead}>{headline4}</Text>
          <Text style={styles.beitragPara}>{paragraph4}</Text>
          <Text style={styles.beitragHead}>{headline5}</Text>
          <Text style={styles.beitragPara}>{paragraph5}</Text>
        </View>
        <View style={styles.visibility}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.white,
    height: "100%",
    flex: 1,
  },
  seasonWrapper: { justifyContent: "center" },
  seasonHeadline: {
    fontSize: 50,
    color: colors.sage,
    textAlign: "center",
    margin: 10,
  },
  beitragWrapper: {
    // borderColor: colors.sage25,
    // borderWidth: 1,
    // borderStyle: "solid",
    alignItems: "center",
    alignSelf: "center",
    width: "95%",
  },
  imageSeason: {
    margin: 5,
    marginTop: 10,
    width: "95%",
    height: undefined,
    aspectRatio: 1.8,
  },
  beitragTextWrapper: { margin: 5 },
  beitragTitle: { fontSize: 35, color: colors.sage5, textAlign: "center" },
  beitragSub: { fontSize: 25, color: colors.sage, textAlign: "center" },

  readMore: { textAlign: "center", marginBottom: 10, fontWeight: "bold" },
  beitragPrePara: { fontSize: 18, marginVertical: 10 },
  beitragHead: {
    fontSize: 20,
    color: colors.sage,
    textAlign: "center",
    margin: 5,
    marginTop: 15,
  },
  beitragPara: { fontSize: 18 },
  beitragTipp: {
    fontSize: 16,
    borderColor: colors.sage25,
    borderWidth: 3,
    borderStyle: "solid",
    padding: 5,
    marginVertical: 10,
  },
  visibility: { margin: 80 },
});

export default Winterfest;
