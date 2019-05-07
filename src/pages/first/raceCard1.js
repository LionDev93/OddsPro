
import React from "react";
import { View, ImageBackground, Image } from "react-native";
import { Container, Content, Text, Button, Grid, Col, Row, Icon } from "native-base";
import styles from "./style";

class RaceCard1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    const {number} = this.props
    return (
      <Grid style={styles.cardContainer}>
        <Col style={styles.left1}>
          <Text style={styles.fieldLabel}>{`第 ${number} 場`}</Text>
          <Text style={styles.fieldText}>泥地</Text>
          {/* <Image
            source={require("../../assets/bell.png")}
            style={styles.icon}
            resizeMode="contain"
          /> */}
          <Icon name='bell-o' type='FontAwesome' style={{width: 30, marginTop: 5, color: 'blue'}}></Icon>
          {/* <BellIcon width='40' active={true} animate={true} /> */}

          <Text style={styles.time}>13:00 開跑</Text>
        </Col>
        <Col style={styles.right}>
          <ImageBackground
            source={require("../../assets/sand_bg.png")}
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
                  <Text style={styles.name}>小蒼蘭讓賽 - </Text>
                  <Text style={styles.sub}>1800米</Text>
                </Col>
                <Col style={{ flex: 4, height: 30, paddingBottom: 5 }}>
                  <ImageBackground
                    source={require("../../assets/horselabel.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      right: -10,
                      top: 0
                    }}
                    resizeMode="cover"
                  >
                    <Text style={{ color: "white", fontSize: 13, paddingTop: 10, paddingLeft: 30, }}>第四班</Text>
                  </ImageBackground>
                </Col>
              </Row>

              <Row style={{ height: 20, marginTop: 10 }}>
                <Col>
                  <Text style={styles.bonus}>獎金: $920,000</Text>
                </Col>

                <Col>
                  <Text style={styles.track}>全天候跑道</Text>
                </Col>
              </Row>
              

             
            </View>
          </ImageBackground>
        </Col>
      </Grid>
    );
  }
}

export default RaceCard1;
