import React from "react";
import { View, ImageBackground, Image } from "react-native";
import {
  Container,
  Content,
  Text,
  Button,
  Grid,
  Col,
  Row,
  Thumbnail
} from "native-base";
import * as Animatable from "react-native-animatable";

import styles from "./style";

class OpenRaceCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  oddsPageHandler = () => {
    this.props.navigation.navigate("odd");
  };

  openHorseHandler = () => {
    this.props.openHorseInfoHandler();
  };

  handleViewRef = ref => this.view = ref;
  
  componentDidMount(){
    this.bounce()
  }

  bounce = () => this.view.bounceInDown(1800).then(endState => console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'));
  

  render() {
    const { number } = this.props;
    return (
      <Animatable.View ref={this.handleViewRef} style={styles.oc_container}>
        <Row style={styles.header}>
          <Col style={styles.h_middle}>
            <Button transparent onPress={this.oddsPageHandler}>
              <Image
                source={require("../../assets/percentage.png")}
                style={styles.oc_icon}
                resizeMode="contain"
              />
            </Button>
          </Col>
          <Col style={styles.h_middle}>
            <Text style={styles.headerText}>{`第 ${number} 場`}</Text>
          </Col>
          <Col style={{ alignItems: "flex-end" }}>
            <Image
              source={require("../../assets/horse_1.png")}
              style={styles.oc_horse_icon}
              resizeMode="contain"
            />
          </Col>
        </Row>

        <Row
          style={{
            height: 300,
            backgroundColor: "#ffffff",
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10
          }}
        >
          <Grid>
            <Row style={{ height: 40, marginBottom: 10 }}>
              <Col style={{ flex: 1.5 }}>
                <Text style={styles.subHeaderText}>馬號/檔位</Text>
              </Col>
              <Col style={{ flex: 4 }}>
                <Text style={styles.subHeaderText}>馬匹資料</Text>
              </Col>
              <Col style={{ flex: 4 }}>
                <Text style={styles.subHeaderText}>臨場資料</Text>
              </Col>
              <Col style={{ flex: 1.5 }}>
                <Text style={styles.subHeaderText}>獨贏</Text>
              </Col>
              <Col style={{ flex: 1.8 }}>
                <Text style={styles.subHeaderText}>AI評分</Text>
              </Col>
            </Row>

            <Row style={{ height: 40, marginBottom: 10 }}>
              <Col style={{ flex: 1.5 }}>
                <Text style={styles.oc_text}>1 / 6</Text>
              </Col>
              <Col
                style={{ flex: 5, flexDirection: "row" }}
                onTouchEndCapture={this.openHorseHandler}
              >
                <Image
                  source={require("../../assets/horse_avatar.png")}
                  style={styles.icon}
                />
                <Text style={styles.oc_text}>放馬過來</Text>
              </Col>
              <Col style={{ flex: 5 }}>
                <Row style={{ height: 20 }}>
                  <Image
                    source={require("../../assets/rider_icon.png")}
                    style={styles.smallIcon}
                  />
                  <Text style={styles.oc_text_sub}>利敬國</Text>
                  <Image
                    source={require("../../assets/match_icon.png")}
                    style={styles.smallIcon}
                  />
                  <Text style={styles.oc_text_sub}>單邊眼罩</Text>
                </Row>
                <Row>
                  <Image
                    source={require("../../assets/train_icon.png")}
                    style={styles.smallIcon}
                  />
                  <Text style={styles.oc_text_sub}>告東尼</Text>
                  <Image
                    source={require("../../assets/weight_icon.png")}
                    style={styles.smallIcon}
                  />
                  <Text style={styles.oc_text_sub}>133</Text>
                </Row>
              </Col>
              <Col style={{ flex: 1.5 }}>
                <Text
                  style={[
                    styles.oc_text,
                    {
                      backgroundColor: "#ff8585",
                      color: "#fcfcfc",
                      textAlign: "center"
                    }
                  ]}
                >
                  2.3
                </Text>
              </Col>
              <Col style={{ flex: 1.8 }}>
                <Text
                  style={[
                    styles.oc_text,
                    {
                      backgroundColor: "#ebebeb",
                      color: "#dc9908",
                      textAlign: "center"
                    }
                  ]}
                >
                  67
                </Text>
              </Col>
            </Row>

            <Row style={{ height: 40, marginBottom: 10 }}>
              <Col style={{ flex: 1.5 }}>
                <Text style={styles.oc_text}>2 / 5</Text>
              </Col>
              <Col style={{ flex: 5, flexDirection: "row" }}>
                <Image
                  source={require("../../assets/horse_avatar.png")}
                  style={styles.icon}
                />
                <Text style={styles.oc_text}>放馬過來</Text>
              </Col>
              <Col style={{ flex: 5 }}>
                <Row style={{ height: 20 }}>
                  <Image
                    source={require("../../assets/rider_icon.png")}
                    style={styles.smallIcon}
                  />
                  <Text style={styles.oc_text_sub}>利敬國</Text>
                  <Image
                    source={require("../../assets/match_icon.png")}
                    style={styles.smallIcon}
                  />
                  <Text style={styles.oc_text_sub}>單邊眼罩</Text>
                </Row>
                <Row>
                  <Image
                    source={require("../../assets/train_icon.png")}
                    style={styles.smallIcon}
                  />
                  <Text style={styles.oc_text_sub}>告東尼</Text>
                  <Image
                    source={require("../../assets/weight_icon.png")}
                    style={styles.smallIcon}
                  />
                  <Text style={styles.oc_text_sub}>133</Text>
                </Row>
              </Col>
              <Col style={{ flex: 1.5 }}>
                <Text
                  style={[
                    styles.oc_text,
                    {
                      backgroundColor: "#ff8585",
                      color: "#fcfcfc",
                      textAlign: "center"
                    }
                  ]}
                >
                  2.3
                </Text>
              </Col>
              <Col style={{ flex: 1.8 }}>
                <Text
                  style={[
                    styles.oc_text,
                    {
                      backgroundColor: "#ebebeb",
                      color: "#dc9908",
                      textAlign: "center"
                    }
                  ]}
                >
                  67
                </Text>
              </Col>
            </Row>
          </Grid>
        </Row>
      </Animatable.View>
    );
  }
}

export default OpenRaceCard;
