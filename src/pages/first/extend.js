import React from "react";
import { View, ImageBackground, Image, Alert } from "react-native";
import { Container, Content, Text, Button, Grid, Col, Row } from "native-base";
import styles from "./style";
import * as API from "../../services/api";
import * as Animatable from "react-native-animatable";
import { ScrollView } from "react-native-gesture-handler";

class HorseInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      horse: {},
      analysis: []
    };
  }

  handleViewRef = ref => (this.view = ref);

  async componentDidMount() {
    this.view.slideInRight(1000);
    let res = await API.get_horse_analysis(this.props.horseId);
    this.setState({
      ...res.data
    });
  }

  render() {
    const { horse, analysis } = this.state;
    return (
      <Animatable.View
        ref={this.handleViewRef}
        style={{ flex: 1, backgroundColor: "#ffffff" }}
      >
        <View style={{ padding: 10, height: 125 }}>
          <Row style={{ height: 110 }}>
            <Col style={{ flex: 4 }}>
              <Image
                source={{ url: horse.horse_img }}
                style={{ width: 100, height: 100, borderRadius: 10, }}
              />
            </Col>
            <Col style={{ flex: 6, top: 6 }}>
              <Row style={{ height: 22 }}>
                <Col>
                  <Text style={styles.textBlack48}>馬名: </Text>
                </Col>
                <Col>
                  <Text style={styles.textBlack48}>{horse.h_name}</Text>
                </Col>
              </Row>
              <Row style={{ height: 22 }}>
                <Col>
                  <Text style={styles.textBlack48}>出生地: </Text>
                </Col>
                <Col>
                  <Text style={styles.textBlack48}>{horse.born}</Text>
                </Col>
              </Row>
              <Row style={{ height: 22 }}>
                <Col>
                  <Text style={styles.textBlack48}>年齡: </Text>
                </Col>
                <Col>
                  <Text style={styles.textBlack48}>{horse.age}</Text>
                </Col>
              </Row>
              <Row style={{ height: 22 }}>
                <Col>
                  <Text style={styles.textBlack48}>出場次數: </Text>
                </Col>
                <Col>
                  <Text style={styles.textBlack48}>{horse.racecount}</Text>
                </Col>
              </Row>
            </Col>
          </Row>
        </View>
        <Row style={{ margin: 10, height: 50, marginTop: 0 }}>
          <Col style={styles.ext_header}>
            <Image
              source={require("../../assets/logo.png")}
              style={[styles.icon, { marginTop: -20 }]}
              resizeMode="contain"
            />
            <Text style={styles.textWhite60}>AI 綜合評分為</Text>
            <View style={styles.ext_circle}>
              <Text style={styles.textWhite72}>{horse.AI_marks}</Text>
            </View>
          </Col>
        </Row>
        <View style={{ height: 430 }}>
          <ScrollView
            
            contentContainerStyle={{ padding: 10 }}
          >
            <Row style={styles.ext_row}>
              <Text style={styles.textCardinnertitle}>大數據統計及分析: </Text>
            </Row>
            {analysis.map((item, i) => {
              return (
                <Row>
                  <Col style={styles.col7}>
                    <Text style={styles.textlist}>{item.message}</Text>
                  </Col>
                  <Col style={styles.col3}>
                    <Text style={styles.textlistresult}>{item.value}</Text>
                  </Col>
                </Row>
              );
            })}

          </ScrollView>
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 0
          }}
        >
          <Row style={{ padding: 10 }}>
            <Text style={styles.textBlack22}>
              免責聲明 綜合評分及大數據統計及分析是根據馬匹所有出場的資料,
              利用大數據分析及AI比較其他馬匹 為基準的綜合分數或結論,
              資料結果並不是由馬會或其他機構提供；此分數只作為參考用途,
              我們並不會因為任何資料誤差或統計結果而承擔任何損失和責任.
            </Text>
          </Row>
          <Row>
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
                onPress={() => Alert.alert("BUY")}
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
                onPress={() => Alert.alert("SHARE")}
              >
                <Text style={{ color: "white" }}>分享給朋友</Text>
              </Button>
            </Col>
          </Row>
        </View>
      </Animatable.View>
    );
  }
}

export default HorseInfo;
