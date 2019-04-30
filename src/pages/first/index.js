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
import { Overlay } from "react-native-elements";
import styles from "./style";
import RaceCard from "./raceCard";
import RaceCard1 from "./raceCard1";
import OpenRaceCard from "./openRaceCard";
import HorseInfo from "./extend";

class FirstScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openHorseInfo: false
    };
  }

  renderHorseInfo = () => {
    return <HorseInfo />;
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
            isVisible={this.state.openHorseInfo}
            windowBackgroundColor="rgba(255, 255, 255, 0)"
            overlayBackgroundColor="#ffffff"
            width="80%"
            height="80%"
            onBackdropPress={() => this.setState({ openHorseInfo: false })}
            overlayStyle={{
              padding: 0,
              position: "absolute",
              right: 0,
              top: 85
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
            <TouchableOpacity
              onPress={() => {
                this.setState({ open: 1 });
              }}
            >
              <RaceCard />
            </TouchableOpacity>
            {this.state.open == 1 && (
              <OpenRaceCard
                navigation={this.props.navigation}
                openHorseInfoHandler={this.openHorseInfoHandler}
              />
            )}
            <TouchableOpacity
              onPress={() => {
                this.setState({ open: 2 });
              }}
            >
              <RaceCard />
            </TouchableOpacity>
            {this.state.open == 2 && (
              <OpenRaceCard
                navigation={this.props.navigation}
                openHorseInfoHandler={this.openHorseInfoHandler}
              />
            )}
            <TouchableOpacity
              onPress={() => {
                this.setState({ open: 3 });
              }}
            >
              <RaceCard />
            </TouchableOpacity>
            {this.state.open == 3 && (
              <OpenRaceCard
                navigation={this.props.navigation}
                openHorseInfoHandler={this.openHorseInfoHandler}
              />
            )}
            <TouchableOpacity
              onPress={() => {
                this.setState({ open: 4 });
              }}
            >
              <RaceCard1 />
            </TouchableOpacity>
            {this.state.open == 4 && (
              <OpenRaceCard
                navigation={this.props.navigation}
                openHorseInfoHandler={this.openHorseInfoHandler}
              />
            )}
            <TouchableOpacity
              onPress={() => {
                this.setState({ open: 5 });
              }}
            >
              <RaceCard1 />
            </TouchableOpacity>
            {this.state.open == 5 && (
              <OpenRaceCard
                navigation={this.props.navigation}
                openHorseInfoHandler={this.openHorseInfoHandler}
              />
            )}
          </Content>
        </Container>
      </ImageBackground>
    );
  }
}

export default FirstScreen;
