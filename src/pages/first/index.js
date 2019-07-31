import React from "react";
import {
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
  RefreshControl
} from "react-native";
import {
  Container,
  Content,
  Text,
  Button,
  Header,
  Left,
  Right,
  Body,
  Title,
  Icon,
  Spinner,
  Grid,
  Col
} from "native-base";
import Modal from "react-native-modal";
import { ifIphoneX, isIphoneX } from "react-native-iphone-x-helper";
import { Overlay } from "react-native-elements";
import styles from "./style";
import RaceCard from "./raceCard";
import RaceCard1 from "./raceCard1";
import OpenRaceCard from "./openRaceCard";
import HorseInfo from "./extend";
import RaceCard2 from "./raceCard2";
import RaceCard3 from "./raceCard3";
import * as Animatable from "react-native-animatable";
import { connect } from "react-redux";
import * as Actions from "../../redux/action";
import timer from "react-native-timer";
import moment from "moment";

const { height } = Dimensions.get("window");

class FirstScreen extends React.Component {
  constructor(props) {
    super(props);
    console.log("firstscreen props:", props);
    this.state = {
      horseId: "",
      openHorseInfo: false,
      openCard: 0,
      isRefreshing: false,
      races: [
        {
          id: 1,
          type: "green",
          numHorse: 7,
          winAmount: 1000,
          total: 3000
        },
        {
          id: 2,
          type: "green",
          numHorse: 5,
          winAmount: 5000,
          total: 30000
        },
        {
          id: 3,
          type: "orange",
          numHorse: 9,
          winAmount: 9000,
          total: 27000
        },
        {
          id: 4,
          type: "orange",
          numHorse: 7,
          winAmount: 7000,
          total: 3000
        },
        {
          id: 5,
          type: "green",
          numHorse: 12,
          winAmount: 12000,
          total: 36000
        },
        {
          id: 6,
          type: "green",
          numHorse: 10,
          winAmount: 10000,
          total: 50000
        },
        {
          id: 7,
          type: "green",
          numHorse: 9,
          winAmount: 13000,
          total: 38000
        },
        {
          id: 8,
          type: "orange",
          numHorse: 7,
          winAmount: 18000,
          total: 3000
        },
        {
          id: 9,
          type: "orange",
          numHorse: 7,
          winAmount: 19000,
          total: 3000
        },
        {
          id: 10,
          type: "green",
          numHorse: 5,
          winAmount: 17000,
          total: 36000
        }
      ],

      elementPositionArray: []
    };
  }

  handleViewRef = ref => (this.view = ref);

  renderHorseInfo = () => {
    return (
      <Animatable.View style={{ flex: 1 }} ref={this.handleViewRef}>
        <HorseInfo horseId={this.state.horseId} />
      </Animatable.View>
    );
  };

  openHorseInfoHandler = horseId => {
    this.setState({ horseId: horseId, openHorseInfo: true });
  };

  componentDidMount() {
    this.setState({ isRefreshing: true });
    this.props.getCards();
    this.setState({ isRefreshing: false });
    timer.setInterval(
      this,
      "timer",
      () => {
        if (!this.props.cards) return;
        const { posttime } = this.props.cards && this.props.cards[0];

        if (
          moment()
            .utc()
            .isAfter(moment(posttime))
        )
          this.onRefresh();
      },
      60 * 1000
    );
  }

  onRefresh = () => {
    console.log("refresh called");
    this.setState({ isRefreshing: true });
    this.props.getCards();
    this.props.getPrevCards();
    this.setState({ isRefreshing: false });
  };

  handleScroll = e => {
    let scrollHeight =
      e.nativeEvent.contentOffset.y + e.nativeEvent.layoutMeasurement.height;
    if (scrollHeight == e.nativeEvent.contentSize.height) {
    }
    // console.log("nativeEvent:", e.nativeEvent)
  };

