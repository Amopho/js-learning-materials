import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import colors from "../../config/colors";

import blaubeeren from "../../../assets/jsons/gardeningTipps/blaubeeren.json";
import huegelbeet from "../../../assets/jsons/gardeningTipps/huegelbeet.json";
import mulchen from "../../../assets/jsons/gardeningTipps/mulchen.json";
import winterfest from "../../../assets/jsons/gardeningTipps/winterfest.json";
const Blog = ({ navigation }) => {
  // Blaubeeren
  const blauTitle = blaubeeren.head.headline;
  const blauSub = blaubeeren.head.subHeadline;
  const blauTeaser = blaubeeren.teaser;
  // hügelbeet
  const huegelTitle = huegelbeet.head.headline;
  const huegelSub = huegelbeet.head.subHeadline;
  const huegelTeaser = huegelbeet.teaser;
  // mulchen
  const mulchTitle = mulchen.head.headline;
  const mulchSub = mulchen.head.subHeadline;
  const mulchTeaser = mulchen.teaser;
  // winterfest
  const winterTitle = winterfest.head.headline;
  const winterSub = winterfest.head.subHeadline;
  const winterTeaser = winterfest.teaser;

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
            <TouchableOpacity
              style={styles.listItem}
              onPress={() =>
                navigation.navigate("Winterfest", {
                  propOne: "propOne props",
                })
              }
            >
              <Text style={styles.readMore}>weiterlesen</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* ------------------------------------------------------------------Carousel------------- */}
        <View style={styles.seasonWrapper}></View>
        <Text style={styles.entdeckenHeadline}>Entdecken</Text>
        {/* Hügelbeet */}
        <View style={styles.beitragWrapper}>
          <TouchableOpacity
            style={styles.listItem}
            onPress={() =>
              navigation.navigate("Huegelbeet", {
                propOne: "propOne props",
              })
            }
          >
            <Image
              source={require("../../../assets/images/gardeningTipps/huegelbeet.jpg")}
              style={styles.imageSeason}
            />
          </TouchableOpacity>

          <View style={styles.beitragTextWrapper}>
            <Text style={styles.beitragTitle}>{huegelTitle}</Text>
            <Text style={styles.beitragSub}>{huegelSub}</Text>
            <Text style={styles.beitragTeaser}>{huegelTeaser}..</Text>
            <TouchableOpacity
              style={styles.listItem}
              onPress={() =>
                navigation.navigate("Huegelbeet", {
                  propOne: "propOne props",
                })
              }
            >
              <Text style={styles.readMore}>weiterlesen</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Mulchen */}
        <View style={styles.beitragWrapper}>
          <Image
            source={require("../../../assets/images/gardeningTipps/mulchen.jpg")}
            style={styles.imageSeason}
          />
          <View style={styles.beitragTextWrapper}>
            <Text style={styles.beitragTitle}>{mulchTitle}</Text>
            <Text style={styles.beitragSub}>{mulchSub}</Text>
            <Text style={styles.beitragTeaser}>{mulchTeaser}..</Text>
            <TouchableOpacity
              style={styles.listItem}
              onPress={() =>
                navigation.navigate("Mulchen", {
                  propOne: "propOne props",
                })
              }
            >
              <Text style={styles.readMore}>weiterlesen</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Blaubeeren */}

        <View style={styles.beitragWrapper}>
          <Image
            source={require("../../../assets/images/gardeningTipps/balubeerStrauch.jpg")}
            style={styles.imageSeason}
          />
          <View style={styles.beitragTextWrapper}>
            <Text style={styles.beitragTitle}>{blauTitle}</Text>
            <Text style={styles.beitragSub}>{blauSub}</Text>
            <Text style={styles.beitragTeaser}>{blauTeaser}..</Text>
            <TouchableOpacity
              style={styles.listItem}
              onPress={() =>
                navigation.navigate("Winterfest", {
                  propOne: "propOne props",
                })
              }
            >
              <Text style={styles.readMore}>weiterlesen</Text>
            </TouchableOpacity>
          </View>
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
    marginTop: 20,
  },
  beitragWrapper: {
    borderColor: colors.sage25,
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    alignSelf: "center",
    width: "95%",
    marginTop: 10,
  },
  imageSeason: {
    margin: 5,
    marginTop: 10,
    width: "90%",
    height: undefined,
    aspectRatio: 1.8,
  },
  beitragTextWrapper: { margin: 5 },
  beitragTitle: { fontSize: 30, color: colors.sage5, textAlign: "center" },
  beitragSub: { fontSize: 24, color: colors.sage, textAlign: "center" },
  beitragTeaser: { padding: 10, fontSize: 18 },
  readMore: {
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 18,
  },

  entdeckenHeadline: {
    fontSize: 30,
    color: colors.sage,
    textAlign: "center",
    marginTop: 20,
  },
  visibility: { margin: 80 },
});

export default Blog;
