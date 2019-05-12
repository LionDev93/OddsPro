import React from "react";
import { View, ImageBackground, Image, ScrollView } from "react-native";
import {
  Container,
  Content,
  Text,
  Button,
  Grid,
  Col,
  Row,
  Icon
} from "native-base";
import styles from "./style";
import * as Animatable from "react-native-animatable";
import { TouchableOpacity } from "react-native-gesture-handler";

class RaceCard2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  handleViewRef = ref => (this.view = ref);

  cardPress = () => {
    
      this.view
        .flipOutX(500)
        .then(endState =>
          {
            this.setState({
              isOpen: !this.state.isOpen
            })
            this.view.fadeIn(500)
          }
        );

      // this.view
      //   .fadeOut(100)
      //   .then(endState =>
      //     {
      //       this.setState({
      //         isOpen: !this.state.isOpen
      //       })
      //       this.view.flipInX(1000)
      //     }
      //   );

      // this.view
      //   .flipInX(1000)
      //   .then(endState =>
      //     {
      //       this.setState({
      //         isOpen: !this.state.isOpen
      //       })
      //       //this.view.fad(1000)
      //     }
      //   );
     
  };

  renderCardClosed = () => {
    const { number, type, numHorse, winAmount, total } = this.props;
    return (
      <TouchableOpacity style={styles.cardContainer} onPress={this.cardPress}>
        <Row>
          <Col style={type == "orange" ? styles.left1 : styles.left}>
            <Text style={styles.fieldLabel}>{`第 ${number} 場`}</Text>
            <Text style={styles.fieldText}>草地</Text>

            <Icon
              name="bell-o"
              type="FontAwesome"
              style={type == "orange" ? styles.bell1 : styles.bell}
            />

            <Text style={styles.time}>12:30 開跑</Text>
          </Col>
          <Col style={styles.right}>
            <ImageBackground
              source={
                type == "orange"
                  ? require("../../assets/sand_bg.png")
                  : require("../../assets/grass_bg.png")
              }
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
                      <Text
                        style={{
                          color: "white",
                          fontSize: 13,
                          paddingTop: 10,
                          paddingLeft: 30
                        }}
                      >
                        第一班
                      </Text>
                    </ImageBackground>
                  </Col>
                </Row>

                <Row style={{ height: 20, marginTop: 10 }}>
                  <Col>
                    <Text style={styles.bonus}>獎金: ${winAmount}</Text>
                  </Col>

                  <Col>
                    <Text style={styles.track}>C+3 賽道</Text>
                  </Col>
                </Row>
                {type == "orange" ? (
                  <React.Fragment />
                ) : (
                  <Row style={{ height: 20 }}>
                    <Col>
                      <Text style={styles.bonus}>參加馬匹: {numHorse}</Text>
                    </Col>
                  </Row>
                )}
                {type == "orange" ? (
                  <React.Fragment />
                ) : (
                  <Text style={styles.total}>總投注: {total}元</Text>
                )}
              </View>
            </ImageBackground>
          </Col>
        </Row>
      </TouchableOpacity>
    );
  };

  renderCardOpen = () => {
    const { number, type, numHorse, winAmount, total } = this.props;
    return (
      <View style={styles.oc_container}>
        <Row style={type == "orange" ? styles.header1 : styles.header} onTouchEndCapture={this.cardPress}>
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

            <Row
              style={{ height: 40, marginBottom: 10 }}
              onTouchEndCapture={this.openHorseHandler}
            >
              <Col style={{ flex: 1.5 }}>
                <Text style={styles.oc_text}>1 / 6</Text>
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
      </View>
    );
  };

  render() {
    return (
      <Animatable.View ref={this.handleViewRef}>
        {!this.state.isOpen ? this.renderCardClosed() : this.renderCardOpen()}
      </Animatable.View>
    );
  }
}

export default RaceCard2;