import React from "react";
import { View, ImageBackground, Image } from "react-native";
import { Container, Content, Text, Button } from "native-base";
import styles from "./style";

class OddsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  

  render() {
    return (
      <ImageBackground
        source={require("../../assets/bg_first.png")}
        style={{ width: "100%", height: "100%", backgroundColor: "black" }}
        resizeMode="contain"
      >
        <Container style={{backgroundColor: 'transparent'}}>
          <Content padder style={styles.container}>
            <Text>2019年3月10日,星期日, 沙田</Text>
          </Content>
        </Container>
      </ImageBackground>
    );
  }
}


export default FirstScreen;
