import { StyleSheet, Dimensions } from "react-native";
// import Colors from '../../theme/Colors';

const dm = Dimensions.get("screen");

//ODD PAGE
export default StyleSheet.create({
  container: {
    // marginTop: 67,
  },
  // CARD
  left: {
    flex: 2
  },
  right: {
    flex: 8
  },
  icon: {
    height: 30,
    width: 30
  },
  date: {
    color: "#ffffff",
    //fontFamily: 'Adobe Heiti Std',
    fontSize: 20,
    fontWeight: "400",
    lineHeight: 48
    // marginTop: 10
  },
  headerBg: {
    backgroundColor: "#ffc000",
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  headerTextLeft: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
    paddingTop: 5
  },
  headerText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700"
  },
  headerTextRight: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
    paddingBottom: 5
  },
  headerLeft: {
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  headerMiddle: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center"
  },
  headerRight: {
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  row1Bg: {
    backgroundColor: "#ebebeb",
    paddingTop: 10
  },
  row1ColBg: {
    borderRadius: 5,
    borderColor: "#cccccc",
    borderStyle: "solid",
    borderWidth: 1,
    backgroundColor: "#e1e1e1",
    marginHorizontal: 2
  },
  row1ColBgActive: {
    borderRadius: 5,
    borderColor: '#ff0042',
    borderStyle: "solid",
    borderWidth: 1,
    backgroundColor: '#ff0042',
    marginHorizontal: 2
  },
  row1ColText: {
    color: "#9b9b9b",
    fontSize: 13,
    fontWeight: "700",
    padding: 2.5
  },
  row1ColTextActive: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "700",
    padding: 2.5
  },
  horsesBg: {
    backgroundColor: "#ebebeb",
    padding: 10
  },
  row2ColBg: {
    borderRadius: 5,
    backgroundColor: "#ea983e",
    borderStyle: "solid",
    borderWidth: 1,
    marginHorizontal: 2,
    borderColor: "#ea983e",
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    width: 80,
    height: 80,
  },
  row3ColBg: {
    borderRadius: 5,
    backgroundColor: "#f20f5f",
    borderStyle: "solid",
    borderWidth: 1,
    marginHorizontal: 2,
    borderColor: "#f20f5f",
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    width: 80,
    height: 80,
  },
  row4ColBg: {
    borderRadius: 5,
    backgroundColor: "#bf0ff2",
    borderStyle: "solid",
    borderWidth: 1,
    marginHorizontal: 2,
    borderColor: "#bf0ff2",
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    width: 80,
    height: 80,
  },
  row2ColTitleBg: {
    padding: 10,
    marginHorizontal: 2
  },
  row2ColTitle: {
    color: "#727272",
    fontSize: 16,
    fontWeight: "700"
  },
  rowText: {
    color: "white"
  },
  circle: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "white",
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  row5Bg: {
    width: "100%",

    borderRadius: 5,
    borderColor: "#cccccc",
    borderStyle: "solid",
    borderWidth: 1,
    backgroundColor: "#e1e1e1",
    padding: 0,
    alignItems: "center"
  },
  row5Text: {
    color: "#9b9b9b",
    fontSize: 20,
    fontWeight: "700"
  },

  row6Text: {
    color: "#727272",

    fontSize: 20,
    fontWeight: "700"
  },
  row6Text1: {
    color: "#727272",

    fontSize: 16,
    fontWeight: "700"
  },
  row6col1: {
    flex: 8
  },
  row6col2: {
    flex: 1.5
  },

  row7Text: {
    color: "#777777",
    fontSize: 14,
    fontWeight: "400",
    paddingTop: 5
  },
  row7col2: {
    flex: 1.5,
    backgroundColor: "#f20f5f",
    padding: 5,
    alignItems: "center"
    // backgroundColor: '#ebebeb',
  },
  row7col3: {
    flex: 1.5,
    backgroundColor: "#ea983e",
    alignItems: "center",
    padding: 5
    // backgroundColor: '#ebebeb',
  },
  row7Text1: {
    color: "#fcfcfc",
    fontFamily: "Roboto",
    fontSize: 13,
    fontWeight: "400"
  },

  row8Col1: {
    width: "100%",

    borderRadius: 5,
    backgroundColor: "#ea983e",
    paddingVertical: 5,
  },
  row8Col1: {
    width: "100%",

    borderRadius: 5,
    backgroundColor: "#ea983e",
    flexDirection: "row",
    alignItems: "center"
  },
  icon: {
    width: 40,
    height: 40
  },
  row8Col1Text: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "400",
    marginLeft: 10
  },

  row9Col1: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  row9Col1Text: {
    color: "#727272",
    fontSize: 13,
    fontWeight: "400",
    marginRight: 10
  },
  input:{
    width: '30%',
    height: 25,

  },

  row10Text:{
    color: '#727272',

    fontSize: 13,
    fontWeight: '400',
   
  },
  // SUGGEST BAR
  suggestBg:{
    //marginVertical: 20,
    borderRadius: 5,
    backgroundColor: '#111111',
    padding: 10,
    height: 80
  },
  suggestDate:{
    color: '#ffffff',

    fontSize: 13,
    fontWeight: '400',
  },
  suggestText:{
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '400',
  },
  modalContainer:{
    width: '90%',
    height: '70%',
    backgroundColor: 'black',
    position:'absolute',
    bottom: 0,
    left: 0
  },
  textBlack60: {
    color: "#707070",
    fontSize: 20,
    fontWeight: "400"
  },
  
  textBlack100: {
    color: "#707070",
    fontSize: 30,
    fontWeight: "400"
  },
  textWhite60: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "400"
  },
  textBlack48: {
    color: "#707070",
    fontSize: 16,
    fontWeight: "400"
  },
  textBlack36: {
    color: "#707070",
    fontSize: 13,
    fontWeight: "400"
  },
  textWhite36: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "400"
  },
  suggestBg1:{
    padding: 10,
    height: 60,
  }
});
