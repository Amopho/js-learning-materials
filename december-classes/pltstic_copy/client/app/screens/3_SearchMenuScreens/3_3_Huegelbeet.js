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
const Huegelbeet = ({ navigation }) => {
  // huegelbeet
  const title = huegelbeet.head.headline;
  const subtitle = huegelbeet.head.subHeadline;
  const teaser = huegelbeet.teaser;
  const preParagraph = huegelbeet.body.preParagraph;
  const headline1 = huegelbeet.body.headline1;
  const paragraph1 = huegelbeet.body.paragraph1;
  const extraTipp1 = huegelbeet.body.extraTipp1;
  const headline2 = huegelbeet.body.headline2;
  const paragraph2 = huegelbeet.body.paragraph2;
  const headline3 = huegelbeet.body.headline3;
  const paragraph3 = huegelbeet.body.paragraph3;
  const extraTipp2 = huegelbeet.body.extraTipp2;
  const headline4 = huegelbeet.body.headline4;
  const paragraph4 = huegelbeet.body.paragraph4;
  const headline5 = huegelbeet.body.headline5;
  const paragraph5 = huegelbeet.body.paragraph5;
  const listTitle1 = huegelbeet.body.listTitle;
  const listTitle2 = huegelbeet.body.list2title;
  const listTitle3 = huegelbeet.body.list3title;
  const list1 = huegelbeet.body.list1;
  const list2 = huegelbeet.body.list2;
  const list3 = huegelbeet.body.list3;
  const list1item1 = huegelbeet.body.list1.list1item1;
  const list1item2 = huegelbeet.body.list1.list1item2;
  const list1item3 = huegelbeet.body.list1.list1item3;
  const list1item4 = huegelbeet.body.list1.list1item4;
  const credit = huegelbeet.credit;
  const tags = huegelbeet.tags;
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
              source={require("../../../assets/images/gardeningTipps/huegelbeet.jpg")}
              style={styles.imageSeason}
            />
          </View>
          <Text style={styles.beitragPrePara}>{preParagraph}</Text>
          <Text style={styles.beitragHead}>{headline1}</Text>
          <Text style={styles.beitragPara}>{paragraph1}</Text>
          <Text style={styles.beitragHead}>{headline2}</Text>
          <Text style={styles.beitragPara}>{paragraph2}</Text>
          <Image
            source={require("../../../assets/images/gardeningTipps/huegelschichten.jpg")}
            style={styles.imageSeason}
          />
          <View style={styles.listWrapper}>
            <Text style={styles.beitragListItem}>{list1item1}</Text>
            <Text style={styles.beitragListItem}>{list1item2}</Text>
            <Text style={styles.beitragListItem}>{list1item3}</Text>
            <Text style={styles.beitragListItem}>{list1item4}</Text>
          </View>

          <Text style={styles.beitragHead}>{headline3}</Text>
          <Text style={styles.beitragPara}>{paragraph3}</Text>

          <Text style={styles.beitragHead}>{headline4}</Text>
          <View style={styles.listWrapperWrapper}>
            <View style={styles.listWrapper}>
              <Text style={styles.beitragListTitle}>{listTitle2}</Text>
              <Text style={styles.beitragList}>{list2.join(", \n")}</Text>
            </View>
            <View style={styles.listWrapper}>
              <Text style={styles.beitragListTitle}>{listTitle3}</Text>
              <Text style={styles.beitragList}>{list3.join(", \n")}</Text>
            </View>
          </View>
          <Text style={styles.beitragPara}>{paragraph4}</Text>
          <Text style={styles.beitragHead}>{headline5}</Text>
          <Text style={styles.beitragPara}>{paragraph5}</Text>
        </View>
        <Text style={styles.credit}>Credit: {credit}</Text>
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
  listWrapperWrapper: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-around",
    // margin: 10,
  },
  listWrapper: { marginVertical: 20 },
  beitragListTitle: { fontSize: 18, color: colors.sage75 },
  beitragListItem: { fontSize: 18, marginVertical: 5, marginHorizontal: 10 },
  beitragList: { fontSize: 16 },
  credit: { marginVertical: 30, textAlign: "center" },
  visibility: { margin: 40 },
});

export default Huegelbeet;
