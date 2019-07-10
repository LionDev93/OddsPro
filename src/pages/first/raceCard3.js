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
  Icon,
  Spinner
} from "native-base";
import styles from "./style";
import * as Animatable from "react-native-animatable";
import { TouchableOpacity } from "react-native-gesture-handler";
import moment from "moment";
import { connect } from "react-redux";
import * as Actions from "../../redux/action";
import timer from "react-native-timer";

class RaceCard3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      cardInfo: null
    };
  }

  handleViewRef = ref => (this.view = ref);

  cardPress = async () => {
    const { getCardInfo, getRaceOdds, card, cardInfo } = this.props;

    this.setState({
      isOpen: !this.state.isOpen
    });
    //this.view.fadeIn(500);
    //await getCardInfo(card.raceid, card.racenum);
    //await getRaceOdds(card.racenum, "win");
  };

  renderCardClosed = () => {
    const {
      racenum,
      classcode,
      distance,
      racename,
      trackcodehk,
      horses,
      //odds,
      aitips
    } = this.props.card;

    let count = 0;

      horses.forEach(item => {
        let ha = item.runnerno
        if (aitips.includes(ha)) {
          count++;
        }
      });

    return (
      <View style={styles.cardContainerDone} onPress={this.cardPress}>
        <Row>
          <Col style={trackcodehk != "草地" ? styles.left1done : styles.leftdone}>
            <Text style={styles.fieldLabel}>{`第 ${racenum} 場`}</Text>
            <Text style={styles.fieldText}>{trackcodehk}</Text>

            {/*<Icon
              name="bell-o"
              type="FontAwesome"
              style={trackcode != "草地" ? styles.bell1 : styles.bell}
            />*/}

            <Text style={styles.finishrace}>已跑完</Text>
          </Col>
          <Col style={styles.right}>
            <ImageBackground
              source={
                trackcodehk != "草地"
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
                    <Text style={styles.name}>
                      {racename.substring(0, 5)}-{" "}
                    </Text>
                    <Text style={styles.sub}>{distance}米</Text>
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
                          paddingTop: 5,
                          paddingLeft: 30
                        }}
                      >
                        {classcode}
                      </Text>
                    </ImageBackground>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    {horses
                      .map((horse, i) => {
                        const { runnerno, finishPosition, name } = horse;
                        const intRank = parseInt(finishPosition);
                        const rankText = ["", "冠軍", "亞軍", "季軍"];
                        return (
                          <Row style={{ height: 20 }} key={i}>
                            <Col>
                              <Text style={styles.winner2}>
                                {rankText[intRank]
                                  ? rankText[intRank] + ": "
                                  : ""}
                                {runnerno} - {name}
                              </Text>
                            </Col>
                          </Row>
                        );
                      })}
                  </Col>
                  <Col>
                    <Row style={{ height: 30, marginTop: 20, marginLeft:15 }} >
                      <Col>
                        <Text style={styles.winner3}>
                        命中率: {Math.round((count / 3) * 100)}% 
                        </Text>
                      </Col>
                    </Row>
                    <Row style={{ height: 30, marginTop: 0}}>
                      <Col style={{flex: 1, flexDirection: 'row'}}>
                      <Image
                      source={require("../../assets/logo_icon.png")}
                      style={styles.oldcard_icon}
                      />
                      <Text style={styles.winner1}>AI 預測結果{"\n"}{aitips}</Text>
                      </Col>
                    </Row>
                    
                  </Col>
                  {/*
                  <Col>
                    {odds.map((odd, i) => {
                      const { type, data } = odd;
                      const typeText = {
                        win: '獨贏',
                        pla: '位置',
                        qin: '連贏',
                        qpl: '位置Q',
                      };
                      return (
                        <View key={i}>
                          {data.map((item, i) => {
                            const { horses, odd } = item;
                            return (
                              <Row key={i}>
                                <Col>
                                  <Text>{i == 0 ? typeText[type] : ''}</Text>
                                </Col>
                                <Col>
                                  <Text>{horses.map(horse => parseInt(horse)).join(',')}</Text>
                                </Col>
                                <Col>
                                  <Text>${odd*10}</Text>
                                </Col>
                              </Row>
                            );
                          })}
                        </View>
                      );
                    })}
                  </Col>
                  */}
                </Row>
              </View>
            </ImageBackground>
          </Col>
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

const mapState = state => {
  return {
    cardInfo: state.global.cardInfo,
    odds: state.global.odds,
    message: state.global.message
  };
};

const actionCreator = {
  getCardInfo: Actions.getCardInfo,
  getRaceOdds: Actions.getRaceOdds
};

export default connect(
  mapState,
  actionCreator
)(RaceCard3);
