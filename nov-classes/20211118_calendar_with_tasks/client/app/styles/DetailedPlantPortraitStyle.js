import { StyleSheet } from "react-native";
import colors from "../config/colors";

const detailedPlantPortraitStyles = StyleSheet.create({
  // shared properties
  border: { borderWidth: 1, borderColor: "blue" },

  // banderole area and inside
  banderoleArea: {
    borderWidth: 2,
    borderColor: "pink",
  },
  plantTitle: { color: "black", fontSize: 20, fontStyle: "italic" },
  plantVarietyName: { color: "lightgreen", fontSize: 20, fontStyle: "italic" },
  botanicalName: { color: "black", fontSize: 20, fontStyle: "italic" },

  // month boxes and containers (for seeding and harvest time)
  monthsOuterContainer: { display: "flex", flexDirection: "column" },
  monthsInnerContainer: { display: "flex", flexDirection: "row" },
  monthBox: { width: 25, height: 15, display: "flex", flexDirection: "row" },
  monthName: { borderColor: "yellow", color: "black", fontSize: 9 },

  // main content
  mainContent: { marginBottom: 90 },
});

export default detailedPlantPortraitStyles;
