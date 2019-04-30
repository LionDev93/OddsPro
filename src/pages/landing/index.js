import React from "react";
import { View, ImageBackground, Image } from "react-native";
import { Container, Content, Text, Button } from "native-base";
import styles from "./style";

class LandingScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  loginHandler = () => {
    this.props.navigation.navigate('app')
  }

  render() {
    return (
      <ImageBackground
        source={require("../../assets/bg.png")}
        style={{ width: "100%", height: "100%", backgroundColor: "black" }}
        resizeMode="contain"
      >
        <View style={styles.container}>
          <Button style={styles.wechat} onPress={this.loginHandler}>
            <Image
              source={require("../../assets/wechat_icon.png")}
              style={styles.icon}
              resizeMode="contain"
            />
            <Text style={styles.text}>微信登錄</Text>
          </Button>

          <Button style={styles.facebook} onPress={this.loginHandler}>
            <Image
              source={require("../../assets/fb_icon.png")}
              style={styles.icon}
              resizeMode="contain"
            />
            <Text style={styles.text} >Facebook 登錄</Text>
          </Button>
        </View>
      </ImageBackground>
    );
  }
}

export default LandingScreen;
