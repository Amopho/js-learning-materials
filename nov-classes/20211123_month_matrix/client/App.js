import React from "react";

import { StyleSheet, Text, SafeAreaView, View, Image } from "react-native";

import colors from "./app/config/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";

// navigator funktionality >>
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// elements >>
import { Button } from "react-native";

// Landing Page ++ SignIn ++ LogIn >>
import Landing from "./app/screens/0_SignLogInScreens/1_LandingPage";
import SignIn from "./app/screens/0_SignLogInScreens/2_SignInPage";
import LogIn from "./app/screens/0_SignLogInScreens/3_LogInPage";

// Screen components for navigator >>
import Today from "./app/screens/1_MainScreens/1_Today";
import Overview from "./app/screens/1_MainScreens/2_Overview";
import MyGarden from "./app/screens/1_MainScreens/3_MyGarden";
import Community from "./app/screens/1_MainScreens/4_Community";

import SearchMenu from "./app/screens/3_SearchMenuScreens/SearchMenu";
// import SettingsMenu from "./app/screens/4_SettingsScreens/SettingsMenu";

import QuickView from "./app/screens/2_PlantScreens/1_QuickView";
import PlantPortrait from "./app/screens/2_PlantScreens/2_PlantPortrait";
import Diary from "./app/screens/2_PlantScreens/3_Diary";

// piece components >>
import NavMainBottom from "./app/components/2_NavComponents/NavMainBottom";
import NavMainTop from "./app/components/2_NavComponents/NavMainTop";

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{}}>
        {/* ----------------------------------------- LandingPage ++ SignIn ++ LogIn */}
        <Stack.Screen name="LandingPage" component={Landing} options={{}} />
        <Stack.Screen name="SignIn" component={SignIn} options={{}} />
        <Stack.Screen name="LogIn" component={LogIn} options={{}} />
        {/* Main Screens ----------------------------------------------------- */}
        <Stack.Group
          screenOptions={{
            header: (props) => <NavMainTop {...props} />,
          }}
        >
          <Stack.Screen name="Today" component={Today} options={{}} />
          <Stack.Screen name="Overview" component={Overview} options={{}} />
          <Stack.Screen name="MyGarden" component={MyGarden} options={{}} />
          <Stack.Screen name="Community" component={Community} options={{}} />
        </Stack.Group>

        {/* Screens accessible from top nav----------------------------------- */}
        <Stack.Screen
          name="SearchMenu"
          component={SearchMenu}
          options={{ title: "Search Menu" }}
        />

        {/* Screens accessible from Today------------------------------------- */}
        {/* Screens accessible from Overview---------------------------------- */}
        {/* Screens accessible from MyGarden---------------------------------- */}
        <Stack.Group
          screenOptions={
            {
              // headerLeft: () => (
              //   <Button
              //     onPress={() => alert("This is a button placeholder for the custom back button!")}
              //     title="<"
              //     color="blue"
              //   />
              // ),
            }
          }
        >
          <Stack.Screen name="QuickView" component={QuickView} options={{}} />
          <Stack.Screen
            name="PlantPortrait"
            component={PlantPortrait}
            options={{}}
          />
          <Stack.Screen name="Diary" component={Diary} options={{}} />
        </Stack.Group>
        {/* Screens accessible from MyCommunity------------------------------- */}
        {/* Screens accessible from ------------------------------------------ */}
        {/* <Stack.Screen
          name="SettingsMenu"
          component={SettingsMenu}
          options={{ title: "Search Menu" }}
        /> */}
        {/* Screens accessible from ------------------------------------------ */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
