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
          isOpen: false
        },
        {
          id: 2,
          type: "green",
          isOpen: false
        },
        {
          id: 3,
          type: "orange",
          isOpen: false
        },
        {
          id: 4,
          type: "orange",
          isOpen: false
        },
        {
          id: 5,
          type: "green",
          isOpen: false
        },
        {
          id: 6,
          type: "green",
          isOpen: false
        },
        {
          id: 7,
          type: "green",
          isOpen: false
        },
        {
          id: 8,
          type: "orange",
          isOpen: false
        },
        {
          id: 9,
          type: "orange",
          isOpen: false
        },
        {
          id: 10,
          type: "green",
          isOpen: false
        }
      ]
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
          animationType='fade'
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
                <View  key={i}>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({ openCard: item.id });
                    }}
                  >
                  {item.type == 'orange' ? <RaceCard1 number={item.id} /> : <RaceCard number={item.id} />}
                    
                  </TouchableOpacity>
                  {this.state.openCard == item.id && (
                    <OpenRaceCard
                      number={item.id}
                      navigation={this.props.navigation}
                      openHorseInfoHandler={this.openHorseInfoHandler}
                    />
                  )}
                </View>
              );
            })}

          </Content>
        </Container>
      </ImageBackground>
    );
  }
}

export default FirstScreen;
