import { StyleSheet } from "react-native";
import colors from "../config/colors";

const StyleMain = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  mainText: {
    marginTop: 100,
    color: "black",
    fontSize: 40,
    fontStyle: "italic",
    position: "absolute",
    textAlign: "center",
  },
  // ------------------------------ Navigation Main Top
  navMainTop: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  navTopItem: {},
  navTopElements: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "center",
  },
  navTopText: {
    fontSize: 30,
  },
  searchMenuWrapperRight: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  // SearchMenu
  searchMenuWrapper: {
    flexDirection: "column",
    height: 50,
    width: 50,
    justifyContent: "space-between",
    alignContent: "space-between",
  },
  searchMenuWrapperFirstRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchMenuWrapperSecondRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchMenuItem: {
    height: 23,
    width: 23,
    backgroundColor: colors.sage5,
    borderTopLeftRadius: 14,
    borderBottomRightRadius: 14,
    borderBottomColor: colors.sage75,
    borderStyle: "solid",
  },
  // Add Button
  addWrapper: {
    margin: 10,
    width: 50,
    height: 50,
    backgroundColor: colors.sage5,
    borderTopLeftRadius: 25,
    borderBottomRightRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  addText: {
    fontSize: 30,
  },
  // -------------------------------------- Banderole
  banderole: {
    marginTop: 90,
    height: 150,
    width: "100%",
    backgroundColor: colors.sage5,

    position: "absolute",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  // -------------------------------------- Navigation Main Bottom
  navMainBottom: {
    backgroundColor: "white",
    borderColor: "white",
    borderTopColor: colors.sage25,
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    height: 90,
    position: "absolute",
    bottom: 0,
  },
  navItem: {
    width: "25%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  navElements: {
    alignItems: "center",
    justifyContent: "center",
  },
  navText: {
    marginTop: 5,
  },
  quick: {
    alignItems: "center",
    justifyContent: "center",
    top: 400,
  },

  // -------------------------------------------------- active Tap (where am I?)
  active: { backgroundColor: colors.sage25 },
});

export default StyleMain;
