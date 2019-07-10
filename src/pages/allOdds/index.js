import React from "react";
import {
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView
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
  Form,
  Picker,
  Item
} from "native-base";
import { Overlay } from "react-native-elements";
import Orientation from "react-native-orientation";
import { connect } from "react-redux";
import * as Actions from "../../redux/action";
import * as API from "../../services/api";

import { Table, TableWrapper, Row, Col } from "react-native-table-component";

import styles from "./style";

class AllOddsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tableHead: [],
      widthArr: [],
      tableData: [],
      selected: "win"
    };
  }

  close = () => {
    Orientation.lockToPortrait();
    this.props.navigation.goBack();
  };

  componentDidMount() {
    // this locks the view to Landscape Mode
    Orientation.lockToLandscape();
    this.onRefresh();
  }

  onValueChange(value: string) {
    this.setState(
      {
        selected: value
      },
      this.onRefresh
    );
  }

  onRefresh = async () => {
    console.log("state", this.state);
    const racenum = this.props.navigation.getParam("racenum", 0);
    //const racenum = 1;
    if (
      this.props.cardInfo[racenum] &&
      Array.isArray(this.props.cardInfo[racenum].horseViewList)
    ) {
      const horses = this.props.cardInfo[racenum].horseViewList;

      if (this.state.selected == "win" || this.state.selected == "pla") {
        this.setState({
          tableHead: ["馬號", "名字", "倍率"],
          widthArr: [100, 300, 300]
        });
      }
      const res1 = await API.get_raceodds_api(racenum, this.state.selected);

      let tabledata = [];

      console.log("horses", horses);

      res1.data.data.forEach((odd, i) => {
        let val = odd.split("=");
        let rowdata = [];
        rowdata.push(val[0]);
        rowdata.push(horses[i].horsenamecht);
        rowdata.push(val[1]);

        tabledata.push(rowdata);
      });

      this.setState({
        tableData: tabledata
      });

      console.log("state", this.state);
    }
  };

  render() {
    const state = this.state;
    // const tableData = [];
    // for (let i = 0; i < 30; i += 1) {
    //   const rowData = [];
    //   for (let j = 0; j < 20; j += 1) {
    //     rowData.push(`${i}${j}`);
    //   }
    //   tableData.push(rowData);
    // }

    return (
      <ImageBackground
        source={require("../../assets/firstpage_background.jpg")}
        style={{ width: "100%", height: "100%", backgroundColor: "black" }}
        resizeMode="cover"
      >
        <Container style={{ backgroundColor: "transparent" }}>
          <Content padder>
            <View style={[styles.bar, { marginBottom: 10,  }]}>
              <Text style={styles.date}>2019年7月10日,星期日, 跑馬地</Text>
              <Form>
                <Item regular style={{ width: 100, borderColor: 'black' }}> 
                  <Picker
                    mode="dropdown"
                    iosHeader="Select odd type"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: 100, }}
                    selectedValue={this.state.selected}
                    onValueChange={this.onValueChange.bind(this)}
                  >
                    <Picker.Item label="獨贏" value="win" />
                    <Picker.Item label="位置" value="pla" />
                  </Picker>
                </Item>
              </Form>
              <TouchableOpacity onPress={this.close} style={styles.closeBtn}>
                <Icon name="closecircle" type="AntDesign" />
              </TouchableOpacity>
            </View>

            <ScrollView horizontal={false}>
              <View>
                <ScrollView style={styles.dataWrapper} horizontal={true}>
                  <View>
                    <Table borderStyle={{ borderColor: "#C1C0B9" }}>
                      <Row
                        data={state.tableHead}
                        widthArr={state.widthArr}
                        style={styles.header}
                        textStyle={styles.text}
                      />
                    </Table>

                    <Table borderStyle={{ borderColor: "#C1C0B9" }}>
                      {this.state.tableData.map((rowData, index) => (
                        <Row
                          key={index}
                          data={rowData}
                          widthArr={state.widthArr}
                          style={[
                            styles.row,
                            index % 2 && { backgroundColor: "#F7F6E7" }
                          ]}
                          textStyle={styles.text}
                        />
                      ))}
                    </Table>
                  </View>
                </ScrollView>
              </View>
            </ScrollView>
          </Content>
        </Container>
      </ImageBackground>
    );
  }
}

const mapState = state => {
  return {
    cardInfo: state.global.cardInfo,
    odds: state.global.odds
  };
};

const actionCreator = {
  getCardInfo: Actions.getCardInfo,
  getRaceOdds: Actions.getRaceOdds,
  openCard: Actions.openCard
};

export default connect(
  mapState,
  actionCreator
)(AllOddsScreen);
