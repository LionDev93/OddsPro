import React from "react";
import { View, ImageBackground, Image, TouchableOpacity } from "react-native";
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
  Icon
} from "native-base";
import Modal from "react-native-modal";
import { Overlay } from "react-native-elements";
import styles from "./style";
import RaceCard from "./raceCard";
import RaceCard1 from "./raceCard1";
import OpenRaceCard from "./openRaceCard";
import HorseInfo from "./extend";
import RaceCard2 from "./raceCard2";
import * as Animatable from "react-native-animatable";

class FirstScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openHorseInfo: false,
      openCard: 0,
      races: [
        {
          id: 1,
          type: "green",
          numHorse: 7,
          winAmount: 1000,
          total: 3000,
        },
        {
          id: 2,
          type: "green",
          numHorse: 5,
          winAmount: 5000,
          total: 30000,

        },
        {
          id: 3,
          type: "orange",
          numHorse: 9,
          winAmount: 9000,
          total: 27000,
        },
        {
          id: 4,
          type: "orange",
          numHorse: 7,
          winAmount: 7000,
          total: 3000,
        },
        {
          id: 5,
          type: "green",
          numHorse: 12,
          winAmount: 12000,
          total: 36000,
        },
        {
          id: 6,
          type: "green",
          numHorse: 10,
          winAmount: 10000,
          total: 50000,
        },
        {
          id: 7,
          type: "green",
          numHorse: 9,
          winAmount: 13000,
          total: 38000,
        },
        {
          id: 8,
          type: "orange",
          numHorse: 7,
          winAmount: 18000,
          total: 3000,
        },
        {
          id: 9,
          type: "orange",
          numHorse: 7,
          winAmount: 19000,
          total: 3000,
        },
        {
          id: 10,
          type: "green",
          numHorse: 5,
          winAmount: 17000,
          total: 36000,
        }
      ]
    };
  }

  handleViewRef = ref => this.view = ref;


  renderHorseInfo = () => {
    return (
      
      <HorseInfo />
     
    
    );
  };

  openHorseInfoHandler = () => {
    this.setState({ openHorseInfo: true });
  };

  render() {
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
            <Left>
              <React.Fragment />
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
              <React.Fragment />
            </Right>
          </Header>

          <Overlay
            animationType='fade'
            isVisible={this.state.openHorseInfo}
            windowBackgroundColor="rgba(255, 255, 255, 0)"

            overlayBackgroundColor="transparent"
            width="80%"
            height="80%"
            onBackdropPress={() => this.setState({ openHorseInfo: false })}
            overlayStyle={{
              padding: 0,
              position: "absolute",
              right: 0,
              bottom: 0
            }}
            containerStyle={{
              justifyContent: "flex-end",
              alignItems: "flex-end"
            }}
          >
            {this.renderHorseInfo()}
          </Overlay>

          <Content padder style={styles.container}>
            <Text style={styles.date}>2019年3月10日,星期日, 沙田</Text>
            {this.state.races.map((item, i) => {
              return (
                <RaceCard2 key={i}
                  number={item.id}
                  type={item.type}
                  numHorse={item.numHorse}
                  winAmount={item.winAmount}
                  total={item.total}
                  openHorseInfoHandler={this.openHorseInfoHandler}
                  navigation={this.props.navigation}
                />
              );
            })}

          </Content>
        </Container>
      </ImageBackground>
    );
  }
}

export default FirstScreen;
