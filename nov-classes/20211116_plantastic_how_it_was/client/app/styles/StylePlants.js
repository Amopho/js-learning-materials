import { StyleSheet } from "react-native";
import colors from "../config/colors";

const StylePlants = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
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
    backgroundColor: "white",
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

  // -------------------------------------- Banderole
  banderole: {
    marginTop: 90,
    height: 150,
    width: "100%",
    borderColor: "white",
    borderBottomColor: colors.sage75,
    borderTopColor: colors.sage75,
    borderStyle: "solid",
    borderWidth: 2,

    position: "absolute",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  // -------------------------------------- Navigation Main Bottom
  navMainBottom: {
    // width: "100%",
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
    width: "33.3%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  active: {
    backgroundColor: colors.sage5,
  },
  navElements: {
    alignItems: "center",
    justifyContent: "center",
  },
  navText: {
    marginTop: 5,
  },
  // -------------------------------------------------- active Tap (where am I?)
  active: { backgroundColor: colors.sage25 },
});
export default StylePlants;
