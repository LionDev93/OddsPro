import React from "react";
import {
  View,
  ImageBackground,
  Image,
  TextInput,
  Dimensions,
  Modal,
  ScrollView,
  Alert,
  KeyboardAvoidingView
} from "react-native";
import {
  Container,
  Content,
  Text,
  Button,
  Header,
  Icon,
  Left,
  Body,
  Right,
  Title,
  Row,
  Col,
  Grid,
  Form,
  Item,
  Input
} from "native-base";
import { Overlay } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { connect } from "react-redux";
import * as Actions from "../../redux/action";
import styles from "./style";
import OddCard from "./oddCard";
import SuggestBar from "./suggestBar";
import timer from "react-native-timer";
import moment from "moment";

const dm = Dimensions.get("screen");

class OddsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.scroll = null;
    this.state = {
      allOddsVisible: false,
      openSuggestBar: false,

      messages: []
    };
  }

  backHandler = () => {
    this.props.navigation.goBack();
  };

  rightHandler = () => {
    this.props.navigation.navigate("profile");
  };

  openSuggestBar = async () => {
    if (this.props.raceAnalysis == null)
      await this.props.getRaceAnalysis(this.props.currentRaceID);

    if (this.props.raceAnalysis && this.props.raceAnalysis.data) {
      const { data, starttime } =
        this.props.raceAnalysis && this.props.raceAnalysis;
      console.log("raceAnalysis data", data);
      let currentTime = 1562755803//moment().utc().format("X") //Test:  currentTime = 1562754255
      let items = data.filter(
        item =>
          item.time <= currentTime
          
      );

      if (items) {
        this.setState({
          messages: [...items, ...this.state.messages.slice(0, 10)]
        });
      }

      console.log("raceAnalysis items items ", items);

      if (
        data &&
        moment()
          .utc()
          .isAfter(moment(starttime).utc())
      ) {
        timer.setInterval(
          this,
          "timer",
          () => {
            //console.log('raceAnalysis timer', data)
            
            currentTime++// = moment().utc().format("X") //Test:  currentTime++
            let item = data.filter(
              item =>
                item.time == currentTime
                // moment()
                //   .utc()
                //   .format("X")
            )[0];

            // item = {
            //   content: "洪荒駿駒在2019-07-03跑過第5班的比赛，排名第02",
            //   horsename: "洪荒駿駒",
            //   rank: "02",
            //   time: moment().format("X")
            // };

            //console.log("raceAnalysis timer item", item, moment().format("X"));
            if (item) {
              this.setState({
                messages: [item, ...this.state.messages.slice(0, 10)]
              });
            }
          },
          1000
        );
      }

      this.setState({ openSuggestBar: true });
    }
  };

  renderSuggestBar = () => {
    return (
      <Grid>
        <Row style={styles.suggestBg1}>
          <Col style={{ flex: 8 }}>
            <Text style={styles.textWhite60}>AI貼士和實時大數據分析</Text>
          </Col>
          <Col style={{ flex: 2 }}>
            <Button
              transparent
              onPress={() => this.setState({ openSuggestBar: false })}
            >
              <Image
                source={require("../../assets/footericon.png")}
                style={{ height: 70, width: 70, marginTop: -20 }}
                resizeMode="contain"
              />
            </Button>
          </Col>
        </Row>
        <ScrollView style={{ flex: 1 }}>
          {this.state.messages.length > 0 ? (
            this.state.messages.map(item => {
              return (
                <Row style={styles.suggestBg1}>
                  <Col style={{ flex: 2 }}>
                    <Text style={styles.suggestDate}>
                      {moment(item.time, "X").format("YYYY-MM-DD hh:mm:ss")}
                    </Text>
                  </Col>
                  <Col style={{ flex: 8 }}>
                    <Text style={styles.suggestText}>{item.content}</Text>
                  </Col>
                </Row>
              );
            })
          ) : (
            <React.Fragment />
          )}
        </ScrollView>

        <Row
          style={{
            position: "absolute",
            bottom: 0
          }}
        >
          <Col
            style={{
              backgroundColor: "red",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Button
              transparent
              style={{ alignSelf: "center" }}
              onPress={() => Alert.alert("Buy VIP")}
            >
              <Text style={{ color: "white" }}>升級成為VIP</Text>
            </Button>
          </Col>
          <Col
            style={{
              backgroundColor: "#ffba00",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Button
              transparent
              style={{ alignSelf: "center" }}
              onPress={() => Alert.alert("Share")}
            >
              <Text style={{ color: "white" }}>分享給朋友</Text>
            </Button>
          </Col>
        </Row>
      </Grid>
    );
  };

  async componentDidMount() {
    //this.scroll.scrollToEnd();
    const raceid = this.props.navigation.getParam("raceid", "");
    this.props.setCurrentRaceID(raceid);
    await this.props.getRaceAnalysis(raceid);

    console.log("raceAnalysis", this.props.raceAnalysis);
  }

  onRefreshRaceAnalysis = async () => {
    console.log("this.props.currentRaceID", this.props.currentRaceID);
    await this.props.getRaceAnalysis(this.props.currentRaceID);
    //this.render()
  };

  showAllOdds = () => {
    this.setState({ allOddsVisible: true });
  };

  renderAllOdds = () => {
    const TEXT_LENGTH = 300;
    const TEXT_HEIGHT = 14;
    const OFFSET = TEXT_LENGTH / 2 - TEXT_HEIGHT / 2;
    const length = "2019年3月10日,星期日, 沙田".length;
    //console.error(length)
    return (
      <View>
        <Text>2019年3月10日,星期日, 沙田</Text>
      </View>
    );
  };

  render() {
    const { openSuggestBar } = this.state;
    const raceid = this.props.navigation.getParam("raceid", "");
    const racenum = this.props.navigation.getParam("racenum", "");
    const dateText = this.props.navigation.getParam("dateText", "");

    //console.error(racenum)
    return (
      <ImageBackground
        source={require("../../assets/firstpage_background.jpg")}
        style={{ width: "100%", height: "100%", backgroundColor: "black" }}
        resizeMode="cover"
      >
        <Container style={{ backgroundColor: "transparent" }}>
          <Overlay
            isVisible={this.state.allOddsVisible}
            windowBackgroundColor="rgba(0, 0, 0, 0.7)"
            overlayBackgroundColor="#ebebeb"
            width="90%"
            height="80%"
            onBackdropPress={() => this.setState({ allOddsVisible: false })}
            overlayStyle={{ padding: 0, borderRadius: 10 }}
          >
            {this.renderAllOdds()}
          </Overlay>

          <Overlay
            isVisible={this.state.openSuggestBar}
            windowBackgroundColor="rgba(255, 255, 255, 0)"
            overlayBackgroundColor="#111111"
            width="95%"
            height="70%"
            onBackdropPress={() => this.setState({ openSuggestBar: false })}
            overlayStyle={{
              marginLeft: 10,
              padding: 0,
              position: "absolute",
              bottom: 0,
              left: 0
            }}
            containerStyle={{
              justifyContent: "flex-end",
              alignItems: "flex-end"
            }}
          >
            {this.renderSuggestBar()}
          </Overlay>

          {/* <Modal
              visible={this.state.openSuggestBar}
              animationType={'slide'}
              onRequestClose={() => this.setState({ openSuggestBar: false })}
          >
            <View style={styles.modalContainer}>
              <View style={styles.innerContainer}>
                <Text>This is content inside of modal component</Text>
                <Button
                    onPress={() => this.setState({ openSuggestBar: false })}
                    title="Close modal"
                >
                </Button>
              </View>
            </View>
          </Modal> */}

          <Header
            style={{ backgroundColor: "transparent", borderBottomWidth: 0 }}
          >
            <Left>
              <Button transparent onPress={this.backHandler}>
                <Icon name="arrow-back" style={{ color: "white" }} />
              </Button>
            </Left>
            <Body style={{ flexDirection: "row" }}>
              <Image
                source={require("../../assets/logo.png")}
                style={styles.icon}
                resizeMode="contain"
              />
              <Title style={{ color: "white" }}>AI 賠率王</Title>
            </Body>
            <Right>
              <Button transparent onPress={this.rightHandler}>
                <Image
                  source={require("../../assets/profile_icon.png")}
                  style={styles.icon}
                  resizeMode="contain"
                />
              </Button>
            </Right>
          </Header>
          <ScrollView
            padder
            style={{ flex: 1, padding: 10, marginBottom: 10 }}
            behavior="padding"
            enabled
            ref={scroll => {
              this.scroll = scroll;
            }}
          >
            <Text style={styles.date}>{dateText}</Text>

            <OddCard
              raceid={raceid}
              racenum={racenum}
              navigation={this.props.navigation}
              showAllOddsHandler={this.showAllOdds}
              onRefreshRaceAnalysis={this.onRefreshRaceAnalysis}
            />
          </ScrollView>
          {!openSuggestBar ? (
            <SuggestBar
              openSuggestBarHandler={this.openSuggestBar}
              text={
                !this.props.raceAnalysis
                  ? this.props.raceAnalysisMessage
                  : this.props.raceAnalysis.data[0].content
              }
              time={
                !this.props.raceAnalysis
                  ? ""
                  : this.props.raceAnalysis.data[0].time
              }
            />
          ) : (
            <React.Fragment />
          )}
        </Container>
      </ImageBackground>
    );
  }
}

const mapState = state => {
  return {
    currentRaceID: state.global.currentRaceID,
    raceAnalysisMessage: state.global.raceAnalysisMessage,
    raceAnalysis: state.global.raceAnalysis
  };
};

const actionCreator = {
  setCurrentRaceID: Actions.setCurrentRaceID,
  getRaceAnalysis: Actions.getRaceAnalysis
};

export default connect(
  mapState,
  actionCreator
)(OddsScreen);
