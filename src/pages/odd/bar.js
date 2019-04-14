import React from "react";
import { View, ImageBackground, Image } from "react-native";
import { Container, Content, Text, Button, Grid, Col, Row } from "native-base";
import styles from "./style";

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col style={styles.left}>
            <Text>13:32:55</Text>
            <Text>上一場</Text>
          </Col>
          <Col style={styles.left}>
            <Text>xxxx 有大手下注, 賠率下跌 xx %</Text>
          </Col>

          <Col style={styles.right}>
            
            <Text>icon</Text>
          </Col>
        </Row>
        
      </Grid>
      
    );
  }
}

export default FirstScreen;
