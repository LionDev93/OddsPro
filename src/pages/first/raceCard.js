import React from "react";
import { View, ImageBackground, Image } from "react-native";
import { Container, Content, Text, Button, Grid, Col, Row } from "native-base";
import styles from "./style";

class RaceCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    return (
      <Grid style={styles.cardContainer}>
        <Col style={styles.left}>
          <Text style={styles.fieldLabel}>第 1 場</Text>
          <Text style={styles.fieldText}>草地</Text>
          <Image
            source={require("../../assets/bell.png")}
            style={styles.icon}
            resizeMode="contain"
          />
          <Text style={styles.time}>12:30 開跑</Text>
        </Col>
        <Col style={styles.right}>
          <ImageBackground
            source={require("../../assets/card_bg.png")}
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "white",
              borderBottomRightRadius: 10,
              borderTopRightRadius: 10
            }}
            resizeMode="stretch"
          >
            <View
              style={{
                padding: 10,
                flex: 1,
                borderBottomRightRadius: 10,
                borderTopRightRadius: 10
              }}
            >
              <Row style={{ height: 30, marginTop: 5 }}>
                <Col style={{ flex: 8, flexDirection: "row", height: 30 }}>
                  <Text style={styles.name}>紅掌花讓賽 - </Text>
                  <Text style={styles.sub}>1200米</Text>
                </Col>
                {/* <Col style={{ flex: 2 , height: 30}}>
              <Image
                source={require("../../assets/horse-label.png")}
                style={styles.horseIcon}
                resizeMode="contain"
              />
            </Col> */}
              </Row>

              <Row style={{ height: 20, marginTop: 10 }}>
                <Col>
                  <Text style={styles.bonus}>獎金: $2,625,000</Text>
                </Col>

                <Col>
                  <Text style={styles.track}>C+3 賽道</Text>
                </Col>
              </Row>
              <Row style={{ height: 20 }}>
                <Col>
                  <Text style={styles.bonus}>參加馬匹: 4</Text>
                </Col>
              </Row>

              <Text style={styles.total}>總投注: 30,430,304元</Text>
            </View>
          </ImageBackground>
        </Col>
      </Grid>
    );
  }
}

export default RaceCard;
