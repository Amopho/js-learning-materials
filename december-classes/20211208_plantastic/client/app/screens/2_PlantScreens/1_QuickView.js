import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
} from "react-native";

// piece components >>
import PlantBottomNav from "../../components/2_NavComponents/PlantBottomNav";
import DetailedPlantBanderole from "../../components/3_Banderolen/DetailedPlantBanderole";
import CathaBanderole from "../../components/3_Banderolen/KD_CathaMakeOver";
// import Task from "../../components/Task";

// for styling >>
import StylePlants from "../../styles/StylePlants";
import StyleMain from "../../styles/StyleMain";
import DetailedPlantPortraitStyle from "../../styles/DetailedPlantPortraitStyle";
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from "../../config/colors";

// example plant
import Tomato from "../../../assets/jsons/tomatoPortrait.json";
// tomato image
import tomatoImage from "../../../assets/images/roma_tomatoes.jpg";
import detailedPlantPortraitStyles from "../../styles/DetailedPlantPortraitStyle";

const QuickView = ({ navigation }) => {
  // Kurz & Deckich
  const standort = Tomato.plant_data.kurz_dreckig.standort;
  const water = Tomato.plant_data.kurz_dreckig.wasserbedarf;
  const saattiefe = Tomato.plant_data.kurz_dreckig.saattiefe_cm;
  const pflanzenabstand =
    Tomato.plant_data.kurz_dreckig.abstaende.pflanzenAbstand_cm;
  const reihenabstand =
    Tomato.plant_data.kurz_dreckig.abstaende.reihenAbstand_cm;
  const keimungTage_min =
    Tomato.plant_data.kurz_dreckig.keimung.keimungTage_min;
  const keimungTage_max =
    Tomato.plant_data.kurz_dreckig.keimung.keimungTage_max;
  const keimungTemp_minC =
    Tomato.plant_data.kurz_dreckig.keimung.keimungTemp_minC;
  const keimungTemp_maxC =
    Tomato.plant_data.kurz_dreckig.keimung.keimungTemp_maxC;

  return (
    <SafeAreaView style={StylePlants.container}>
      {/* -------------------- statusbar -------------------- */}
      <StatusBar style="auto" />
      {/* ------------------------------------------------------------------------------ Banderole */}

      <CathaBanderole />

      {/* ----------------------------------------------------- Middle Part */}
      <ScrollView style={styles.mainContent}>
        {/* ------------------------------------------------------------------------KURZ & DRECKIG */}

        {/* --------------------------------------- STANDORT */}

        <View style={[styles.singleWrapper, styles.underline]}>
          <Text style={[styles.categoryText, styles.singleMarginTop]}>
            Standort
          </Text>
          <Image
            style={styles.icon}
            source={require("../../../assets/icons/png/map-location.png")}
          />
          <Text style={styles.info}>{standort}</Text>
        </View>

        {/* --------------------------------------- WATER */}

        <View style={[styles.singleWrapper, styles.underline]}>
          <Text style={[styles.categoryText, styles.singleMarginTop]}>
            Wasserbedarf
          </Text>
          <Image
            style={styles.icon}
            source={require("../../../assets/icons/png/wasserBedarf.png")}
          />
          <Text style={styles.info}>{water}</Text>
        </View>

        {/* --------------------------------------- SAATTIEFE */}

        <View style={[styles.singleWrapper, styles.underline]}>
          <Text style={[styles.categoryText, styles.singleMarginTop]}>
            Saattiefe
          </Text>
          <Image
            style={styles.icon}
            source={require("../../../assets/icons/png/saatTiefe.png")}
          />
          <Text style={styles.info}>{saattiefe} cm</Text>
        </View>

        {/* --------------------------------------- ABSTÄNDE */}

        <View style={[styles.doubleWrapper, styles.underline]}>
          <Text style={[styles.categoryText, styles.doubleMarginTop]}>
            Abstände
          </Text>
          <View style={styles.doubleColumn}>
            <View style={styles.doubleInfo}>
              <Image
                style={[styles.icon, styles.iconExtraMargin]}
                source={require("../../../assets/icons/png/pflanzenabstand.png")}
              />

              <Text style={styles.info}>
                {pflanzenabstand}cm Pflanzenabstand
              </Text>
            </View>
            <View style={styles.doubleInfo}>
              <Image
                style={styles.icon}
                source={require("../../../assets/icons/png/reihenAbstand.png")}
              />

              <Text style={styles.info}>{reihenabstand}cm Reihenabstand</Text>
            </View>
          </View>
        </View>

        {/* --------------------------------------- KEIMUNG */}

        <View style={styles.doubleWrapper}>
          <Text style={[styles.categoryText, styles.doubleMarginTop]}>
            Keimung
          </Text>
          <View style={styles.doubleColumn}>
            <View style={styles.doubleInfo}>
              <Image
                style={[styles.icon, styles.iconExtraMargin]}
                source={require("../../../assets/icons/png/keimDauer.png")}
              />

              <Text style={styles.info}>
                {keimungTage_min}-{keimungTage_max} Tage
              </Text>
            </View>
            <View style={styles.doubleInfo}>
              <Image
                style={styles.icon}
                source={require("../../../assets/icons/png/keimTemperatur.png")}
              />

              <Text style={styles.info}>
                {keimungTemp_minC}-{keimungTemp_maxC} C°
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* ---------------------------------------- Navigation Main Bottom */}
      <PlantBottomNav navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  singleWrapper: {
    flexDirection: "row",
    alignItems: "baseline",
    padding: 5,
    marginTop: 5,
  },
  categoryText: {
    position: "absolute",
    marginLeft: 10,
    color: colors.sage75,
    textTransform: "uppercase",
    fontSize: 20,
    alignSelf: "baseline",
  },
  icon: {
    height: 30,
    width: 30,
    marginRight: 5,
    marginLeft: 150,
  },
  iconExtraMargin: { marginBottom: 5 },
  info: { fontSize: 16 },
  doubleWrapper: {
    flexDirection: "row",
    alignItems: "baseline",
    padding: 5,
    marginTop: 5,
  },
  doubleColumn: { flexDirection: "column", alignItems: "baseline" },
  doubleInfo: { flexDirection: "row", alignItems: "baseline" },
  underline: {
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderBottomColor: colors.sage25,
  },
  singleMarginTop: { marginTop: 20 },
  doubleMarginTop: { marginTop: 55 },
});
export default QuickView;
