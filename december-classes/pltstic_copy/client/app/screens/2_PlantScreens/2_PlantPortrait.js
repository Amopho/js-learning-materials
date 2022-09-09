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
  Button,
  // Target,
  // ScrollTo,
} from "react-native";
import { useScrollToTop } from "@react-navigation/native";

// piece components >>
import PlantBottomNav from "../../components/2_NavComponents/PlantBottomNav";
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

const PlantPortrait = ({ navigation }) => {
  // scroll to top when clicking on active tab of tab navigator >>
  // const ref = React.useRef(null);
  // useScrollToTop(ref);
  // add ref to scroll view: <ScrollView ref={ref}>{/* content */}</ScrollView>
  // source: https://reactnavigation.org/docs/use-scroll-to-top/

  // <Button
  // onPress={() => {
  //   this.refs._scrollView.scrollTo(0);
  // }}
  //   onPress={() => {
  //     this.refs._scrollView.scrollTo({});
  //   }}
  // >
  //   <Text>Scroll to top</Text>
  // </Button>
  // scroll on button click >>
  //   import { useRef } from 'react';
  // const scrollRef = useRef();
  // const onPressTouch = () => {
  //   scrollRef.current?.scrollTo({
  //     y: 0,
  //     animated: true,
  //   });
  // }
  // <ScrollView ref={scrollRef}>
  //   ...your elements
  // </ScrollView>
  // <TouchableOpacity onPress={onPressTouch}></TouchableOpacity>
  // source: https://stackoverflow.com/questions/31883211/scroll-to-top-of-scrollview/31885014

  // image carousel >>
  // console.log(Tomato.images.map((item) => item.image_link));
  // console.log("tomato object >>" + Tomato.images[0].image_link);
  // const plantImage = `../../../assets/images/` + Tomato.images[0].image_link;
  // const resolveAssetSource = Image.resolveAssetSource(tomatoImage).uri;
  // console.log(plantImage);

  // plant care information >>
  const plantCareText = Tomato.plant_data.care.care_information; // array of paragraphs
  const plantDescription = Tomato.plant_data.plant_description; // array of paragraphs
  const plantNotes = Tomato.plant_data.variety_specific_characteristics_notes;

  const plantInfo = Tomato.plant_data.plant_information; // array of paragraphs
  const extraInfo = Tomato.plant_data.other_information; // array of paragraphs

  return (
    <SafeAreaView style={StylePlants.container}>
      {/* -------------------- statusbar -------------------- */}

      <StatusBar style="auto" />

      {/* ----------------------------------------------------- Middle Part */}
      <ScrollView style={DetailedPlantPortraitStyle.mainContent}>
        {/* ----------------------------------------------------- Banderole */}

        <CathaBanderole />

        {/* -------------------- image carousel -------------------- */}
        <View style={[styles.flexRowCenter]}>
          <Image
            style={styles.plantImage}
            source={require("../../../assets/images/roma_tomatoes.jpg")}
          />
        </View>
        {/* -------------------- overview -------------------- */}
        {/* <View style={[DetailedPlantPortraitStyle.section]}> */}
        {/* <Text style={[DetailedPlantPortraitStyle.topicTitles]}>
            Große Übersicht
          </Text> */}

        {/* -------------------- Location */}

        {/* <View
            style={[
              DetailedPlantPortraitStyle.border,
              DetailedPlantPortraitStyle.infoItem,
            ]}
          >
            <View
              style={[
                DetailedPlantPortraitStyle.flexRow,
                DetailedPlantPortraitStyle.infoItemTitleContainer,
                DetailedPlantPortraitStyle.border,
              ]}
            > */}
        {/* <View
                style={[
                  DetailedPlantPortraitStyle.border,
                  DetailedPlantPortraitStyle.infoItemIcon,
                ]}
              ></View> */}
        {/* </View> */}
        {/* --------------------------------------------------------Headline */}
        <View style={styles.wrapperHeadline}>
          <Text style={[styles.headlineText]}>optimale Bedingungen </Text>
          <Image
            style={styles.iconHeadline}
            source={require("../../../assets/icons/png/info.png")}
          />
        </View>
        {/* ------------------------------------------------------------------- Standort */}
        <View style={styles.wrapperH2}>
          <Text style={[styles.h2Text]}>Standortbedürfnisse </Text>
        </View>

        <View style={styles.textWrapper}>
          <Image
            style={styles.icon}
            source={require("../../../assets/icons/png/weather/sun.png")}
          />
          <Text style={styles.text}>
            {" "}
            {Tomato.plant_data.planting_conditions.location.sun_text}
          </Text>
        </View>
        <View style={styles.textWrapper}>
          <Image
            style={styles.icon}
            source={require("../../../assets/icons/png/map-location.png")}
          />
          <Text style={styles.text}>
            {" "}
            {Tomato.plant_data.planting_conditions.location.location_requirements.join(
              ", "
            )}
          </Text>
        </View>
        {/* ----------------------------------------------------------BODEN */}
        <View style={styles.wrapperH2}>
          <Text style={[styles.h2Text]}>Bodenbeschaffenheit </Text>
        </View>
        <View style={styles.textWrapper}>
          <Image
            style={styles.icon}
            source={require("../../../assets/icons/png/soil.png")}
          />
          <Text style={styles.text}>
            {" "}
            {Tomato.plant_data.planting_conditions.soil.soil_characteristics.join(
              ", "
            )}
          </Text>
        </View>
        <View style={styles.textWrapper}>
          {/* <Image
                style={styles.icon}
                source={require("../../../assets/icons/png/map-location.png")}
              /> */}
          <Text style={styles.textTipp}> am besten:</Text>
          <Text style={styles.text}>
            {" "}
            {Tomato.plant_data.planting_conditions.soil.soil_types.join(", ")}
          </Text>
        </View>
        {/* ----------------------------------------------------------- Wasser */}
        <View style={styles.wrapperH2}>
          <Text style={[styles.h2Text]}>Wasserbedarf </Text>
        </View>
        <View style={styles.textWrapper}>
          <Image
            style={styles.icon}
            source={require("../../../assets/icons/png/wasserBedarf.png")}
          />
          <Text style={styles.text}>
            {" "}
            {Tomato.plant_data.planting_conditions.water.watering_notes.join(
              ", "
            )}
          </Text>
        </View>
        {/* <View style={styles.textWrapper}>
              <Text style={styles.textTipp}> am besten:</Text>
              <Text style={styles.text}>
                {" "}
                {Tomato.plant_data.planting_conditions.fertilizer.fertilizer_type.join(
                  ", "
                )}
              </Text>
            </View> */}
        {/* ----------------------------------------------------------- Düngen */}
        <View style={styles.wrapperH2}>
          <Text style={[styles.h2Text]}>Düngen </Text>
        </View>
        <View style={styles.textWrapper}>
          <Image
            style={styles.icon}
            source={require("../../../assets/icons/png/fertilizer.png")}
          />
          <Text style={styles.text}>
            {" "}
            {Tomato.plant_data.planting_conditions.fertilizer.fertilizer_notes.join(
              ", "
            )}
          </Text>
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.textTipp}> am besten:</Text>
          <Text style={styles.text}>
            {" "}
            {Tomato.plant_data.planting_conditions.fertilizer.fertilizer_type.join(
              ", \n"
            )}
          </Text>
        </View>
        {/* ----------------------------------------------------------------- Mulch */}
        <View style={styles.wrapperH2}>
          <Text style={[styles.h2Text]}>Mulchen </Text>
        </View>
        <View style={styles.textWrapper}>
          <Image
            style={styles.icon}
            source={require("../../../assets/icons/png/soil.png")}
          />
          <Text style={styles.text}>
            {" "}
            {Tomato.plant_data.planting_conditions.soil.mulch.mulch_type.join(
              ", "
            )}
          </Text>
        </View>
        <View style={styles.textWrapperColumn}>
          {/* <Image
                style={styles.icon}
                source={require("../../../assets/icons/png/map-location.png")}
              /> */}
          <Text style={styles.textTipp}> Tipp:</Text>
          <Text style={styles.text}>
            {Tomato.plant_data.planting_conditions.soil.mulch.mulch_notes.join(
              " "
            )}
          </Text>
        </View>

        {/* -------------------- general information -------------------- */}

        {/* -------------------- description plant -------------------- */}
        {/* -------------------------------------------------------------------Headline */}
        <View style={styles.wrapperHeadline}>
          <Text style={[styles.headlineText]}>Wissenswertes </Text>
          <Image
            style={styles.iconHeadline}
            source={require("../../../assets/icons/png/info.png")}
          />
        </View>
        <View style={styles.wrapperH2}>
          <Text style={[styles.h2Text]}>Aussehen </Text>
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>
            {plantDescription.map((paragraph, i) => (
              <Text key={i} style={{}}>
                {paragraph}
                {"\n"}
              </Text>
            ))}
          </Text>
        </View>

        <View style={styles.wrapperH2}>
          <Text style={[styles.h2Text]}>Wuchs </Text>
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>
            {plantNotes.map((paragraph, i) => (
              <Text key={i} style={{}}>
                {paragraph}
                {"\n"}
              </Text>
            ))}
          </Text>
        </View>
        {/* ----------------------------------------------------------PESTS & DISEASES */}
        {/* -------------------------------------------------------------------Headline */}
        <View style={styles.wrapperHeadline}>
          <Text style={[styles.headlineText]}>Schädlinge & Krankheiten </Text>
          <Image
            style={styles.iconHeadline}
            source={require("../../../assets/icons/png/snail.png")}
          />
        </View>
        <View style={styles.wrapperH2}>
          <Text style={[styles.h2Text]}>Schädlinge </Text>
        </View>
        <View style={styles.textWrapper}>
          <Image
            style={styles.icon}
            source={require("../../../assets/icons/png/louse.png")}
          />
          <Text style={styles.text}>
            {" "}
            {Tomato.plant_data.possible_diseases_and_pests.pests.join(", ")}
          </Text>
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.textTipp}> am besten:</Text>
          <Text style={styles.text}> Kill 'em all</Text>
        </View>

        <View style={styles.wrapperH2}>
          <Text style={[styles.h2Text]}>Krankheiten </Text>
        </View>
        <View style={styles.textWrapper}>
          <Image
            style={styles.icon}
            source={require("../../../assets/icons/png/infectious.png")}
          />
          <Text style={styles.text}>
            {" "}
            {Tomato.plant_data.possible_diseases_and_pests.diseases.join(
              ", \n "
            )}
          </Text>
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.textTipp}> am besten:</Text>
          <Text style={styles.text}> Call a doctor</Text>
        </View>
        <View style={styles.keepItVisible}></View>
      </ScrollView>
      {/* ---------------------------------------- Navigation Main Bottom */}
      <PlantBottomNav navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // ---------------------------------------------------- IMAGE
  flexRowCenter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  plantImage: { width: "94%", height: 300, resizeMode: "contain" },
  // ----------------------------------------------------------------------HEADLINES
  wrapperHeadline: {
    borderTopColor: colors.sage5,
    borderStyle: "solid",
    borderTopWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  iconHeadline: { height: 40, width: 40 },
  headlineText: { fontSize: 30, color: colors.sage5 },

  // -----------------------------------------------------------------H2
  wrapperH2: { paddingHorizontal: 10, paddingVertical: 5 },
  h2Text: { color: colors.sage, fontSize: 18 },
  // --------------------------------------------------------------------------INFO TEXT
  textWrapper: {
    paddingVertical: 3,
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  textWrapperColumn: {
    flexDirection: "column",
    paddingVertical: 3,
    paddingHorizontal: 10,
  },
  iconText: { fontSize: 20 },
  icon: { height: 30, width: 30 },
  text: { fontSize: 20, width: "95%", alignSelf: "center" },
  textTipp: { color: colors.sage5, fontSize: 20 },
  keepItVisible: { marginBottom: 150 },
});
export default PlantPortrait;
