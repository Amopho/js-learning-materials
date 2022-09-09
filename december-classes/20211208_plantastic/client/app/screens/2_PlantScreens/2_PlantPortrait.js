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
import DetailedPlantBanderole from "../../components/3_Banderolen/DetailedPlantBanderole";
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
  const plantInfo = Tomato.plant_data.plant_information; // array of paragraphs
  const extraInfo = Tomato.plant_data.other_information; // array of paragraphs

  console.log(plantDescription);

  return (
    <SafeAreaView style={StylePlants.container}>
      {/* -------------------- statusbar -------------------- */}

      <StatusBar style="auto" />

      {/* ----------------------------------------------------- Middle Part */}
      <ScrollView style={DetailedPlantPortraitStyle.mainContent}>
        {/* ----------------------------------------------------- Banderole */}

        <DetailedPlantBanderole />

        {/* -------------------- image carousel -------------------- */}
        <View style={[DetailedPlantPortraitStyle.flexRowCenter]}>
          <Image
            style={DetailedPlantPortraitStyle.plantImage}
            source={require("../../../assets/images/roma_tomatoes.jpg")}
          />
        </View>
        {/* -------------------- overview -------------------- */}
        <View style={[DetailedPlantPortraitStyle.section]}>
          <Text style={[DetailedPlantPortraitStyle.topicTitles]}>
            Große Übersicht
          </Text>

          {/* -------------------- Location */}

          <View
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
            >
              <View
                style={[
                  DetailedPlantPortraitStyle.border,
                  DetailedPlantPortraitStyle.infoItemIcon,
                ]}
              ></View>
              <Text
                style={[
                  DetailedPlantPortraitStyle.border,
                  DetailedPlantPortraitStyle.infoItemTitle,
                ]}
              >
                Standortbedingungen:{" "}
              </Text>
            </View>

            <Text
              style={[
                DetailedPlantPortraitStyle.border,
                DetailedPlantPortraitStyle.infoItemText,
              ]}
            >
              Sonne: {Tomato.plant_data.planting_conditions.location.sun_text}
            </Text>

            <Text
              style={[
                DetailedPlantPortraitStyle.border,
                DetailedPlantPortraitStyle.infoItemText,
              ]}
            >
              Standortbedarf:{" "}
              {Tomato.plant_data.planting_conditions.location.location_requirements.join(
                ", "
              )}
            </Text>

            <Text
              style={[
                DetailedPlantPortraitStyle.border,
                DetailedPlantPortraitStyle.infoItemText,
              ]}
            >
              Erdtyp:{" "}
              {Tomato.plant_data.planting_conditions.soil.soil_characteristics.join(
                ", "
              )}
            </Text>

            <Text
              style={[
                DetailedPlantPortraitStyle.border,
                DetailedPlantPortraitStyle.infoItemText,
              ]}
            >
              Erdsorte:{" "}
              {Tomato.plant_data.planting_conditions.soil.soil_types.join(", ")}
            </Text>

            {/* -------------------- Mulch */}

            {Tomato.plant_data.planting_conditions.soil.requires_mulching ? (
              <View>
                <Text
                  style={[
                    DetailedPlantPortraitStyle.border,
                    DetailedPlantPortraitStyle.infoItemText,
                  ]}
                >
                  Mulchen:{" "}
                  {Tomato.plant_data.planting_conditions.soil.mulch.mulch_notes.join(
                    " "
                  )}
                </Text>
                <Text
                  style={[
                    DetailedPlantPortraitStyle.border,
                    DetailedPlantPortraitStyle.infoItemText,
                  ]}
                >
                  Am besten alle{" "}
                  {Tomato.plant_data.planting_conditions.soil.mulch.mulch_every}{" "}
                  {
                    Tomato.plant_data.planting_conditions.soil.mulch
                      .mulch_every_unit
                  }{" "}
                  eine frische Mulchschicht auftragen.
                </Text>
                <Text
                  style={[
                    DetailedPlantPortraitStyle.border,
                    DetailedPlantPortraitStyle.infoItemText,
                  ]}
                >
                  Mulchmaterial:{" "}
                  {Tomato.plant_data.planting_conditions.soil.mulch.mulch_type.join(
                    ", "
                  )}
                </Text>
                <Text
                  style={[
                    DetailedPlantPortraitStyle.border,
                    DetailedPlantPortraitStyle.infoItemText,
                  ]}
                >
                  Mulchschichtdicke: ca.
                  {
                    Tomato.plant_data.planting_conditions.soil.mulch
                      .mulch_thickness
                  }{" "}
                  {
                    Tomato.plant_data.planting_conditions.soil.mulch
                      .mulch_thickness_unit
                  }
                </Text>
              </View>
            ) : (
              <View></View>
            )}
          </View>
        </View>

        {/* -------------------- general information -------------------- */}

        <View style={DetailedPlantPortraitStyle.section}>
          <View style={DetailedPlantPortraitStyle.sectionCollapse}>
            <Text style={DetailedPlantPortraitStyle.topicTitles}>
              Allgemeines
            </Text>
            <Text style={DetailedPlantPortraitStyle.collapse}>+/-</Text>
          </View>

          <View style={{}}>
            {plantInfo.map((paragraph, i) => (
              <Text key={i} style={{}}>
                {paragraph}
              </Text>
            ))}
          </View>
        </View>

        {/* -------------------- description plant -------------------- */}
        <View style={DetailedPlantPortraitStyle.section}>
          <Text style={DetailedPlantPortraitStyle.topicTitles}>
            Beschreibung
          </Text>
          <View style={{}}>
            {plantDescription.map((paragraph, i) => (
              <Text key={i} style={{}}>
                {paragraph}
              </Text>
            ))}
          </View>
        </View>
        {/* -------------------- description flower -------------------- */}

        {/* -------------------- description fruit -------------------- */}

        {/* -------------------- description foliage -------------------- */}

        {/* -------------------- description root -------------------- */}

        {/* -------------------- medicinal properties or poisonousness -------------------- */}

        {/* -------------------- variety specific information -------------------- */}
        <View style={DetailedPlantPortraitStyle.section}>
          <Text style={DetailedPlantPortraitStyle.topicTitles}>
            Über {Tomato.labels.specific_variety_name}
          </Text>
          <View style={{}}>
            {plantCareText.map((paragraph, i) => (
              <Text key={i} style={{}}>
                {paragraph}
              </Text>
            ))}
          </View>
        </View>

        {/* -------------------- care -------------------- */}
        <View style={DetailedPlantPortraitStyle.section}>
          <Text style={DetailedPlantPortraitStyle.topicTitles}>Pflege</Text>
          <View style={{}}>
            {plantCareText.map((paragraph, i) => (
              <Text key={i} style={{}}>
                {paragraph}
              </Text>
            ))}
          </View>
        </View>

        {/* -------------------- other -------------------- */}
        <View style={DetailedPlantPortraitStyle.section}>
          <Text style={DetailedPlantPortraitStyle.noStyle}>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
            enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
            autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
            nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
            voluptas nulla pariatur?" 1914 translation by H. Rackham "But I must
            explain to you how all this mistaken idea of denouncing pleasure and
            praising pain was born and I will give you a complete account of the
            system, and expound the actual teachings of the great explorer of
            the truth, the master-builder of human happiness.
          </Text>
        </View>
        {/* -------------------- further reading/related articles -------------------- */}

        {/* -------------------- shopping suggestions -------------------- */}

        {/* -------------------- recipes -------------------- */}

        {/* -------------------- search tags -------------------- */}
      </ScrollView>
      {/* ---------------------------------------- Navigation Main Bottom */}
      <PlantBottomNav navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  test: {
    backgroundColor: "orange",
  },
});
export default PlantPortrait;

// unused from this component >>
{
  /* ----------------------------------------------------- Navigation Main Top */
}
{
  /* <SafeAreaView style={StylePlants.navMainTop}>
<View
  to="/myGarden"
  underlayColor="white"
  style={StylePlants.navTopItem}
>
  <View style={StylePlants.navTopElements}>
    <Image
      source={require("../../../assets/icons/png/back-button.png")}
      style={{
        height: 50,
        width: 50,
        margin: 5,
      }}
    />
  </View>
</View>
</SafeAreaView> */
}
