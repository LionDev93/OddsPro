import { StyleSheet, Dimensions } from "react-native";
// import Colors from '../../theme/Colors';

const dm = Dimensions.get("screen");

//FRIST PAGE
export default StyleSheet.create({
  container: {
    // marginTop: 67
    paddingLeft: 20,
  },
  date: {
    color: "#ffffff",
    //fontFamily: 'Adobe Heiti Std',
    fontSize: 20,
    fontWeight: "400",
    lineHeight: 48,

  },
  icon: {
    width: 40,
    height: 40
  },

  horseimg:{
    width: 40,
    height: 40,
    borderRadius:5
  },
  name:{
    width: 40,
    height: 40,
  
  },

  // CARD
  cardContainer: {
    borderRadius: 10,
    borderTopRightRadius: 0,
    marginTop: 10,
    backgroundColor: "#ffffff",
    height: 180
  },

  cardContainerDone: {
    borderRadius: 10,
    borderTopRightRadius: 0,
    marginTop: 10,
    backgroundColor: "#dddddd",

    height: 180
  },

  left: {
    flex: 2.2,
    backgroundColor: "#32b100",
    color: "#ffffff",
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    //alignItems: 'center',
    padding: 10
  },
  left1: {
    flex: 2.2,
    backgroundColor: "#ffc000",
    color: "#ffffff",
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    //alignItems: 'center',
    padding: 10
  },
  leftdone: {
    flex: 2.2,
    backgroundColor: "#316c1a",
    color: "#ffffff",
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    //alignItems: 'center',
    padding: 10
  },
  left1done: {
    flex: 2.2,
    backgroundColor: "#655116",
    color: "#ffffff",
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    //alignItems: 'center',
    padding: 10
  },

  right: {
    flex: 7.8,
    //padding: 10,
    borderBottomRightRadius: 10,
    // borderTopRightRadius: 10
  },
  //LEFT
  fieldLabel: {
    color: "#ffffff",
    fontSize: 20,
    marginTop: 30,
    fontWeight: "400"
  },
  fieldText: {
    color: "#ffffff",
    fontSize: 13,
    marginTop: 5,
    fontWeight: "700"
  },
  time: {
    color: "#ffffff",
    fontSize: 13,
    marginTop: 10,
    fontWeight: "700"
  },
  finishrace:{
    color: "#ffffff",
    fontSize: 16,
    marginTop: 25,
    marginLeft: 10,
    fontWeight: "900"
  },
  //RIGHT
  total: {
    color: "#999999",
    fontSize: 16,
    textAlign: "right",
    fontWeight: "300",
    right: 10,
    bottom: 10,
    position: "absolute"
  },
  bonus: {
    color: "#c0b376",
    fontSize: 13,
    fontWeight: "700"
  },
  winner3: {
    color: "#00cc60",
    fontSize: 16,
    fontWeight: "800",
    textAlign: 'right'
  },
  winner1: {
    color: "#cc003e",
    fontSize: 13,
    lineHeight:15,
    fontWeight: "700",
    textAlign: 'right'
  },
  winner2: {
    color: "#cc8600",
    fontSize: 13,
    fontWeight: "700"
  },
  track: {
    fontWeight: "700",
    fontSize: 13,
    textAlign: "right"
  },
  name: {
    color: "#828282",
    fontWeight: "400",
    fontSize: 16
  },
  sub: {
    color: "#9d9d9d",
    // paddingTop: 2.5,
    fontSize: 16,
    fontWeight: "400"
  },
  horseIcon: {
    width: 40,
    height: 60,
    right: 0,
    top: 0,
    position: "absolute"
  },
  //Open card
  header: {
    backgroundColor: "#32b100",
    padding: 15,
    borderTopLeftRadius: 10,
    // borderTopRightRadius: 10
  },
  header1: {
    backgroundColor: "#ffc000",
    padding: 15,
    borderTopLeftRadius: 10,
    // borderTopRightRadius: 10
  },
  oc_container: {
    marginTop: 10,
    borderRadius: 10,
    borderBottomRightRadius: 0,
  },
  headerText: {
    color: "#ffffff",
    fontWeight: "400",
    fontSize: 20,
    textAlign: "center",
    paddingTop: 5
  },
  subHeaderText: {
    color: "#999999",
    fontWeight: "400",
    fontSize: 12,
    padding: 5
  },
  oc_text: {
    color: "#777777",
    fontWeight: "400",
    fontSize: 13,
    padding: 5
  },
  oc_text_sub: {
    color: "#777777",
    fontWeight: "400",
    fontSize: 10,
    padding: 5
  },
  oc_icon: {
    width: 40,
    height: 40
  },
  oldcard_icon: {
    width: 50,
    height: 50,
    marginTop:-5
  },
  oc_horse_icon: {
    width: 80,
    height: 40,
    position: "absolute",
    right: -15,
    top: 0
  },
  smallIcon:{
    height: 15,
    width: 15,
  },
  textBlack60: {
    color: "#707070",
    fontSize: 20,
    fontWeight: "400"
  },
  textCardinnertitle: {
    color: "#707070",
    fontSize: 18,
    fontWeight: "400",
    paddingBottom: 10,
    textDecorationLine: "underline"
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
  textWhite72: {
    color: "#ffffff",
    fontSize: 25,
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
  textBlack22: {
    color: "#a9a9a9",
    fontSize: 8,
    fontWeight: "400"
  },
  textlist: {
    color: "#494949",
    fontSize: 13,
    lineHeight: 18,
    paddingBottom:8,
    borderBottomWidth: 0.5,
    borderColor: '#b6d7da',
    fontWeight: "400"
  },

  textlistresult:{
    color: '#fbb907',
    fontSize: 14,
    lineHeight: 18,
    paddingBottom:8,
    borderBottomWidth: 0.5,
    textAlign:'right',
    borderColor: '#b6d7da',
    fontWeight: "400"
  },


  textBlack30: {
    color: '#646464',
    fontSize: 10,
    fontWeight: "400"
  },
  ext_header:{
    width: '100%',
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#da3832',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  ext_circle: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#c20a02",
    backgroundColor: '#c20a02',
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -20,
  },
  ext_row:{
    marginVertical: 5,

  },
  textVIP48:{
    color: '#fb0707',
    fontSize: 16,
    fontWeight: "400"
  },
  textYellow48:{
    color: '#fbb907',
    fontSize: 16,
    fontWeight: "400"
  },
  col7: {
    flex:7
  },
  col3: {
    flex: 3,
    alignItems: 'flex-end',
  },
  bell: {
    width: 30, marginTop: 5, color:'red'
  },
  bell1: {
    width: 30, marginTop: 5, color:'blue'
  }
});
