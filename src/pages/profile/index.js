import React from "react";
import {
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Alert
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
  Thumbnail,
  Grid,
  Row,
  Col,
  ListItem,
  Switch,
  DeckSwiper,
  Card,
  CardItem
} from "native-base";
import { Overlay } from "react-native-elements";
import styles from "./style";

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shareVisible: false,
      moneyVisible: false,
      useCredit: true,
      getPush: true,
      cards: [
        {
          name: "BE VIP MEMBERSHIP"
        },
        {
          name: "PURCHASE 1 AI POINT"
        },
        {
          name: "PURCHASE 5 AI POINT"
        },
        {
          name: "PURCHASE 10 AI POINT"
        },
        {
          name: "PURCHASE 50 AI POINT"
        }
      ]
    };
  }

  backHandler = () => {
    this.props.navigation.goBack();
  };

  openMoneyPopup = () => {
    this.setState({ moneyVisible: true });
  };

  renderMoneyPopUp = () => {
    return (
      <View>
        <View style={styles.moneyHeader}>
          <Text style={styles.textWhite60}>升級/購買</Text>
        </View>
        <View style={styles.moneyBody}>
          <DeckSwiper
            dataSource={this.state.cards}
            renderItem={item => (
              <Card style={styles.moneyItem}>
                
                  <Text style={{ color: "white", marginBottom: 50 }}>
                    {item.name}
                  </Text>
                  <Button
                    style={{
                      width: "100%",
                      backgroundColor: "white",
                      alignItems: "center",
                      textAlign: "center",
                      justifyContent: "center"
                    }}
                  >
                    <Text style={{ color: "#000000", textAlign: "center" }}>
                      IN APP PURCHASE
                    </Text>
                  </Button>
                    
                    <Button style={{position:'absolute', bottom: 0, alignSelf: 'center'}}transparent><Text>Swipe here for options</Text></Button>
              </Card>
            )}
          />
        </View>
      </View>
    );
  };

  openSharePopup = () => {
    this.setState({ shareVisible: true });
  };

  renderSharePopUp = () => {
    return (
      <View style={{ alignItems: "center" }}>
        <View style={styles.shareHeader}>
          <Text style={styles.textWhite60}>分享AI點</Text>
        </View>
        <View style={styles.shareBody}>
          <Text style={styles.textBlack60}>你可以分享你擁有的AI點給朋友</Text>
          <Row style={{ marginTop: 30, height: 55 }}>
            <Text style={styles.textBlack60}>分享數量:</Text>
            <TouchableOpacity>
              <Icon
                active
                name="minus-circle"
                style={{ color: "#686868", marginHorizontal: 20 }}
                type="FontAwesome"
              />
            </TouchableOpacity>

            <Text style={styles.textBlack100}>1</Text>
            <TouchableOpacity>
              <Icon
                active
                name="plus-circle"
                style={{ color: "#686868", marginHorizontal: 20 }}
                type="FontAwesome"
              />
            </TouchableOpacity>
          </Row>
          <Row style={{ marginTop: 0, height: 55, marginBottom: 30 }}>
            <Text style={[styles.textBlack60, { paddingTop: 10 }]}>
              分享到:
            </Text>
            <TouchableOpacity>
              <Image
                source={require("../../assets/whatsapp_icon.png")}
                style={{ width: 50, height: 50, marginLeft: 30 }}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../../assets/wechat_icon.png")}
                style={{ width: 50, height: 50, marginHorizontal: 10 }}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../../assets/wechat_icon.png")}
                style={{ width: 50, height: 50 }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </Row>
          <Row>
            <Text style={styles.textBlack36}>
              * 如選擇分享到短信, 電信服務商會收取短信費用
            </Text>
          </Row>
        </View>
      </View>
    );
  };

  render() {
    return (
      <ImageBackground
        source={require("../../assets/firstpage_background.jpg")}
        style={{ width: "100%", height: "100%", backgroundColor: "black" }}
        resizeMode="cover"
      >
        <Container style={{ backgroundColor: "transparent" }}>
          <Overlay
            isVisible={this.state.moneyVisible}
            windowBackgroundColor="rgba(0, 0, 0, 0.6)"
            overlayBackgroundColor="#ffffff"
            width="90%"
            height="40%"
            onBackdropPress={() => this.setState({ moneyVisible: false })}
            overlayStyle={{ padding: 0, borderRadius: 10 }}
          >
            {this.renderMoneyPopUp()}
          </Overlay>

          <Overlay
            isVisible={this.state.shareVisible}
            windowBackgroundColor="rgba(0, 0, 0, 0.6)"
            overlayBackgroundColor="#ffffff"
            width="90%"
            height="40%"
            onBackdropPress={() => this.setState({ shareVisible: false })}
            overlayStyle={{ padding: 0, borderRadius: 10 }}
          >
            {this.renderSharePopUp()}
          </Overlay>

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
              <React.Fragment />
            </Right>
          </Header>
          <Content padder style={styles.container}>
            <Grid>
              <Row style={{ marginBottom: 20 }}>
                <Text style={styles.title}>會員信息</Text>
              </Row>
              <Row>
                <Col>
                  <Thumbnail
                    rounded
                    source={require("../../assets/avatar.png")}
                  />
                </Col>
                <Col style={{ alignItems: "center", justifyContent: "center" }}>
                  <Text style={styles.title}>馬上風</Text>
                  <View style={styles.memberTypeWrapper}>
                    <Text style={styles.memberType}>VIP會員</Text>
                  </View>
                </Col>
                <Col style={styles.pointBg}>
                  <Text style={styles.point}>7</Text>
                  <Text style={styles.pointText}>現有AI點</Text>
                </Col>
                <Col style={styles.moneyBg}>
                  <Button
                    style={{
                      alignSelf: "center",
                      paddingBottom: 0,
                      paddingTop: 0
                    }}
                    transparent
                    onPress={this.openMoneyPopup}
                  >
                    <Image
                      source={require("../../assets/money_icon.png")}
                      style={styles.icon}
                      resizeMode="contain"
                    />
                  </Button>
                  <Text style={styles.pointText}>升級/購買</Text>
                </Col>
                <Col style={styles.shareBg}>
                  <Button
                    style={{
                      alignSelf: "center",
                      paddingBottom: 0,
                      paddingTop: 0
                    }}
                    transparent
                    onPress={this.openSharePopup}
                  >
                    <Image
                      source={require("../../assets/share_icon.png")}
                      style={styles.icon}
                      resizeMode="contain"
                    />
                  </Button>

                  <Text style={styles.pointText}>分享AI點</Text>
                </Col>
              </Row>

              <Row style={styles.configHeaderRow}>
                <Text style={styles.title}>設定</Text>
              </Row>
              <Row style={styles.configBodyTopRow}>
                <Col>
                  <Text style={styles.textBlack60}>語言設定</Text>
                </Col>
                <Col style={{ alignItems: "flex-end" }}>
                  <Text style={styles.textBlack48}>繁體中文</Text>
                </Col>
              </Row>
              <Row style={styles.configBodyRow}>
                <Col>
                  <Text style={styles.textBlack60}>我的手機號</Text>
                </Col>
                <Col style={{ alignItems: "flex-end" }}>
                  <Text style={styles.textBlack48}>98123456</Text>
                </Col>
              </Row>

              <Row style={styles.configBodyRow}>
                <Col>
                  <Text style={styles.textBlack36}>
                    手機號碼用來登陸帳戶,分享點數及提升帳戶安全
                  </Text>
                </Col>
              </Row>
              <Row style={styles.configBodyRow}>
                <Col>
                  <Text style={styles.textBlack60}>自動購買下一場</Text>
                </Col>
                <Col style={{ alignItems: "flex-end" }}>
                  <Switch
                    value={this.state.useCredit}
                    trackColor={{ true: "#ffbc00" }}
                    onValueChange={() =>
                      this.setState({ useCredit: !this.state.useCredit })
                    }
                  />
                </Col>
              </Row>

              <Row style={styles.configBodyRow}>
                <Col>
                  <Text style={styles.textBlack36}>下一場: 3月15號-沙田</Text>
                </Col>
                <Col style={{ alignItems: "flex-end" }}>
                  <View style={styles.autoBg}>
                    <Text style={styles.textBlack36}>自動</Text>
                  </View>
                </Col>
              </Row>
              <Row style={styles.configBodyRow}>
                <Col>
                  <Text style={styles.textBlack60}>接收推送通知</Text>
                </Col>
                <Col style={{ alignItems: "flex-end" }}>
                  <Switch
                    value={this.state.getPush}
                    trackColor={{ true: "#ffbc00" }}
                    onValueChange={() =>
                      this.setState({ getPush: !this.state.getPush })
                    }
                  />
                </Col>
              </Row>
              <Row style={styles.configBodyBottomRow}>
                <Col>
                  <Text style={styles.textBlack36}>
                    包括: 比賽結果, 下注提示, 推廣優惠等
                  </Text>
                </Col>
              </Row>

              <Row style={styles.promotionHeaderRow}>
                <Col>
                  <Text style={styles.title}>最新推廣優惠</Text>
                </Col>
              </Row>
              <Row style={styles.promotionBodyTopRow}>
                <Col>
                  <Text style={styles.textWhite60}>
                    為了讓更多人體驗賽馬大數据及AI分析的好處，
                    現在只需介紹三位朋友成為免費會員，便可終身
                    升級為VIP會員。優惠期有限，請盡早分享。
                  </Text>
                </Col>
              </Row>
              <Row style={styles.promotionBodyRow}>
                <Col>
                  <Text style={styles.textBlack60}>分享連結</Text>
                </Col>
                <Col style={{ alignItems: "flex-end" }}>
                  <View>
                    <Text style={styles.textBlack48}>goo.gl/Xse32</Text>
                  </View>
                </Col>
              </Row>
              <Row
                style={[
                  styles.promotionBodyRow,
                  { justifyContent: "flex-end" }
                ]}
              >
                <TouchableOpacity onPress={() => Alert.alert("share icon")}>
                  <Image
                    source={require("../../assets/facebook_icon.png")}
                    style={styles.icon}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert("share icon")}>
                  <Image
                    source={require("../../assets/ig_icon.png")}
                    style={styles.icon}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert("share icon")}>
                  <Image
                    source={require("../../assets/whatsapp_icon.png")}
                    style={styles.icon}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert("share icon")}>
                  <Image
                    source={require("../../assets/wechat_icon.png")}
                    style={styles.icon}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert("share icon")}>
                  <Image
                    source={require("../../assets/twitter_icon.png")}
                    style={styles.icon}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </Row>
              <Row style={styles.promotionBodyRow}>
                <Col>
                  <Text style={styles.textBlack36}>分享紀錄</Text>
                </Col>
              </Row>
              <Row style={styles.promotionBodyBottomRow}>
                <Col style={styles.promotionVIP}>
                  <View style={styles.buttonVIPWrapper}>
                    <Text style={styles.buttonVIP}>獲得終身VIP會員</Text>
                  </View>
                </Col>
              </Row>

              <Row style={{ marginTop: 30, marginBottom: 10 }}>
                <Col>
                  <Text style={styles.title}>其他信息</Text>
                </Col>
              </Row>
              <Row style={styles.moreBodyTopRow}>
                <TouchableOpacity
                  style={{ width: "100%", flexDirection: "row" }}
                  onPress={() => Alert.alert("FAQ")}
                >
                  <Col>
                    <Text style={styles.textBlack60}>常見問題</Text>
                  </Col>
                  <Col style={{ alignItems: "flex-end" }}>
                    <Icon
                      active
                      name="arrow-forward"
                      style={{ color: "#707070" }}
                    />
                  </Col>
                </TouchableOpacity>
              </Row>
              <Row style={styles.moreBodyRow}>
                <TouchableOpacity
                  style={{ width: "100%", flexDirection: "row" }}
                  onPress={() => Alert.alert("Feedback")}
                >
                  <Col>
                    <Text style={styles.textBlack60}>意見反饋</Text>
                  </Col>
                  <Col style={{ alignItems: "flex-end" }}>
                    <Icon
                      active
                      name="arrow-forward"
                      style={{ color: "#707070" }}
                    />
                  </Col>
                </TouchableOpacity>
              </Row>
              <Row style={styles.moreBodyBottomRow}>
                <TouchableOpacity
                  style={{ width: "100%", flexDirection: "row" }}
                  onPress={() => Alert.alert("private & policies")}
                >
                  <Col style={{ flex: 8 }}>
                    <Text style={[styles.textBlack60]}>政策條款及免責聲明</Text>
                  </Col>
                  <Col style={{ alignItems: "flex-end", flex: 2 }}>
                    <Icon
                      active
                      name="arrow-forward"
                      style={{ color: "#707070" }}
                    />
                  </Col>
                </TouchableOpacity>
              </Row>

              <Button
                style={styles.logout}
                onPress={() => Alert.alert("Log Out")}
              >
                <Text style={{ color: "#707070" }}>登出</Text>
              </Button>
            </Grid>
          </Content>
        </Container>
      </ImageBackground>
    );
  }
}

export default ProfileScreen;
