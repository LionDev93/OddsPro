import { StyleSheet, Dimensions } from "react-native";
// import Colors from '../../theme/Colors';

const dm = Dimensions.get("screen");

export default StyleSheet.create({
  full: {
    width: dm.width,
    height: dm.height,
    alignItems: "center",
    justifyContent: "center"
  },

  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "transparent" },
  header: { height: 50, backgroundColor: "#537791" },
  text: { textAlign: "center", fontWeight: "100" },
  dataWrapper: { marginTop: -1, flex: 1 },
  row: { height: 40, backgroundColor: "#E7E6E1" },
  date: {
    //color: "#ffffff",
    //fontFamily: 'Adobe Heiti Std',
    fontSize: 20,
    fontWeight: "400",
    lineHeight: 48
  },
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  closeBtn:{
    marginRight: 44,
  }
});
