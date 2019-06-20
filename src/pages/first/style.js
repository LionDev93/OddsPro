import { StyleSheet, Dimensions } from "react-native";
// import Colors from '../../theme/Colors';

const dm = Dimensions.get("screen");

//FRIST PAGE
export default StyleSheet.create({
  container: {
    // marginTop: 67
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
  // CARD
  cardContainer: {
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: "#ffffff"
  },
  left: {
    flex: 2.2,
    backgroundColor: "#48ff00",
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
  right: {
    flex: 7.8,
    //padding: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10
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
  track: {
    fontWeight: "700",
    fontSize: 13,
    textAlign: "right"
  },
  name: {
    color: "#828282",
    fontWeight: "400",
    fontSize: 20
  },
  sub: {
    color: "#9d9d9d",
    paddingTop: 2.5,
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
    backgroundColor: "#48ff00",
    padding: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  header1: {
    backgroundColor: "#ffc000",
    padding: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  oc_container: {
    marginTop: 10,
    borderRadius: 10
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
