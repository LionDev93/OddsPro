import React from "react";
import {
  View,
  ImageBackground,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert
} from "react-native";
import {
  Container,
  Content,
  Text,
  Button,
  Grid,
  Col,
  Row,
  Left,
  Right,
  Icon,
  Item,
  Input,
  Picker
} from "native-base";
import styles from "./style";

class OddCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: "key1",
      selectedType: 2,
      betTypes: [
        {
          id: 1,
          name: "獨贏/位置"
        },
        {
          id: 2,
          name: "三重彩"
        },
        {
          id: 3,
          name: "三重彩"
        },
        {
          id: 4,
          name: "獨贏/位置"
        },
        {
          id: 5,
          name: "三重彩"
        },
        {
          id: 6,
          name: "三重彩"
        },
        {
          id: 7,
          name: "獨贏/位置"
        },
        {
          id: 8,
          name: "三重彩"
        },
        {
          id: 9,
          name: "三重彩"
        },
        {
          id: 10,
          name: "三重彩"
        },
        {
          id: 11,
          name: "三重彩"
        }
      ]
    };
  }

  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }

  showAllOdds = () => {
    //this.props.showAllOddsHandler();
    Alert.alert("All Odds comming soon");
  };

  render() {
    return (
      <Grid>
        <Row style={styles.headerBg}>
          <Col style={styles.headerLeft}>
            <TouchableOpacity
              style={styles.headerLeft}
              onPress={() => Alert.alert("Previous Race")}
            >
              <Icon
                name="chevron-left"
                style={{ color: "white" }}
                type="FontAwesome5"
              />
              <Text style={styles.headerTextLeft}> 上一場</Text>
            </TouchableOpacity>
          </Col>
          <Col style={styles.headerMiddle}>
            <Text style={styles.headerText}>第 2 場</Text>
          </Col>

          <Col style={styles.headerRight}>
            <TouchableOpacity
              style={styles.headerRight}
              onPress={() => Alert.alert("Next Race")}
            >
              <Text style={styles.headerTextRight}>下一場 </Text>
              <Icon
                name="chevron-right"
                style={{ color: "white" }}
                type="FontAwesome5"
              />
            </TouchableOpacity>
          </Col>
        </Row>

        <View style={styles.row1Bg}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {this.state.betTypes.map(item => {
              return (
                <Col key={item.id} style={this.state.selectedType == item.id ? styles.row1ColBgActive : styles.row1ColBg}>
                  <TouchableOpacity
                    onPress={() => this.setState({selectedType: item.id})}
                  >
                    <Text style={this.state.selectedType == item.id ?styles.row1ColTextActive : styles.row1ColText}>{item.name}</Text>
                  </TouchableOpacity>
                </Col>
              );
            })}

          </ScrollView>
        </View>

        <Row style={styles.horsesBg}>
          <Col style={[styles.row2ColTitleBg, { flex: 2 }]}>
            <Text style={styles.textBlack48}>馬匹</Text>
          </Col>
          <Col style={{ flex: 8 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Col style={styles.row2ColBg}>
                <View style={styles.circle}>
                  <Text style={styles.rowText}>1</Text>
                </View>
                <Text style={styles.textWhite36}>牛精大哥</Text>
              </Col>

              <Col style={styles.row2ColBg}>
                <View style={styles.circle}>
                  <Text style={styles.rowText}>2</Text>
                </View>
                <Text style={styles.rowText}>創意寶</Text>
              </Col>
              <Col style={styles.row2ColBg}>
                <View style={styles.circle}>
                  <Text style={styles.rowText}>4</Text>
                </View>
                <Text style={styles.rowText}>金剛秀</Text>
              </Col>
              <Col style={styles.row2ColBg}>
                <View style={styles.circle}>
                  <Text style={styles.rowText}>4</Text>
                </View>
                <Text style={styles.rowText}>金剛秀</Text>
              </Col>
              <Col style={styles.row2ColBg}>
                <View style={styles.circle}>
                  <Text style={styles.rowText}>4</Text>
                </View>
                <Text style={styles.rowText}>金剛秀</Text>
              </Col>
            </ScrollView>
          </Col>
        </Row>

        <Row style={styles.horsesBg}>
          <Col style={[styles.row2ColTitleBg, { flex: 2 }]}>
            <Text style={styles.row2ColTitle}>膽</Text>
          </Col>
          <Col style={{ flex: 8 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Col style={styles.row3ColBg}>
                <View style={styles.circle}>
                  <Text style={styles.rowText}>3</Text>
                </View>
                <Text style={styles.rowText}>永旺喜喜</Text>
              </Col>

              <Col style={styles.row3ColBg}>
                <View style={styles.circle}>
                  <Text style={styles.rowText}>9</Text>
                </View>
                <Text style={styles.rowText}>駕迅</Text>
              </Col>
            </ScrollView>
          </Col>
        </Row>

        <Row style={styles.horsesBg}>
          <Col style={[styles.row2ColTitleBg, { flex: 2 }]}>
            <Text style={styles.row2ColTitle}>腳</Text>
          </Col>
          <Col style={{ flex: 8 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Col style={styles.row4ColBg}>
                <View style={styles.circle}>
                  <Text style={styles.rowText}>6</Text>
                </View>
                <Text style={styles.rowText}>易勝相吸</Text>
              </Col>
            </ScrollView>
          </Col>
        </Row>

        <Row style={styles.horsesBg}>
          <Col style={styles.row5Bg}>
            <Button
              transparent
              onPress={this.showAllOdds}
              style={{ alignSelf: "center" }}
            >
              <Text style={styles.row5Text}>顯示所有賠率</Text>
            </Button>
          </Col>
        </Row>

        <Row style={styles.horsesBg}>
          <Col style={styles.row6col1}>
            <Text style={styles.row6Text}>實時賠率 共3注</Text>
          </Col>
          <Col style={styles.row6col2}>
            <Text style={styles.row6Text1}>連贏 </Text>
          </Col>
          <Col style={styles.row6col2}>
            <Text style={styles.row6Text1}>位置Q</Text>
          </Col>
        </Row>

        <Row style={styles.horsesBg}>
          <Col style={styles.row6col1}>
            <Text style={styles.row7Text}>連贏 3 - 6</Text>
          </Col>
          <Col style={styles.row7col2}>
            <Text style={styles.row7Text1}>33.2 </Text>
          </Col>
          <Col style={styles.row7col3}>
            <Text style={styles.row7Text1}>22</Text>
          </Col>
        </Row>
        <Row style={styles.horsesBg}>
          <Col style={styles.row6col1}>
            <Text style={styles.row7Text}>連贏 3 - 9</Text>
          </Col>
          <Col style={styles.row7col2}>
            <Text style={styles.row7Text1}>45</Text>
          </Col>
          <Col style={styles.row7col3}>
            <Text style={styles.row7Text1}>33.8</Text>
          </Col>
        </Row>
        <Row style={styles.horsesBg}>
          <Col style={styles.row6col1}>
            <Text style={styles.row7Text}>連贏 6 - 9</Text>
          </Col>
          <Col style={styles.row7col2}>
            <Text style={styles.row7Text1}>68</Text>
          </Col>
          <Col style={styles.row7col3}>
            <Text style={styles.row7Text1}>43.1</Text>
          </Col>
        </Row>

        <Row style={styles.horsesBg}>
          <Col style={styles.row8Col1}>
            <Image
              source={require("../../assets/logo.png")}
              style={[styles.icon, { marginTop: -20 }]}
              resizeMode="contain"
            />
            <Text style={styles.row8Col1Text}>AI 對沖下注建議</Text>
          </Col>
        </Row>

        <Row style={styles.horsesBg}>
          <Col style={styles.row9Col1}>
            <Text style={styles.row9Col1Text}>總金額</Text>
            <Item regular style={styles.input}>
              <Input style={styles.row9Col1Text} />
            </Item>
          </Col>
        </Row>

        <Row style={styles.horsesBg}>
          <Col>
            <Text style={styles.row10Text}>馬號</Text>
          </Col>
          <Col>
            <Text style={styles.row10Text}>彩池</Text>
          </Col>
          <Col>
            <Text style={styles.row10Text}>賠率</Text>
          </Col>
          <Col>
            <Text style={styles.row10Text}>額</Text>
          </Col>
          <Col>
            <Text style={styles.row10Text}>預計派彩</Text>
          </Col>
        </Row>
        <Row style={styles.horsesBg}>
          <Col>
            <Text style={styles.row10Text}>3-6</Text>
          </Col>
          <Col>
            <Picker
              mode="dropdown"
              iosHeader=""
              iosIcon={<Icon name="arrow-down" />}
              textStyle={[styles.row10Text, { paddingLeft: 0 }]}
              style={{
                height: 25,
                width: 50,
                paddingTop: 0,
                paddingBottom: 0,
                alignItems: "flex-start"
              }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="位置Q" value="key0" />
              <Picker.Item label="位置Q1" value="key1" />
              <Picker.Item label="位置Q2" value="key2" />
              <Picker.Item label="位置Q3" value="key3" />
              <Picker.Item label="位置Q4" value="key4" />
            </Picker>
          </Col>
          <Col>
            <Text style={styles.row10Text}>22</Text>
          </Col>
          <Col>
            <Text style={styles.row10Text}>280</Text>
          </Col>
          <Col>
            <Text style={styles.row10Text}>6160</Text>
          </Col>
        </Row>
        <Row style={styles.horsesBg}>
          <Col>
            <Text style={styles.row10Text}>3-9</Text>
          </Col>
          <Col>
            <Picker
              mode="dropdown"
              iosHeader=""
              iosIcon={<Icon name="arrow-down" />}
              textStyle={[styles.row10Text, { paddingLeft: 0 }]}
              style={{
                height: 25,
                width: 50,
                paddingTop: 0,
                paddingBottom: 0,
                alignItems: "flex-start"
              }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="連贏" value="key0" />
              <Picker.Item label="連贏1" value="key1" />
              <Picker.Item label="連贏2" value="key2" />
            </Picker>
          </Col>
          <Col>
            <Text style={styles.row10Text}>45</Text>
          </Col>
          <Col>
            <Text style={styles.row10Text}>130</Text>
          </Col>
          <Col>
            <Text style={styles.row10Text}>5850</Text>
          </Col>
        </Row>
        <Row style={styles.horsesBg}>
          <Col>
            <Text style={styles.row10Text}>6-9 </Text>
          </Col>
          <Col>
            <Picker
              mode="dropdown"
              iosHeader=""
              iosIcon={<Icon name="arrow-down" />}
              textStyle={[styles.row10Text, { paddingLeft: 0 }]}
              style={{
                height: 25,
                width: 50,
                paddingTop: 0,
                paddingBottom: 0,
                alignItems: "flex-start"
              }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="連贏" value="key0" />
              <Picker.Item label="連贏1" value="key1" />
              <Picker.Item label="連贏2" value="key2" />
            </Picker>
          </Col>
          <Col>
            <Text style={styles.row10Text}>68</Text>
          </Col>
          <Col>
            <Text style={styles.row10Text}>90</Text>
          </Col>
          <Col>
            <Text style={styles.row10Text}>6120</Text>
          </Col>
        </Row>
        <Row style={[styles.horsesBg, { with: "100%" }]}>
          <Text style={styles.row10Text}>
            對沖下注是因應不同的賠率, 自動制定不同的投注金額, 以平衡派彩的回報.{" "}
          </Text>
        </Row>
      </Grid>
    );
  }
}

export default OddCard;
