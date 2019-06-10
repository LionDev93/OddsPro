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

class RaceCard2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      cardInfo: null,
    };
  }

  handleViewRef = ref => (this.view = ref);

  cardPress = async () => {
    const {getCardInfo, card, cardInfo} = this.props
    
      
      await getCardInfo(card.racenum)

    
    

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
    const { racenum, stakeprize, ctime, classcode, distance, racename, trackcode, coursecode, runnernum,   } = this.props.card;

    const time = moment(ctime).format('HH:MM')

    
    return (
      <TouchableOpacity style={styles.cardContainer} onPress={this.cardPress}>
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
                      <Text style={styles.bonus}>參加馬匹: {runnernum}</Text>
                    </Col>
                  <Col>
                    <Text style={styles.track}>{coursecode}</Text>
                  </Col>
                </Row>
                
                  {/* <Row style={{ height: 20 }}>
                    <Col>
                      <Text style={styles.bonus}>參加馬匹: {runnernum}</Text>
                    </Col>
                  </Row> */}
                
                {stakeprize == null ? (
                  <React.Fragment />
                ) : (
                  <Text style={styles.total}>總投注: {stakeprize}元</Text>
                )}
              </View>
            </ImageBackground>
          </Col>
        </Row>
      </TouchableOpacity>
    );
  };

  oddsPageHandler = (racenum, dateText) => {
    this.props.navigation.navigate("odd", {racenum, dateText});
  };

  openHorseHandler = () => {
    this.props.openHorseInfoHandler();
  };

  renderOpenOddsButton = (racenum, dateText) => {
    return(
 <TouchableOpacity onPress={this.oddsPageHandler.bind(this, racenum, dateText)}>
    <Image
                source={require("../../assets/percentage.png")}
                style={styles.oc_icon}
                resizeMode="contain"
              />
    </TouchableOpacity>
    )
   
  }

  renderCardOpen = () => {
    const { racenum, stakeprize, ctime, classcode, distance, racename, trackcode, coursecode, runnernum,   } = this.props.card;
    const { dateText } = this.props
    const list = this.props.cardInfo.horseViewList
    
    return (
      <TouchableOpacity style={styles.oc_container} onPress={this.cardPress}>
        <Row style={this.props.card.trackcode != "草地" ? styles.header1 : styles.header}>
          <Col style={styles.h_middle}>
            {/* <Button transparent onPress={this.oddsPageHandler}>
              <Image
                source={require("../../assets/percentage.png")}
                style={styles.oc_icon}
                resizeMode="contain"
              />
            </Button> */}
            {this.renderOpenOddsButton(racenum, dateText)}
          </Col>
          <Col style={styles.h_middle}>
            <Text style={styles.headerText}>{`第 ${this.props.card.racenum} 場`}</Text>
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
            <ScrollView>
            {
                list.map(i => this.renderHorseItem(i))
              }
            </ScrollView>
              
           

            </Grid>
        </Row>
      </TouchableOpacity>
    );
  };

  renderHorseItem = (item) => {
    const { runnerno, barrierdrawno, horsenamechs, handicapweight, jockynamechs, trainernamechs, currentrating,    } = item

    return (
      <TouchableOpacity onPress={this.openHorseHandler} key={runnerno}>
      <Row 
              style={{ height: 40, marginBottom: 10 }}
              
            >
              <Col style={{ flex: 1.8 }}>
                <Text style={styles.oc_text}>{runnerno} / {barrierdrawno}</Text>
              </Col>
              <Col style={{ flex: 5, flexDirection: "row" }}>
                <Image
                  source={require("../../assets/horse_avatar.png")}
                  style={styles.icon}
                />
                <Text style={styles.oc_text}>{horsenamechs}</Text>
              </Col>
              <Col style={{ flex: 5 }}>
                <Row style={{ height: 20 }}>
                  <Image
                    source={require("../../assets/rider_icon.png")}
                    style={styles.smallIcon}
                  />
                  <Text style={styles.oc_text_sub}>{jockynamechs}</Text>
                  <Image
                    source={require("../../assets/match_icon.png")}
                    style={styles.smallIcon}
                  />
                  <Text style={styles.oc_text_sub}>???</Text>
                </Row>
                <Row>
                  <Image
                    source={require("../../assets/train_icon.png")}
                    style={styles.smallIcon}
                  />
                  <Text style={styles.oc_text_sub}>{trainernamechs}</Text>
                  <Image
                    source={require("../../assets/weight_icon.png")}
                    style={styles.smallIcon}
                  />
                  <Text style={styles.oc_text_sub}>{handicapweight}</Text>
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
                  {currentrating / 100}
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
                  ??
                </Text>
              </Col>
            </Row>
      </TouchableOpacity>
       
    )
  }

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
    message: state.global.message,
  };
};

const actionCreator = {
  getCardInfo: Actions.getCardInfo,
};

export default connect(
  mapState,
  actionCreator
)(RaceCard2);