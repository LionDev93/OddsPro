import { StyleSheet, Dimensions } from "react-native";
// import Colors from '../../theme/Colors';

const dm = Dimensions.get("screen");

export default StyleSheet.create({
  container:{
    top: dm.height - 200,
  },
  wechat: {
    width: '80%',
    //height: '172',
    //borderRadius: 30,
    backgroundColor: "#01cb24",
    alignSelf: 'center',
    marginBottom: 30,
    
  },
  text: {
    
    color: '#ffffff',
    //fontFamily: 'FZLTZHK -- GBK 1-0',
    fontSize: 24,
    fontWeight: 'bold',
    //lineHeight: 48,
    flex: 7,

  },
  icon: {
    width: 40, height: 40, flex: 3

  },
  facebook: {
    width: '80%',
    backgroundColor: '#4465b2',
    //backgroundColor: '#01cb24',
    
    alignSelf: 'center',
    
  },
});
