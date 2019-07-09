import React from "react";
import { View, ImageBackground, Image } from "react-native";
import { Container, Content, Text, Button, Grid, Col, Row } from "native-base";
import styles from "./style";
import moment from "moment";
import { connect } from "react-redux";
import * as Actions from "../../redux/action";
import timer from "react-native-timer";
class SuggestBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: null
    };
  }

  openSuggestBar = () => {
    this.props.openSuggestBarHandler();
  };

  async componentDidMount() {
    if (this.props.raceAnalysis == null)
      await this.props.getRaceAnalysis(this.props.currentRaceID);

    console.log("raceAnalysis componentDidMount", this.props.raceAnalysis);

    if (this.props.raceAnalysis && this.props.raceAnalysis.data) {
      const { data, starttime } =
        this.props.raceAnalysis && this.props.raceAnalysis;
      console.log("raceAnalysis componentDidMount", data);
      let currentTime = 1562755803; //moment().utc().format("X") //Test:  currentTime = 1562755803
      let items = data.filter(item => item.time <= currentTime);

      const last = items[items.length - 1];

      if (last) {
        this.setState({
          message: last
        });
      }

      //console.log("raceAnalysis items items ", items);
    }

    let currentTime = moment().utc().format("X") //Test:  currentTime = 1562755803 CHANGTIME

    timer.setInterval(
      this,
      "timerSuggestBar",
      () => {
        
        console.log("raceAnalysis timerSuggestBar", this.props.raceAnalysis);
        if (this.props.raceAnalysis && this.props.raceAnalysis.data) {
          const { data, starttime } =
            this.props.raceAnalysis && this.props.raceAnalysis;
          console.log("raceAnalysis componentDidMount", data);

          //console.log('raceAnalysis timer', data)

          currentTime = moment().utc().format("X") //Test:  currentTime++ CHANGETIME
          let item = data.filter(
            item => item.time == currentTime
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
              message: item
            });
          }
        } else {
          this.setState({
            message: null
          });
        }
      },
      1000
    );
  }

  render() {
    return (
      <Grid
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          paddingHorizontal: 10
        }}
      >
        <Row style={styles.suggestBg}>
          <Col style={{ flex: 2 }}>
            <Text style={styles.suggestDate}>
              {this.state.message != null
                ? moment(this.state.message.time, "X").format(
                    "YYYY-MM-DD hh:mm"
                  )
                : ""}
            </Text>
          </Col>
          <Col style={{ flex: 8 }}>
            <Text style={styles.suggestText}>
              {this.state.message
                ? this.state.message.content
                : "數據正在準備中.. 將在比賽前30分鐘顯示."}
            </Text>
          </Col>

          <Col style={{ flex: 1 }}>
            <Button
              transparent
              onPress={this.openSuggestBar}
              disabled={this.state.message == null}
            >
              <Image
                source={require("../../assets/footericon.png")}
                style={{ height: 50, width: 50, marginTop: -40 }}
                resizeMode="contain"
              />
            </Button>
          </Col>
        </Row>
      </Grid>
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
)(SuggestBar);
