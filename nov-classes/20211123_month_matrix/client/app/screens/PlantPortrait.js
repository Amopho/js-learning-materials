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
import { NativeRouter, Route, Link } from "react-router-native";
import colors from "../config/colors";
import MyGarden from "../screens/MyGarden";
import QuickView from "./QuickView.js";
// import PlantPortrait from "./PlantPortrait";
import Diary from "./Diary";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Task from "../components/Task";

import StylePlants from "../styles/StylePlants";
import detailedPlantPortraitStyles from "../styles/detailedPlantPortraitStyle";

// import image (temporary solution)
import tomatoPlant from "../../assets/images/roma_tomatoes.jpg";
import StyleMain from "../styles/StyleMain";

// import json for tomato plant (temporary solution)

const PlantPortrait = () => {
  return (
    <SafeAreaView style={StylePlants.container}>
      <NativeRouter>
        {/* ----------------------------------------------------- Navigation Main Top */}
        <View style={StylePlants.navMainTop}>
          <Link
            to="/myGarden"
            underlayColor="white"
            style={StylePlants.navTopItem}
          >
            <View style={StylePlants.navTopElements}>
              <Image
                source={require("../../assets/icons/png/back-button.png")}
                style={{
                  height: 50,
                  width: 50,
                  alignItems: "center",
                  margin: 5,
                }}
              />
            </View>
          </Link>
        </View>
        {/* --------------------------------------------------------------- Banderole */}
        <View style={[StylePlants.banderole]}>
          <Text style={detailedPlantPortraitStyles.plantTitle}>
            Name Pflanzensorte
          </Text>
          <Text style={detailedPlantPortraitStyles.plantVarietyName}>
            "Sortenname spezifisch"
          </Text>
          <Text style={detailedPlantPortraitStyles.botanicalName}>
            botanischer Name
          </Text>
          <View
            name="plant_time_container"
            style={detailedPlantPortraitStyles.banderoleArea}
          >
            <View
              name="plant_time_titles_container"
              style={detailedPlantPortraitStyles.banderoleArea}
            >
              <View
                name="plant_time_title"
                style={detailedPlantPortraitStyles.banderoleArea}
              ></View>
              <View
                name="plant_time_title"
                style={detailedPlantPortraitStyles.banderoleArea}
              ></View>
              <View
                name="plant_time_title"
                style={detailedPlantPortraitStyles.banderoleArea}
              ></View>
            </View>
            <View
              name="plant_time_months_outer_container"
              style={detailedPlantPortraitStyles.monthsOuterContainer}
            >
              <View
                name="plant_time_months_inner_container"
                style={detailedPlantPortraitStyles.monthsInnerContainer}
              >
                <View
                  name="plant_time_month"
                  style={[
                    detailedPlantPortraitStyles.border,
                    detailedPlantPortraitStyles.monthBox,
                  ]}
                >
                  <Text
                    name="month_name"
                    style={[
                      detailedPlantPortraitStyles.border,
                      detailedPlantPortraitStyles.monthName,
                    ]}
                  >
                    Jan
                  </Text>
                  <View
                    name="plant_time_month"
                    style={[
                      detailedPlantPortraitStyles.border,
                      detailedPlantPortraitStyles.monthBox,
                    ]}
                  >
                    <Text
                      name="month_name"
                      style={[
                        detailedPlantPortraitStyles.border,
                        detailedPlantPortraitStyles.monthName,
                      ]}
                    >
                      Jan
                    </Text>
                  </View>
                  <View
                    name="plant_time_month"
                    style={[
                      detailedPlantPortraitStyles.border,
                      detailedPlantPortraitStyles.monthBox,
                    ]}
                  >
                    <Text
                      name="month_name"
                      style={[
                        detailedPlantPortraitStyles.border,
                        detailedPlantPortraitStyles.monthName,
                      ]}
                    >
                      Jan
                    </Text>
                  </View>
                  <View
                    name="plant_time_month"
                    style={[
                      detailedPlantPortraitStyles.border,
                      detailedPlantPortraitStyles.monthBox,
                    ]}
                  >
                    <Text
                      name="month_name"
                      style={[
                        detailedPlantPortraitStyles.border,
                        detailedPlantPortraitStyles.monthName,
                      ]}
                    >
                      Jan
                    </Text>
                  </View>
                  <View
                    name="plant_time_month"
                    style={[
                      detailedPlantPortraitStyles.border,
                      detailedPlantPortraitStyles.monthBox,
                    ]}
                  >
                    <Text
                      name="month_name"
                      style={[
                        detailedPlantPortraitStyles.border,
                        detailedPlantPortraitStyles.monthName,
                      ]}
                    >
                      Jan
                    </Text>
                  </View>
                  <View
                    name="plant_time_month"
                    style={[
                      detailedPlantPortraitStyles.border,
                      detailedPlantPortraitStyles.monthBox,
                    ]}
                  >
                    <Text
                      name="month_name"
                      style={[
                        detailedPlantPortraitStyles.border,
                        detailedPlantPortraitStyles.monthName,
                      ]}
                    >
                      Jan
                    </Text>
                  </View>
                  <View
                    name="plant_time_month"
                    style={[
                      detailedPlantPortraitStyles.border,
                      detailedPlantPortraitStyles.monthBox,
                    ]}
                  >
                    <Text
                      name="month_name"
                      style={[
                        detailedPlantPortraitStyles.border,
                        detailedPlantPortraitStyles.monthName,
                      ]}
                    >
                      Jan
                    </Text>
                  </View>
                  <View
                    name="plant_time_month"
                    style={[
                      detailedPlantPortraitStyles.border,
                      detailedPlantPortraitStyles.monthBox,
                    ]}
                  >
                    <Text
                      name="month_name"
                      style={[
                        detailedPlantPortraitStyles.border,
                        detailedPlantPortraitStyles.monthName,
                      ]}
                    >
                      Jan
                    </Text>
                  </View>
                  <View
                    name="plant_time_month"
                    style={[
                      detailedPlantPortraitStyles.border,
                      detailedPlantPortraitStyles.monthBox,
                    ]}
                  >
                    <Text
                      name="month_name"
                      style={[
                        detailedPlantPortraitStyles.border,
                        detailedPlantPortraitStyles.monthName,
                      ]}
                    >
                      Jan
                    </Text>
                  </View>
                  <View
                    name="plant_time_month"
                    style={[
                      detailedPlantPortraitStyles.border,
                      detailedPlantPortraitStyles.monthBox,
                    ]}
                  >
                    <Text
                      name="month_name"
                      style={[
                        detailedPlantPortraitStyles.border,
                        detailedPlantPortraitStyles.monthName,
                      ]}
                    >
                      Jan
                    </Text>
                  </View>
                  <View
                    name="plant_time_month"
                    style={[
                      detailedPlantPortraitStyles.border,
                      detailedPlantPortraitStyles.monthBox,
                    ]}
                  >
                    <Text
                      name="month_name"
                      style={[
                        detailedPlantPortraitStyles.border,
                        detailedPlantPortraitStyles.monthName,
                      ]}
                    >
                      Jan
                    </Text>
                  </View>
                  <View
                    name="plant_time_month"
                    style={[
                      detailedPlantPortraitStyles.border,
                      detailedPlantPortraitStyles.monthBox,
                    ]}
                  >
                    <Text
                      name="month_name"
                      style={[
                        detailedPlantPortraitStyles.border,
                        detailedPlantPortraitStyles.monthName,
                      ]}
                    >
                      Dez
                    </Text>
                  </View>
                </View>
              </View>
              <View
                name="plant_time_months_inner_container"
                style={detailedPlantPortraitStyles.monthsInnerContainer}
              >
                <View
                  name="plant_time_month"
                  style={[
                    detailedPlantPortraitStyles.border,
                    detailedPlantPortraitStyles.monthBox,
                  ]}
                ></View>
                <View
                  name="plant_time_month"
                  style={[
                    detailedPlantPortraitStyles.border,
                    detailedPlantPortraitStyles.monthBox,
                  ]}
                ></View>
                <View
                  name="plant_time_month"
                  style={[
                    detailedPlantPortraitStyles.border,
                    detailedPlantPortraitStyles.monthBox,
                  ]}
                ></View>
                <View
                  name="plant_time_month"
                  style={[
                    detailedPlantPortraitStyles.border,
                    detailedPlantPortraitStyles.monthBox,
                  ]}
                ></View>
                <View
                  name="plant_time_month"
                  style={[
                    detailedPlantPortraitStyles.border,
                    detailedPlantPortraitStyles.monthBox,
                  ]}
                ></View>
                <View
                  name="plant_time_month"
                  style={[
                    detailedPlantPortraitStyles.border,
                    detailedPlantPortraitStyles.monthBox,
                  ]}
                ></View>
                <View
                  name="plant_time_month"
                  style={[
                    detailedPlantPortraitStyles.border,
                    detailedPlantPortraitStyles.monthBox,
                  ]}
                ></View>
                <View
                  name="plant_time_month"
                  style={[
                    detailedPlantPortraitStyles.border,
                    detailedPlantPortraitStyles.monthBox,
                  ]}
                ></View>
                <View
                  name="plant_time_month"
                  style={[
                    detailedPlantPortraitStyles.border,
                    detailedPlantPortraitStyles.monthBox,
                  ]}
                ></View>
                <View
                  name="plant_time_month"
                  style={[
                    detailedPlantPortraitStyles.border,
                    detailedPlantPortraitStyles.monthBox,
                  ]}
                ></View>
                <View
                  name="plant_time_month"
                  style={[
                    detailedPlantPortraitStyles.border,
                    detailedPlantPortraitStyles.monthBox,
                  ]}
                ></View>
                <View
                  name="plant_time_month"
                  style={[
                    detailedPlantPortraitStyles.border,
                    detailedPlantPortraitStyles.monthBox,
                  ]}
                ></View>
              </View>
              <View
                name="plant_time_months_inner_container"
                style={detailedPlantPortraitStyles.monthsInnerContainer}
              >
                <View
                  name="plant_time_month"
                  style={[
                    detailedPlantPortraitStyles.border,
                    detailedPlantPortraitStyles.monthBox,
                  ]}
                ></View>
                <View
                  name="plant_time_month"
                  style={[
                    detailedPlantPortraitStyles.border,
                    detailedPlantPortraitStyles.monthBox,
                  ]}
                ></View>
                <View
                  name="plant_time_month"
                  style={[
                    detailedPlantPortraitStyles.border,
                    detailedPlantPortraitStyles.monthBox,
                  ]}
                ></View>
                <View
                  name="plant_time_month"
                  style={[
                    detailedPlantPortraitStyles.border,
                    detailedPlantPortraitStyles.monthBox,
                  ]}
                ></View>
                <View
                  name="plant_time_month"
                  style={[
                    detailedPlantPortraitStyles.border,
                    detailedPlantPortraitStyles.monthBox,
                  ]}
                ></View>
                <View
                  name="plant_time_month"
                  style={[
                    detailedPlantPortraitStyles.border,
                    detailedPlantPortraitStyles.monthBox,
                  ]}
                ></View>
                <View
                  name="plant_time_month"
                  style={[
                    detailedPlantPortraitStyles.border,
                    detailedPlantPortraitStyles.monthBox,
                  ]}
                ></View>
                <View
                  name="plant_time_month"
                  style={[
                    detailedPlantPortraitStyles.border,
                    detailedPlantPortraitStyles.monthBox,
                  ]}
                ></View>
                <View
                  name="plant_time_month"
                  style={[
                    detailedPlantPortraitStyles.border,
                    detailedPlantPortraitStyles.monthBox,
                  ]}
                ></View>
                <View
                  name="plant_time_month"
                  style={[
                    detailedPlantPortraitStyles.border,
                    detailedPlantPortraitStyles.monthBox,
                  ]}
                ></View>
                <View
                  name="plant_time_month"
                  style={[
                    detailedPlantPortraitStyles.border,
                    detailedPlantPortraitStyles.monthBox,
                  ]}
                ></View>
                <View
                  name="plant_time_month"
                  style={[
                    detailedPlantPortraitStyles.border,
                    detailedPlantPortraitStyles.monthBox,
                  ]}
                ></View>
              </View>
            </View>
          </View>
        </View>
        {/* ----------------------------------------------------- Main Part */}
        <ScrollView style={detailedPlantPortraitStyles.mainContent}>
          <Text style={detailedPlantPortraitStyles}>CAN YOU SEE ME?</Text>
          <Text style={detailedPlantPortraitStyles}>
            The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum." Section 1.10.32 of "de
            Finibus Bonorum et Malorum", written by Cicero in 45 BC "Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
            quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?" 1914 translation by H. Rackham "But I must explain to you
            how all this mistaken idea of denouncing pleasure and praising pain
            was born and I will give you a complete account of the system, and
            expound the actual teachings of the great explorer of the truth, the
            master-builder of human happiness. No one rejects, dislikes, or
            avoids pleasure itself, because it is pleasure, but because those
            who do not know how to pursue pleasure rationally encounter
            consequences that are extremely painful. Nor again is there anyone
            who loves or pursues or desires to obtain pain of itself, because it
            is pain, but because occasionally circumstances occur in which toil
            and pain can procure him some great pleasure. To take a trivial
            example, which of us ever undertakes laborious physical exercise,
            except to obtain some advantage from it? But who has any right to
            find fault with a man who chooses to enjoy a pleasure that has no
            annoying consequences, or one who avoids a pain that produces no
            resultant pleasure?" Section 1.10.33 of "de Finibus Bonorum et
            Malorum", written by Cicero in 45 BC "At vero eos et accusamus et
            iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
            deleniti atque corrupti quos dolores et quas molestias excepturi
            sint occaecati cupiditate non provident, similique sunt in culpa qui
            officia deserunt mollitia animi, id est laborum et dolorum fuga. Et
            harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod maxime placeat facere possimus, omnis voluptas
            assumenda est, omnis dolor repellendus. Temporibus autem quibusdam
            et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
            voluptates repudiandae sint et molestiae non recusandae. Itaque
            earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
            voluptatibus maiores alias consequatur aut perferendis doloribus
            asperiores repellat." 1914 translation by H. Rackham "On the other
            hand, we denounce with righteous indignation and dislike men who are
            so beguiled and demoralized by the charms of pleasure of the moment,
            so blinded by desire, that they cannot foresee the pain and trouble
            that are bound to ensue; and equal blame belongs to those who fail
            in their duty through weakness of will, which is the same as saying
            through shrinking from toil and pain. These cases are perfectly
            simple and easy to distinguish. In a free hour, when our power of
            choice is untrammelled and when nothing prevents our being able to
            do what we like best, every pleasure is to be welcomed and every
            pain avoided. But in certain circumstances and owing to the claims
            of duty or the obligations of business it will frequently occur that
            pleasures have to be repudiated and annoyances accepted. The wise
            man therefore always holds in these matters to this principle of
            selection: he rejects pleasures to secure other greater pleasures,
            or else he endures pains to avoid worse pains."
          </Text>
        </ScrollView>
        {/* ---------------------------------------- Navigation Main Bottom */}
        <View style={StylePlants.navMainBottom}>
          <Link
            to="/quickView"
            underlayColor={colors.sage25}
            style={StylePlants.navItem}
          >
            <View style={StylePlants.navElements}>
              <Image
                source={require("../../assets/icons/png/fork.png")}
                style={{ height: 50, width: 50, alignItems: "center" }}
              />
              <Text style={StylePlants.navText}>Kurz {"&"} dreckig</Text>
            </View>
          </Link>

          <Link
            to="/plantPortrait"
            underlayColor={colors.sage25}
            style={[StylePlants.navItem, StylePlants.active]}
          >
            <View style={StylePlants.navElements}>
              <Image
                source={require("../../assets/icons/png/pflanzenPortrait.png")}
                style={{ height: 50, width: 50 }}
              />
              <Text style={StylePlants.navText}>Pflanzenportrait</Text>
            </View>
          </Link>

          <Link
            to="/diary"
            underlayColor={colors.sage25}
            style={StylePlants.navItem}
          >
            <View style={StylePlants.navElements}>
              <Image
                source={require("../../assets/icons/png/tageBuch.png")}
                style={{ height: 50, width: 50 }}
              />
              <Text style={StylePlants.navText}>Tagebuch</Text>
            </View>
          </Link>
        </View>
        {/* <Route exact path="/" component={Home} /> */}
        <Route path="/quickView" component={QuickView} />
        {/* <Route path="/plantPortrait" component={PlantPortrait} /> */}
        <Route path="/diary" component={Diary} />
        <Route path="/myGarden" component={MyGarden} />
        {/* <Route path="/community" component={Community} /> */}
      </NativeRouter>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // platformContainer: {
  //   flex: 1,
  //   paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  // },
});
export default PlantPortrait;
