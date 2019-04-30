import { StyleSheet, Dimensions } from "react-native";
// import Colors from '../../theme/Colors';

const dm = Dimensions.get("screen");

export default StyleSheet.create({
  title: {
    color: "#ffffff",

    fontSize: 20, //60
    fontWeight: "400"
  },
  memberType: {
    color: "#ffffff",
    fontSize: 10, //30
    fontWeight: "400"
  },
  memberTypeWrapper: {
    borderRadius: 5,
    backgroundColor: "#fb5707",
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    width: '80%'
  },
  point: {
    color: "#ffffff",
    fontSize: 30, //130
    fontWeight: "400",
    marginBottom: 6
  },
  pointText: {
    color: "#ffffff",
    fontSize: 13, //36
    fontWeight: "400"
  },
  pointBg: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 0,
    backgroundColor: "#cccccc",
    opacity: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  moneyBg: {
    backgroundColor: "#ffbc00",
    
    padding: 5,
  },
  moneyButton:{
    alignSelf: 'center',
  },
  shareBg: {
    backgroundColor: "#12ff00",
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: -10,
    padding: 5,
  },

  configHeaderRow: {
    marginTop: 30,
    marginBottom: 10,
  },
  configBodyTopRow: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: "#ffffff",
    padding: 10,

  },
  configBodyRow: {
    backgroundColor: "#ffffff",
    padding: 10,
  },
  configBodyBottomRow: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: "#ffffff",
    padding: 10,
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
  autoBg: {
    borderRadius: 5,
    backgroundColor: "#cccccc",
    padding: 5,
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  promotionHeaderRow: {
    marginTop: 30,
    marginBottom: 10,
  },
  promotionBodyTopRow: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: "#f10d38",
    padding: 10,
  },
  promotionBodyRow: {
    backgroundColor: "#ffffff",
    padding: 10,
  },
  promotionBodyBottomRow: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: "#ffffff",
    padding: 10,
  },
  logout: {
    borderRadius: 5,
    backgroundColor: "#ffffff",
    width: "100%",
    marginTop: 30,
    marginBottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 30,
    width: 30
  },
  promotionVIP:{
    borderRadius: 5,
    backgroundColor: 'rgba(77, 77, 77, 0.5)',
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',

  },
  buttonVIPWrapper: {
    shadowColor: 'rgba(12, 5, 13, 0.75)',
    shadowOffset: { width: 3, height: -4 },
    shadowRadius: 2.5,
    borderRadius: 5,
    backgroundColor: '#e5e5e5',
    padding: 10,
  },
  buttonVIP: {
    color: '#6c0101',
    fontSize: 16,
    fontWeight: '700',

  },
  moreBg : {
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
  moreBodyTopRow: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: "#ffffff",
    padding: 10,
  },
  moreBodyRow: {
    backgroundColor: "#ffffff",
    padding: 10,
  },
  moreBodyBottomRow: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: "#ffffff",
    padding: 10,
  },
  shareHeader:{
    backgroundColor: '#0ec001',
    width: '100%',
    padding: 10,
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  shareBody:{
    padding: 20,
  },
  moneyHeader:{
    backgroundColor: '#fbbf07',
    width: '100%',
    padding: 10,
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  moneyBody:{
    padding: 20,
  },
  moneyItem:{
    borderRadius: 10,
    backgroundColor: '#0000ff',
    padding: 30,
    width: '100%',
    height: 200,
    alignItems:'center'
  },
});
