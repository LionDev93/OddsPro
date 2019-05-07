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

import styles from "./style";
import OddCard from "./oddCard";
import SuggestBar from "./suggestBar";
const dm = Dimensions.get("screen");

class OddsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.scroll = null
    this.state = {
      allOddsVisible: false,
      openSuggestBar: false
    };
  }

  backHandler = () => {
    this.props.navigation.goBack();
  };

  rightHandler = () => {
    this.props.navigation.navigate("profile");
  };

  openSuggestBar = () => {
    this.setState({ openSuggestBar: true });
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
        <Row style={styles.suggestBg1}>
          <Col style={{ flex: 2 }}>
            <Text style={styles.suggestDate}>13:32:55</Text>
          </Col>
          <Col style={{ flex: 8 }}>
            <Text style={styles.suggestText}>AI 比賽20分鐘預測 2-4-5-7</Text>
          </Col>
        </Row>
        <Row style={styles.suggestBg1}>
          <Col style={{ flex: 2 }}>
            <Text style={styles.suggestDate}>13:32:55</Text>
          </Col>
          <Col style={{ flex: 8 }}>
            <Text style={styles.suggestText}>
              xxxx 有大手下注, 賠率下跌 xx %
            </Text>
          </Col>
        </Row>
        <Row style={styles.suggestBg1}>
          <Col style={{ flex: 2 }}>
            <Text style={styles.suggestDate}>13:32:55</Text>
          </Col>
          <Col style={{ flex: 8 }}>
            <Text style={styles.suggestText}>
              根據過往賽績 XXXX 參加過 X 次草地賽道, X 次入三甲, 勝率為 XX %
            </Text>
          </Col>
        </Row>
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

  componentDidMount(){
    //this.scroll.scrollToEnd();
  }

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
          <ScrollView padder style={{flex: 1, padding: 10, marginBottom: 10}} behavior="padding" enabled 
          ref={(scroll) => {this.scroll = scroll;}}
          >
          
            <Text style={styles.date}>2019年3月10日,星期日, 沙田</Text>
             
            <OddCard
              navigation={this.props.navigation}
              showAllOddsHandler={this.showAllOdds}
            />
            {!openSuggestBar ? (
              <SuggestBar openSuggestBarHandler={this.openSuggestBar} />
            ) : (
              <React.Fragment />
            )}
            
           
          </ScrollView>
        </Container>
      </ImageBackground>
    );
  }
}

export default OddsScreen;
