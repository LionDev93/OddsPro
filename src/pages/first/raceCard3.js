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
import moment from 'moment'
import { connect } from "react-redux";
import * as Actions from "../../redux/action";

class RaceCard3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      cardInfo: null,
    };
  }

  handleViewRef = ref => (this.view = ref);

  cardPress = async () => {
    const {getCardInfo, getRaceOdds, card, cardInfo} = this.props


      await getCardInfo(card.raceid, card.racenum)
      await getRaceOdds(card.racenum, "win")



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
    const { racenum, stakeprize, posttime, classcode, distance, racename, trackcode, coursecode, runnernum,   } = this.props.card;

    const time = moment(posttime).format('HH:mm')


    return (
      <View style={styles.cardContainer} onPress={this.cardPress}>
        <Row>
          <Col style={trackcode != "草地" ? styles.left1 : styles.left}>
            <Text style={styles.fieldLabel}>{`第 ${racenum} 場`}</Text>
            <Text style={styles.fieldText}>{trackcode}</Text>

            <Icon
              name="bell-o"
              type="FontAwesome"
              style={trackcode != "草地" ? styles.bell1 : styles.bell}
            />

            <Text style={styles.time}>{time} 開跑</Text>
          </Col>
          <Col style={styles.right}>
            <ImageBackground
              source={
                trackcode != "草地"
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
                    <Text style={styles.name}>{racename.substring(0,5)}- </Text>
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

                <Row style={{ height: 20, marginTop: 10 }}>
                  {/* <Col>
                    <Text style={styles.bonus}>獎金: ${stakeprize}</Text>
                  </Col> */}
                  <Col>
                      <Text style={styles.bonus}>01 - 華麗再現</Text>
                    </Col>
                  <Col>
                    <Text style={styles.track}>1.7</Text>
                  </Col>
                </Row>
                <Row style={{ height: 20, marginTop: 0 }}>
                  {/* <Col>
                    <Text style={styles.bonus}>獎金: ${stakeprize}</Text>
                  </Col> */}
                  <Col>
                      <Text style={styles.bonus}>02 - 華再現</Text>
                    </Col>
                  <Col>
                    <Text style={styles.track}>16</Text>
                  </Col>
                </Row>
                <Text style={styles.total}>Win rate: 20.5</Text>
               

               
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
    message: state.global.message,
  };
};

const actionCreator = {
  getCardInfo: Actions.getCardInfo,
  getRaceOdds: Actions.getRaceOdds,
};

export default connect(
  mapState,
  actionCreator
)(RaceCard3);
