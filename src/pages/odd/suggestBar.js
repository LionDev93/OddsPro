import React from "react";
import { View, ImageBackground, Image } from "react-native";
import { Container, Content, Text, Button, Grid, Col, Row } from "native-base";
import styles from "./style";

class SuggestBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  openSuggestBar = () => {
    this.props.openSuggestBarHandler()
  }

  render() {
    return (
      <Grid style={{position: 'absolute', bottom: 0,  width: '100%', paddingHorizontal: 10}}> 
        <Row style={styles.suggestBg}>
          <Col style={{ flex: 2 }}>
            <Text style={styles.suggestDate}>13:32:55</Text>
          </Col>
          <Col style={{ flex: 8 }}>
            <Text style={styles.suggestText}>
              XX 有大手下注, 賠率下跌 XX%
            </Text>
          </Col>

          <Col style={{ flex: 1 }}>
            <Button transparent onPress={this.openSuggestBar}>
              <Image
                source={require("../../assets/footericon.png")}
                style={{ height: 50, width: 50, marginTop: -40 }}
                resizeMode="contain"
              />
            </Button>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default SuggestBar;