  calcElementPosition = () => {
    var array = [];
    array.push(0);
    const { dateText, cards, prevCards } = this.props;
    if (prevCards) {
      Object.keys(prevCards).map((group, i) => {
        array.push(array[array.length - 1] + 48);
        prevCards[group].map((group1, index) => {
          array.push(array[array.length - 1] + 180 + 10);
        });
      });
    }
    if (cards) {
      array.push(array[array.length - 1] + 48);

      cards.map((group, index) => {
        array.push(array[array.length - 1] + 180);
      });
    }
    this.setState({ elementPositionArray: array }, function() {});
  };
  handleScrollEndDrag = e => {
    console.log(
      "Scroll End Drag: ",
      e.nativeEvent.contentOffset.y,
      this.state.elementPositionArray
    );
    if (this.scrollView) {
      scrollPosY = e.nativeEvent.contentOffset.y;
      const array = this.state.elementPositionArray;
      for (var i = 0; i < array.length; i++) {
        const dist1 = scrollPosY - array[i];
        if (dist1 <= 0) {
          if (i == 0) this.scrollView._root.scrollToPosition(0, array[i], true);
          else {
            const distPrev = scrollPosY - array[i - 1];
            const distNext = scrollPosY - array[i];
            if (Math.abs(distPrev) > Math.abs(distNext)) {
              this.scrollView._root.scrollToPosition(0, array[i], true);
            } else {
              this.scrollView._root.scrollToPosition(0, array[i - 1], true);
            }
          }
          break;
        }
      }
    }
  };

  handleCreating = event => {
    console.log("added element: ", event.nativeEvent);
  };

  handleLayout = event => {
    console.log("layoutCalled: ", event.nativeEvent);
  };

  onContentSizeChange = (contentWidth, contentHeight) => {
    console.log("contentSizeChange: ", contentHeight);
    this.calcElementPosition();
  };

  render() {
    console.disableYellowBox = true;
    const { dateText, cards, prevCards } = this.props;
    // cards != null ? console.error(JSON.stringify(cards)) : ''
    console.log("precards: ", prevCards);
    console.log("cards: ", cards);
    return (
      <ImageBackground
        source={require("../../assets/firstpage_background.jpg")}
        style={{ width: "100%", height: "100%", backgroundColor: "black" }}
        resizeMode="cover"
      >
        <Container style={{ backgroundColor: "transparent" }}>
          <Header
            style={{ backgroundColor: "transparent", borderBottomWidth: 0 }}
          >
            <Grid>
              <Col size={1} />
              <Col
                size={5}
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Image
                  source={require("../../assets/logo.png")}
                  style={styles.icon}
                  resizeMode="contain"
                />
                <Title style={{ color: "white", marginLeft: 10 }}>
                  AI 賠率王
                </Title>
              </Col>
              <Col size={1} />
            </Grid>
          </Header>

          <Overlay
            animationType="fade"
            isVisible={this.state.openHorseInfo}
            windowBackgroundColor="rgba(255, 255, 255, 0)"
            overlayBackgroundColor="transparent"
            width="80%"
            height={isIphoneX() ? height - 85 : height - 65} //"90%" //DDT
            onBackdropPress={() => {
              this.view &&
                this.view
                  .slideOutRight(1000)
                  .then(() => this.setState({ openHorseInfo: false }));
              {
                /* this.setState({ openHorseInfo: false }); */
              }
            }}
            overlayStyle={{
              padding: 0,
              position: "absolute",
              right: 0,
              ...ifIphoneX(
                {
                  top: 85
                },
                {
                  top: 65
                }
              )
            }}
            containerStyle={{
              justifyContent: "flex-end",
              alignItems: "flex-end"
            }}
          >
            {this.renderHorseInfo()}
          </Overlay>

          <Content
            style={styles.container}
            scrollEnabled
            onScroll={this.handleScroll}
            // onScrollEndDrag={this.handleScrollEndDrag}
            onMomentumScrollEnd={this.handleScrollEndDrag}
            onLayout={this.handleLayout}
            onContentSizeChange={this.onContentSizeChange}
            // snapToAlignment="start"
            // snapToStart
            refreshControl={
              <RefreshControl
                refreshing={this.state.isRefreshing}
                onRefresh={this.onRefresh}
              />
            }
            ref={ref => {
              this.scrollView = ref;
            }}
          >
            {prevCards != null && this.showPrevCards(prevCards, false)}
            {dateText && Array.isArray(cards) ? (
              <Text style={styles.date} onLayout={this.handleCreating}>
                {dateText}
              </Text>
            ) : (
              <React.Fragment />
            )}
            {prevCards != null && this.showPrevCards(prevCards, true)}
            {cards != null && this.showCards(cards, dateText)}

            {cards == null && <Spinner />}
          </Content>
        </Container>
      </ImageBackground>
    );
  }

