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

import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from "../../config/colors";
import DetailedPLantBanderole from "../../styles/DetailedPlantPortraitStyle";
import StylePlants from "../../styles/StylePlants";
import StyleMain from "../../styles/StyleMain";

// example plant
import Tomato from "../../../assets/jsons/tomatoPortrait.json";

const CathaBanderole = () => {
  let months = [
    "Jan",
    "Feb",
    "Mär",
    "Apr",
    "Mai",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Dez",
  ];

  // planting months index calculations
  const precultStart =
    Tomato.plant_data.planting_conditions.seeding_germination.seeding_time
      .preculture_start_month - 1;
  const precultEnd =
    Tomato.plant_data.planting_conditions.seeding_germination.seeding_time
      .preculture_end_month - 1;
  const dirSeedStart =
    Tomato.plant_data.planting_conditions.seeding_germination.seeding_time
      .direct_seeding_start_month - 1;
  const dirSeedEnd =
    Tomato.plant_data.planting_conditions.seeding_germination.seeding_time
      .direct_seeding_end_month - 1;

  // const flowerStart = Tomato.plant_data.flower.flowering_start_month - 1;
  // const flowerEnd = Tomato.plant_data.flower.flowering_end_month - 1;

  // const fruitStart = Tomato.plant_data.fruit.fruit_start_month - 1;
  // const fruitEnd = Tomato.plant_data.fruit.fruit_end_month - 1;

  const precHarvStart =
    Tomato.plant_data.harvest.preculture_harvest_start_month - 1;
  const precHarvEnd =
    Tomato.plant_data.harvest.preculture_harvest_end_month - 1;
  const dsHarvStart =
    Tomato.plant_data.harvest.direct_seed_harvest_start_month - 1;
  const dsHarvEnd = Tomato.plant_data.harvest.direct_seed_harvest_end_month - 1;

  // console.log(dsHarvStart);
  return (
    <View style={[StylePlants.banderole]}>
      {/* --------------------------------------------------------------- Banderole */}

      <View name="labels_container" style={styles.labelsContainer}>
        <Text style={styles.plantTitle}>{Tomato.labels.plant_genus[0]}</Text>
        <Text style={styles.plantVarietyName}>
          "{Tomato.labels.specific_variety_name}"
        </Text>
        <Text style={styles.botanicalName}>{Tomato.labels.botanical_name}</Text>
      </View>
      {/* ----------------------------------- planting time section >>  */}

      {/* --------- row titles >> */}
      <View
        name="plant_time_container"
        style={[styles.banderoleArea, styles.plantTimeContainer]}
      >
        <View
          name="plant_time_titles_container"
          style={[styles.banderoleArea, styles.plantTimeTitlesContainer]}
        >
          <View
            name="plant_time_title"
            style={[styles.banderoleArea, styles.plantTimeTitle]}
          ></View>
          <View
            name="plant_time_title"
            style={[styles.banderoleArea, styles.plantTimeTitle]}
          >
            <Text
              name="plant_time_title_text"
              style={[styles.border, styles.plantTimeTitleText]}
            >
              Aussaat
            </Text>
          </View>
          <View
            name="plant_time_title"
            style={[styles.banderoleArea, styles.plantTimeTitle]}
          >
            <Text
              name="plant_time_title_text"
              style={[styles.border, styles.plantTimeTitleText]}
            >
              Ernte
            </Text>
          </View>
        </View>

        {/* --------- months >> */}
        <View
          name="plant_time_months_outer_container"
          style={[styles.banderoleArea, styles.monthsOuterContainer]}
        >
          <View
            name="plant_time_months_inner_container"
            style={[styles.banderoleArea, styles.monthsInnerContainer]}
          >
            {months.map((month, i) => (
              <View
                key={i}
                name="plant_time_month"
                style={[
                  styles.border,
                  styles.monthBox,
                  styles.monthNameContainer,
                ]}
              >
                <Text
                  name="month_name"
                  style={[styles.border, styles.monthName]}
                >
                  {month}
                </Text>
              </View>
            ))}
          </View>

          {/* --------- Aussaat >> */}

          <View
            name="plant_time_months_inner_container"
            style={[styles.banderoleArea, styles.monthsInnerContainer]}
          >
            {months.map((month, i) => (
              <View
                key={month}
                name="plant_time_month"
                style={[styles.monthBox]}
              >
                <View
                  style={
                    precultStart <= i && i <= precultEnd
                      ? [styles.monthMarker, styles.preculture]
                      : styles.monthMarker
                  }
                ></View>
                <View
                  style={
                    dirSeedStart <= i && i <= dirSeedEnd
                      ? [styles.monthMarker, styles.directSeeding]
                      : styles.monthMarker
                  }
                ></View>
              </View>
            ))}
          </View>

          {/* --------- Ernte >> */}

          <View
            name="plant_time_months_inner_container"
            style={[styles.banderoleArea, styles.monthsInnerContainer]}
          >
            {months.map((month, i) => (
              <View
                key={month}
                name="plant_time_month"
                style={[styles.monthBox]}
              >
                <View
                  style={
                    precHarvStart <= i && i <= precHarvEnd
                      ? [styles.monthMarker, styles.preculture]
                      : styles.monthMarker
                  }
                ></View>
                <View
                  style={
                    dsHarvStart <= i && i <= dsHarvEnd
                      ? [styles.monthMarker, styles.directSeeding]
                      : styles.monthMarker
                  }
                ></View>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* --------- legend for colors >> */}

      <View name="legend_container" style={styles.legendContainer}>
        <View name="legend_item" style={styles.legendItem}>
          <View
            name="vorkultur_color"
            style={[styles.legendItemColor, styles.precultureColor]}
          ></View>
          <Text name="vorkultur_text" style={styles.legendItemText}>
            Vorkultur
          </Text>
        </View>
        <View name="legend_item" style={styles.legendItem}>
          <View
            name="direktsaat_color"
            style={[styles.legendItemColor, styles.directSeedColor]}
          ></View>
          <Text name="direktsaat_text" style={styles.legendItemText}>
            Direktsaat
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  noStyle: {},
  border: {
    // borderWidth: 1,
    // borderColor: "blue",
    // margin: 1,
  },

  // banderole area and inside >>
  banderoleArea: {
    // borderWidth: 2,
    // borderColor: "pink",
    // margin: 1,
  },

  // labels >>
  labelsContainer: {
    display: "flex",
    alignItems: "center",
  },
  plantTitle: { color: "black", fontSize: 40, letterSpacing: 1 },
  plantVarietyName: {
    color: colors.sage5,
    letterSpacing: 0.5,
    fontSize: 25,
  },
  botanicalName: {
    color: "black",
    fontSize: 14,
    marginTop: 4,
    fontStyle: "normal",
    marginBottom: 8,
  },

  // ---------------------------------------------------------------------- I AM LEGEND

  // legend for colors >>
  legendContainer: {
    // borderWidth: 1,
    // borderColor: "green",
    flexDirection: "row",
    alignSelf: "flex-end",
    marginRight: "5%",
    marginTop: 8,
    marginBottom: 10,
  },
  // << need to put it inside plant container later and put others in plant container inside another container so that legend is always on the bottom right of it
  legendItem: {
    // borderWidth: 1,
    // borderColor: "yellow",
    display: "flex",
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
  },
  legendItemColor: {
    width: 10,
    height: 10,
  },
  precultureColor: { backgroundColor: colors.sage75 },
  directSeedColor: { backgroundColor: colors.sage },
  legendItemText: {
    // borderWidth: 1,
    // borderColor: "pink",
    fontSize: 10,
    marginLeft: 3,
    marginRight: 3,
  },

  // ---------------

  // plant time container >>
  plantTimeContainer: {
    display: "flex",
    flexDirection: "row",
  },
  // plantTimeTitlesContainer: { borderColor: "green" },
  plantTimeTitle: {
    // borderWidth: 1,
    // borderColor: "orange",
    height: 20,
    display: "flex",
  },
  // titles on left side of calendar overview (for plant time) >>
  plantTimeTitleText: {
    // borderColor: "skyblue",
    // borderWidth: 1,

    fontSize: 9,
    padding: 2,
  },

  // month boxes and containers (for plant time)
  monthsOuterContainer: {
    // borderColor: "green",
    display: "flex",
    flexDirection: "column",
  },
  monthsInnerContainer: {
    // borderWidth: 1,
    // borderColor: "orange",
    display: "flex",
    // flex: 1,
    flexDirection: "row",
    height: 20,
    width: 300,
    padding: 1,
  },
  monthNameContainer: {
    // borderColor: "skyblue",
    width: 25,
    alignSelf: "flex-end",
  },
  monthName: {
    // borderColor: "indigo",
    color: "black",
    fontSize: 9,
  },
  monthBox: {
    margin: 1,
    // borderColor: "blue",
    // borderWidth: 1,
    display: "flex",
    flex: 1,
    // justifyContent: "center", // why not work?
    alignItems: "center",
  },
  monthMarker: {
    width: "100%",
    height: "50%",
    backgroundColor: colors.sage25,
  },
  preculture: {
    backgroundColor: colors.sage75,
  },
  directSeeding: {
    backgroundColor: colors.sage,
  },

  // main content/middle part >>

  flexRowCenter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },

  mainContent: {
    marginBottom: 90,
    marginHorizontal: 5,
    paddingHorizontal: 10,
  },
  sectionCollapse: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.sage25,
  },
  collapse: {
    // alignSelf: "flex-end",
    backgroundColor: colors.sage75,
    padding: 4,
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  plantImage: {
    width: "94%",
    height: 300,
    resizeMode: "contain",
  },
  section: {
    // width: "100%",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: colors.sage,
    borderBottomRightRadius: 25,
    borderTopLeftRadius: 25,
    padding: 10,
    backgroundColor: colors.sage25,
    marginVertical: 7,
  },
  infoItem: {
    // width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  infoItemIcon: {
    // width: "100%",
    // display: "flex",
    // flexDirection: "row",
  },
  infoItemText: {
    // width: "100%",
    // display: "flex",
    // flexDirection: "row",
  },
  topicTitles: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
export default CathaBanderole;
