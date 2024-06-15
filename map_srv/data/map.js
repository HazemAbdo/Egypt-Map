const { randomParty } = require("../utils/map");

const governorateNames = [
  "Al Beheira Governorate",
  "Dakahlieh",
  "Iskanderiya",
  "Kalyoubia",
  "Al Giza",
  "Sohag",
  "Al Gharbiyah",
  "Al Minufiyah",
  "Al Gharbiyah",
  "Al Wadi al Jadid",
  "Asyut",
  "Daqahliyah",
  "Dumyat",
  "Kafr al Shaykh",
  "Sharqiya",
  "South Sinai",
  "North Sinai",
  "Port Said",
  "Ismallia",
  "Suez",
  "Faiyum",
  "Marsa Matruh",
  "Minya",
  "Qena",
  "Aswan",
  "luxor",
  "Red Sea",
];
const governoratesMarkers = [
  {
    governorate: governorateNames[0],
    coordinate: { lat: 30.982347899662308, lng: 30.1991663 },
    infoWindowContent: randomParty(governorateNames[0]),
  },
  {
    governorate: governorateNames[1],
    coordinate: { lat: 30.91320699966701, lng: 31.4982162 },
    infoWindowContent: randomParty(governorateNames[1]),
  },
  {
    governorate: governorateNames[2],
    coordinate: { lat: 31.16666699965039, lng: 29.883332999999997 },
    infoWindowContent: randomParty(governorateNames[2]),
  },
  {
    governorate: governorateNames[3],
    coordinate: { lat: 30.299999999713826, lng: 31.3 },
    infoWindowContent: randomParty(governorateNames[3]),
  },
  {
    governorate: governorateNames[4],
    coordinate: { lat: 29.76061469976169, lng: 31.2983139 },
    infoWindowContent: randomParty(governorateNames[4]),
  },
  {
    governorate: governorateNames[5],
    coordinate: { lat: 26.441354700118442, lng: 31.7046971 },
    infoWindowContent: randomParty(governorateNames[5]),
  },
  {
    governorate: governorateNames[6],
    coordinate: { lat: 30.824450699673218, lng: 31.002032 },
    infoWindowContent: randomParty(governorateNames[6]),
  },
  {
    governorate: governorateNames[7],
    coordinate: { lat: 30.499999999697586, lng: 30.999999999999993 },
    infoWindowContent: randomParty(governorateNames[7]),
  },
  {
    governorate: governorateNames[8],
    coordinate: { lat: 30.839300299672168, lng: 30.996342900000002 },
    infoWindowContent: randomParty(governorateNames[8]),
  },
  {
    governorate: governorateNames[9],
    coordinate: { lat: 24.98914630025891, lng: 29.001954199999997 },
    infoWindowContent: randomParty(governorateNames[9]),
  },
  {
    governorate: governorateNames[10],
    coordinate: { lat: 27.29219270002545, lng: 30.879283699999995 },
    infoWindowContent: randomParty(governorateNames[10]),
  },
  {
    governorate: governorateNames[11],
    coordinate: { lat: 30.92109799966647, lng: 31.49935629999999 },
    infoWindowContent: randomParty(governorateNames[11]),
  },
  {
    governorate: governorateNames[12],
    coordinate: { lat: 31.333332999640408, lng: 31.750000000000004 },
    infoWindowContent: randomParty(governorateNames[12]),
  },
  {
    governorate: governorateNames[13],
    coordinate: { lat: 31.236512399646113, lng: 30.834871300000003 },
    infoWindowContent: randomParty(governorateNames[13]),
  },
  {
    governorate: governorateNames[14],
    coordinate: { lat: 30.79999999967497, lng: 31.8 },
    infoWindowContent: randomParty(governorateNames[14]),
  },
  {
    governorate: governorateNames[15],
    coordinate: { lat: 28.99999999983744, lng: 34 },
    infoWindowContent: randomParty(governorateNames[15]),
  },
  {
    governorate: governorateNames[16],
    coordinate: { lat: 30.5, lng: 33.6 },
    infoWindowContent: randomParty(governorateNames[16]),
  },
  {
    governorate: governorateNames[17],
    coordinate: { lat: 31.25654, lng: 32.28411 },
    infoWindowContent: randomParty(governorateNames[17]),
  },
  {
    governorate: governorateNames[18],
    coordinate: { lat: 30.60427, lng: 32.27225 },
    infoWindowContent: randomParty(governorateNames[18]),
  },
  {
    governorate: governorateNames[19],
    coordinate: { lat: 29.97371, lng: 32.52627 },
    infoWindowContent: randomParty(governorateNames[19]),
  },
  {
    governorate: governorateNames[20],
    coordinate: { lat: 29.30995, lng: 30.8418 },
    infoWindowContent: randomParty(governorateNames[20]),
  },
  {
    governorate: governorateNames[21],
    coordinate: { lat: 31.3529, lng: 27.23725 },
    infoWindowContent: randomParty(governorateNames[21]),
  },
  {
    governorate: governorateNames[22],
    coordinate: { lat: 28.087097, lng: 30.76184 },
    infoWindowContent: randomParty(governorateNames[22]),
  },
  {
    governorate: governorateNames[23],
    coordinate: { lat: 26.155061, lng: 32.716012 },
    infoWindowContent: randomParty(governorateNames[23]),
  },
  {
    governorate: governorateNames[24],
    coordinate: { lat: 24.088938, lng: 32.899829 },
    infoWindowContent: randomParty(governorateNames[24]),
  },
  {
    governorate: governorateNames[25],
    coordinate: { lat: 25.687243, lng: 32.639636 },
    infoWindowContent: randomParty(governorateNames[25]),
  },
  {
    governorate: governorateNames[26],
    coordinate: { lat: 24.6826, lng: 34.1532 },
    infoWindowContent: randomParty(governorateNames[26]),
  },
];

