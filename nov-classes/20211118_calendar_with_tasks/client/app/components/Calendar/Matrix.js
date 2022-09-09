// The state, when a user clicks on a different date in the calendar, it'll change the state to use the new date.
//   const [currentDate, setCurrentDate] = useState("");

//   useEffect(() => {
//     var year = this.state.activeDate.getFullYear();
//     var month = this.state.activeDate.getMonth();
//     var firstDay = new Date(year, month, 1).getDay();
//   });

//   const generateMatrix = () => {
//     var matrix = [];
//     // Create header
//     matrix[0] = this.weekDays;
//   };

let monthNames = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

var weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// import React, { useState, useEffect } from "react";
// import { View, Text } from "react-native";

// let monthNames = [
//   "Januar",
//   "Februar",
//   "März",
//   "April",
//   "Mai",
//   "Juni",
//   "Juli",
//   "August",
//   "September",
//   "Oktober",
//   "November",
//   "Dezember",
// ];

// var nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// export default function generateMatrix() {
//   // The state, when a user clicks on a different date in the calendar, it'll change the state to use the new date.
//   const [currentDate, setCurrentDate] = useState("");
//   var matrix = [];
//   // Create header
//   var weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//   matrix[0] = this.weekDays;
//   var year = this.state.activeDate.getFullYear();
//   var month = this.state.activeDate.getMonth();
//   var maxDays = this.nDays[month];
//   if (month == 1) {
//     // February
//     if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//       maxDays += 1;
//     }
//   }
//   var firstDay = new Date(year, month, 1).getDay();

//   return matrix;
// }
