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
  Grid
} from "native-base";
import { Overlay } from "react-native-elements";
import Orientation from "react-native-orientation";

import { Table, TableWrapper, Row, Col } from "react-native-table-component";

import styles from "./style";

class AllOddsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tableHead: [
        "1st/2nd",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14"
      ],
      widthArr: [60, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]
    };
  }

  close = () => {
    Orientation.lockToPortrait();
    this.props.navigation.goBack();
  };

  componentDidMount() {
    // this locks the view to Landscape Mode
    Orientation.lockToLandscape();
    
  }

  render() {
    const state = this.state;
    const tableData = [];
    for (let i = 0; i < 30; i += 1) {
      const rowData = [];
      for (let j = 0; j < 20; j += 1) {
        rowData.push(`${i}${j}`);
      }
      tableData.push(rowData);
    }
    return (
      <ImageBackground
        source={require("../../assets/firstpage_background.jpg")}
        style={{ width: "100%", height: "100%", backgroundColor: "black" }}
        resizeMode="cover"
      >
        <Container style={{ backgroundColor: "transparent" }}>
          <Content padder>
            <View style={styles.bar}>
              <Text style={styles.date}>2019年3月10日,星期日, 沙田</Text>

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
                      {tableData.map((rowData, index) => (
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

export default AllOddsScreen;