  showCards = (cards, dateText) => {
    const fake = [
      {
        raceid: "RACE_20190529_0005",
        racenum: 1,
        stakeprize: 920000,
        ctime: 1559006457446,
        classcode: "第4班",
        distance: "1200",
        runnernum: 12,
        racename: "FAKE FAKE",
        trackcode: "草地",
        coursecode: '"C" 賽道 - 向後移欄'
      },
      {
        raceid: "RACE_20190529_0005",
        racenum: 2,
        stakeprize: 920000,
        ctime: 1559006457446,
        classcode: "第4班",
        distance: "1200",
        runnernum: 12,
        racename: "FAKE FAKE",
        trackcode: "草地",
        coursecode: '"C" 賽道 - 向後移欄'
      },
      {
        raceid: "RACE_20190529_0005",
        racenum: 3,
        stakeprize: 920000,
        ctime: 1559006457446,
        classcode: "第4班",
        distance: "1200",
        runnernum: 12,
        racename: "FAKE FAKE",
        trackcode: "草地",
        coursecode: '"C" 賽道 - 向後移欄'
      }
    ];
    return (
      <View>
        {Array.isArray(cards)
          ? cards.map((item, i) => {
              return (
                <RaceCard2
                  key={i}
                  card={item}
                  dateText={dateText}
                  openHorseInfoHandler={this.openHorseInfoHandler}
                  navigation={this.props.navigation}
                  onLayout={this.handleCreating}
                />
              );
            })
          : fake.map((item, i) => {
              return (
                <RaceCard3
                  key={i}
                  card={item}
                  dateText={dateText}
                  //openHorseInfoHandler={this.openHorseInfoHandler}
                  navigation={this.props.navigation}
                  onLayout={this.handleCreating}
                />
              );
            })}
      </View>
    );
  };

  showPrevCards = (prevCards, raceDate) => {
    return (
      <View>
        {Object.keys(prevCards).map((group, i) => {
          const time = moment().format("YYYYMMDD"); //'20190710' CHANGETIME
          console.log(
            "prevCards",
            prevCards[group][0].raceid,
            time,
            prevCards[group][0].raceid.includes(time) && !raceDate
          );
          let show = true;
          if (raceDate) {
            if (prevCards[group][0].raceid.includes(time)) show = true;
            else show = false;
          } else {
            if (prevCards[group][0].raceid.includes(time)) show = false;
            else show = true;
          }
          //if race date
          if (!show) return <React.Fragment />;

          //if not race date
          return (
            <React.Fragment>
              {raceDate ? (
                <React.Fragment />
              ) : (
                <Text style={styles.date}>{group}</Text>
              )}

              {prevCards[group].map((card, i) => {
                const time = moment().format("YYYYMMDD");

                return (
                  <RaceCard3
                    key={i}
                    card={card}
                    //openHorseInfoHandler={this.openHorseInfoHandler}
                    navigation={this.props.navigation}
                    onLayout={this.handleCreating}
                  />
                );
              })}
            </React.Fragment>
          );
        })}
      </View>
    );
  };
}

/* <Title style={{ color: "white" }}>Waiting for upcoming race</Title> */

const mapState = state => {
  return {
    cards: state.global.cards,
    prevCards: state.global.prevCards,
    message: state.global.message,
    dateText: state.global.dateText
  };
};

const actionCreator = {
  getCards: Actions.getCards,
  getPrevCards: Actions.getLivePrevCards
};

export default connect(
  mapState,
  actionCreator
)(FirstScreen);
