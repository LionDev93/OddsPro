import React from "react";
import { View, ImageBackground, Image } from "react-native";
import { Container, Content, Text, Button, Grid, Col, Row } from "native-base";
import styles from "./style";
import moment from 'moment'

class SuggestBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  openSuggestBar = () => {
    this.props.openSuggestBarHandler()
  }

  render() {
    return (
      <Grid style={{position: 'absolute', bottom: 0,  width: '100%', paddingHorizontal: 10}}> 
        <Row style={styles.suggestBg}>
          <Col style={{ flex: 2 }}>
            <Text style={styles.suggestDate}>{this.props.time != '' ? moment(this.props.time, 'X').format('YYYY-MM-DD hh:mm') : ''}</Text>
          </Col>
          <Col style={{ flex: 8 }}>
            <Text style={styles.suggestText}>
              {this.props.text}
            </Text>
          </Col>

          <Col style={{ flex: 1 }}>
            <Button transparent onPress={this.openSuggestBar} disabled={this.props.time == ''}>
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

export default SuggestBar;
