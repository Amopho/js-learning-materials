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

// import MyGarden from "../1_MainScreens/3_MyGarden";
// import QuickView from "./QuickView.js";
// // import PlantPortrait from "./PlantPortrait";
// import Diary from "./Diary";
// import Task from "../../components/Task";

// for styling
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from "../../config/colors";
import DetailedPlantPortraitStyles from "../../styles/DetailedPlantPortraitStyle";
import StylePlants from "../../styles/StylePlants";
import StyleMain from "../../styles/StyleMain";

// example plant
import Tomato from "../../../assets/jsons/tomatoPortrait.json";

const DetailedPLantBanderole = () => {
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

      <View
        name="labels_container"
        style={DetailedPlantPortraitStyles.labelsContainer}
      >
        <Text style={DetailedPlantPortraitStyles.plantTitle}>
          {Tomato.labels.plant_genus[0]}
        </Text>
        <Text style={DetailedPlantPortraitStyles.plantVarietyName}>
          "{Tomato.labels.specific_variety_name}"
        </Text>
        <Text style={DetailedPlantPortraitStyles.botanicalName}>
          {Tomato.labels.botanical_name}
        </Text>
      </View>
      {/* ----------------------------------- planting time section >>  */}

      {/* --------- row titles >> */}
      <View
        name="plant_time_container"
        style={[
          DetailedPlantPortraitStyles.banderoleArea,
          DetailedPlantPortraitStyles.plantTimeContainer,
        ]}
      >
        <View
          name="plant_time_titles_container"
          style={[
            DetailedPlantPortraitStyles.banderoleArea,
            DetailedPlantPortraitStyles.plantTimeTitlesContainer,
          ]}
        >
          <View
            name="plant_time_title"
            style={[
              DetailedPlantPortraitStyles.banderoleArea,
              DetailedPlantPortraitStyles.plantTimeTitle,
            ]}
          ></View>
          <View
            name="plant_time_title"
            style={[
              DetailedPlantPortraitStyles.banderoleArea,
              DetailedPlantPortraitStyles.plantTimeTitle,
            ]}
          >
            <Text
              name="plant_time_title_text"
              style={[
                DetailedPlantPortraitStyles.border,
                DetailedPlantPortraitStyles.plantTimeTitleText,
              ]}
            >
              Aussaat
            </Text>
          </View>
          <View
            name="plant_time_title"
            style={[
              DetailedPlantPortraitStyles.banderoleArea,
              DetailedPlantPortraitStyles.plantTimeTitle,
            ]}
          >
            <Text
              name="plant_time_title_text"
              style={[
                DetailedPlantPortraitStyles.border,
                DetailedPlantPortraitStyles.plantTimeTitleText,
              ]}
            >
              Ernte
            </Text>
          </View>
        </View>

        {/* --------- months >> */}
        <View
          name="plant_time_months_outer_container"
          style={[
            DetailedPlantPortraitStyles.banderoleArea,
            DetailedPlantPortraitStyles.monthsOuterContainer,
          ]}
        >
          <View
            name="plant_time_months_inner_container"
            style={[
              DetailedPlantPortraitStyles.banderoleArea,
              DetailedPlantPortraitStyles.monthsInnerContainer,
            ]}
          >
            {months.map((month, i) => (
              <View
                key={i}
                name="plant_time_month"
                style={[
                  DetailedPlantPortraitStyles.border,
                  DetailedPlantPortraitStyles.monthBox,
                  DetailedPlantPortraitStyles.monthNameContainer,
                ]}
              >
                <Text
                  name="month_name"
                  style={[
                    DetailedPlantPortraitStyles.border,
                    DetailedPlantPortraitStyles.monthName,
                  ]}
                >
                  {month}
                </Text>
              </View>
            ))}
          </View>

          {/* --------- Aussaat >> */}

          <View
            name="plant_time_months_inner_container"
            style={[
              DetailedPlantPortraitStyles.banderoleArea,
              DetailedPlantPortraitStyles.monthsInnerContainer,
            ]}
          >
            {months.map((month, i) => (
              <View
                key={month}
                name="plant_time_month"
                style={[DetailedPlantPortraitStyles.monthBox]}
              >
                <View
                  style={
                    precultStart <= i && i <= precultEnd
                      ? [
                          DetailedPlantPortraitStyles.monthMarker,
                          DetailedPlantPortraitStyles.preculture,
                        ]
                      : DetailedPlantPortraitStyles.monthMarker
                  }
                ></View>
                <View
                  style={
                    dirSeedStart <= i && i <= dirSeedEnd
                      ? [
                          DetailedPlantPortraitStyles.monthMarker,
                          DetailedPlantPortraitStyles.directSeeding,
                        ]
                      : DetailedPlantPortraitStyles.monthMarker
                  }
                ></View>
              </View>
            ))}
          </View>

          {/* --------- Ernte >> */}

          <View
            name="plant_time_months_inner_container"
            style={[
              DetailedPlantPortraitStyles.banderoleArea,
              DetailedPlantPortraitStyles.monthsInnerContainer,
            ]}
          >
            {months.map((month, i) => (
              <View
                key={month}
                name="plant_time_month"
                style={[DetailedPlantPortraitStyles.monthBox]}
              >
                <View
                  style={
                    precHarvStart <= i && i <= precHarvEnd
                      ? [
                          DetailedPlantPortraitStyles.monthMarker,
                          DetailedPlantPortraitStyles.preculture,
                        ]
                      : DetailedPlantPortraitStyles.monthMarker
                  }
                ></View>
                <View
                  style={
                    dsHarvStart <= i && i <= dsHarvEnd
                      ? [
                          DetailedPlantPortraitStyles.monthMarker,
                          DetailedPlantPortraitStyles.directSeeding,
                        ]
                      : DetailedPlantPortraitStyles.monthMarker
                  }
                ></View>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* --------- legend for colors >> */}

      <View
        name="legend_container"
        style={DetailedPlantPortraitStyles.legendContainer}
      >
        <View name="legend_item" style={DetailedPlantPortraitStyles.legendItem}>
          <View
            name="vorkultur_color"
            style={[
              DetailedPlantPortraitStyles.legendItemColor,
              DetailedPlantPortraitStyles.precultureColor,
            ]}
          ></View>
          <Text
            name="vorkultur_text"
            style={DetailedPlantPortraitStyles.legendItemText}
          >
            Vorkultur
          </Text>
        </View>
        <View name="legend_item" style={DetailedPlantPortraitStyles.legendItem}>
          <View
            name="direktsaat_color"
            style={[
              DetailedPlantPortraitStyles.legendItemColor,
              DetailedPlantPortraitStyles.directSeedColor,
            ]}
          ></View>
          <Text
            name="direktsaat_text"
            style={DetailedPlantPortraitStyles.legendItemText}
          >
            Direktsaat
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // platformContainer: {
  //   flex: 1,
  //   paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  // },
});
export default DetailedPLantBanderole;