const mapCenter = { lat: 30.033333, lng: 31.233334 };

const regionsCoordinates = [
  {
    region: "Al Qahra el kobra",
    coordinates: [
      { lat: 29.723587496169017, lng: 31.326717789062492 },
      { lat: 30.318464136546204, lng: 31.732200996998934 },
      { lat: 30.315424261146028, lng: 31.345560060818354 },
      { lat: 30.358354875568814, lng: 30.5493764505015 },
      { lat: 29.924730900048704, lng: 30.81384166738353 },
    ],
    color: "red",
  },
  {
    region: "Canal Cities",
    coordinates: [
      { lat: 31.39091212552171, lng: 31.843075210937492 },
      { lat: 31.2156691604935, lng: 32.33880268632767 },
      { lat: 30.533628962800826, lng: 32.45830958593749 },
      { lat: 29.888031693054877, lng: 32.66704982031249 },
    ],
    color: "blue",
  },
  {
    region: "Upper Egypt",
    coordinates: [
      { lat: 29.472374761026224, lng: 30.49171125944801 },
      { lat: 29.305310641421638, lng: 31.458553726562492 },
      { lat: 26.42113227868283, lng: 32.11773341406249 },
      { lat: 26.00162195704034, lng: 33.010310027516724 },
      { lat: 23.935606788098223, lng: 33.20548130699293 },
      { lat: 21.925470301547918, lng: 32.3653621090732 },
      { lat: 22.019302309955528, lng: 30.887264664062492 },
      { lat: 26.902220522791062, lng: 30.821346695312492 },
      { lat: 28.642136861983367, lng: 30.381893570312492 },
    ],
    color: "green",
  },
  {
    region: "Sinai Peninsula",
    coordinates: [
      { lat: 30.996199474402466, lng: 32.55718653906249 },
      { lat: 31.193761598911355, lng: 34.21612208593749 },
      { lat: 29.477610935983186, lng: 34.85332911718749 },
      { lat: 27.799955643364893, lng: 34.23809474218749 },
      { lat: 29.219051181119333, lng: 32.91973536718749 },
    ],
    color: "yellow",
  },
  {
    region: "Western Desert",
    coordinates: [
      { lat: 30.618757404721052, lng: 29.733700210937492 },
      { lat: 31.1655636035269, lng: 25.229305679687492 },
      { lat: 22.063749147414512, lng: 25.4244136241732 },
      { lat: 21.982050755814097, lng: 30.796162545860323 },
    ],
    color: "yellow",
  },
  {
    region: "Eastern Desert",
    coordinates: [
      { lat: 30.314620737926262, lng: 32.230047089613564 },
      { lat: 29.209462306726156, lng: 31.634334976562492 },
      { lat: 26.005851409311834, lng: 33.16924307233045 },
      { lat: 22.12022109350049, lng: 33.68386675418079 },
      { lat: 21.978569573840662, lng: 36.60550979162275 },
    ],
    color: "yellow",
  },
  {
    region: "Wagh Bahri",
    coordinates: [
      { lat: 31.240739589096904, lng: 31.766170914062492 },
      { lat: 31.50338420288005, lng: 25.207333023437492 },
      { lat: 30.967942800789075, lng: 27.811092789062492 },
      { lat: 31.024447778520788, lng: 29.821590835937492 },
    ],
    color: "blue",
  },
  {
    region: "Delta",
    coordinates: [
      { lat: 30.404466092603315, lng: 31.418680278390088 },
      { lat: 31.106244370928636, lng: 31.933270495657357 },
      { lat: 31.273610288200736, lng: 30.909237320312492 },
      { lat: 30.996199474402466, lng: 30.090755874999992 },
    ],
    color: "green",
  },
];

module.exports = { governoratesMarkers, mapCenter, regionsCoordinates };
