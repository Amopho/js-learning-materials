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
        <View style={styles.seasonWrapper}></View>
        <Text style={styles.seasonHeadline}>Top Winter Tipp</Text>
        <View style={styles.beitragWrapper}>
          <Image
            source={require("../../../assets/images/gardeningTipps/winterfest.jpg")}
            style={styles.imageSeason}
          />
          <View style={styles.beitragTextWrapper}>
            <Text style={styles.beitragTitle}>{winterTitle}</Text>
            <Text style={styles.beitragSub}>{winterSub}</Text>
            <Text style={styles.beitragTeaser}>{winterTeaser}..</Text>
            <Text style={styles.readMore}>weiterlesen</Text>
          </View>
        </View>
        {/* ------------------------------------------------------------------Carousel------------- */}
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
    borderColor: colors.sage25,
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    alignSelf: "center",
    width: "90%",
  },
  imageSeason: {
    margin: 5,
    marginTop: 10,
    width: "90%",
    height: undefined,
    aspectRatio: 1.8,
  },
  beitragTextWrapper: { margin: 5 },
  beitragTitle: { fontSize: 28, color: colors.sage5, textAlign: "center" },
  beitragSub: { fontSize: 20, color: colors.sage, textAlign: "center" },
  beitragTeaser: { padding: 10 },
  readMore: { textAlign: "center", marginBottom: 10, fontWeight: "bold" },
});

export default Winterfest;
