import React from "react";
import { View, ImageBackground, Image } from "react-native";
import { Container, Content, Text, Button, Grid, Col, Row } from "native-base";
import styles from "./style";

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col style={styles.left}>
            <Text>back icon</Text>
            <Text>上一場</Text>
          </Col>
          <Col style={styles.left}>
            <Text>第 2 場</Text>
          </Col>

          <Col style={styles.right}>
            <Text>下一場</Text>
            <Text>icon</Text>
          </Col>
        </Row>
        <Row>
          <Col style={styles.left}>
            <Text>獨贏/位置</Text>
          </Col>
          <Col style={styles.left}>
            <Text>連贏/位置Q</Text>
          </Col>

          <Col style={styles.right}>
            <Text>三重彩</Text>
          </Col>
          <Col style={styles.right}>
            <Text>四連環</Text>
          </Col>
          <Col style={styles.right}>
            <Text>四連環</Text>
          </Col>
        </Row>
        <Row>
          <Col style={styles.left}>
            <Text>馬匹</Text>
          </Col>
          <Col style={styles.left}>
            <Text>牛精大哥</Text>
          </Col>

          <Col style={styles.right}>
            <Text>創意寶</Text>
          </Col>
          <Col style={styles.right}>
            <Text>金剛秀</Text>
          </Col>
          <Col style={styles.right}>
            <Text>雷超</Text>
          </Col>
        </Row>
        <Row>
          <Col style={styles.left}>
            <Text>膽</Text>
          </Col>
          <Col style={styles.left}>
            <Text>永旺喜喜</Text>
          </Col>
          <Col style={styles.left}>
            <Text>駕迅</Text>
          </Col>
        </Row>
        <Row>
          <Col style={styles.left}>
            <Text>腳</Text>
          </Col>
          <Col style={styles.left}>
            <Text>易勝相吸</Text>
          </Col>
        </Row>

        <Row>
          <Col style={styles.left}>
            <Text>顯示所有賠率</Text>
          </Col>
        </Row>

        <Row>
          <Col style={styles.left}>
            <Text>實時賠率 共3注</Text>
          </Col>
          <Col style={styles.left}>
            <Text>連贏 </Text>
          </Col>
          <Col style={styles.left}>
            <Text>位置Q</Text>
          </Col>
        </Row>
        <Row>
          <Col style={styles.left}>
            <Text>連贏 3 - 6</Text>
          </Col>
          <Col style={styles.left}>
            <Text>33.2 </Text>
          </Col>
          <Col style={styles.left}>
            <Text>22</Text>
          </Col>
        </Row>
        <Row>
          <Col style={styles.left}>
            <Text>連贏 3 - 9</Text>
          </Col>
          <Col style={styles.left}>
            <Text>45 </Text>
          </Col>
          <Col style={styles.left}>
            <Text>33.8</Text>
          </Col>
        </Row>
        <Row>
          <Col style={styles.left}>
            <Text>連贏 6 - 9</Text>
          </Col>
          <Col style={styles.left}>
            <Text>68 </Text>
          </Col>
          <Col style={styles.left}>
            <Text>43.1</Text>
          </Col>
        </Row>
        <Row>
          <Col style={styles.left}>
            <Text>icon</Text>
          </Col>
          <Col style={styles.left}>
            <Text>AI 對沖下注建議</Text>
          </Col>
        </Row>
        <Row>
          <Col style={styles.left}>
            <Text>總金額</Text>
          </Col>
          <Col style={styles.left}>
            <TextInput />
          </Col>
        </Row>
        <Row>
          <Col style={styles.left}>
            <Text>馬號</Text>
          </Col>
          <Col style={styles.left}>
            <Text>彩池</Text>
          </Col>
          <Col style={styles.left}>
            <Text>賠率</Text>
          </Col>
          <Col style={styles.left}>
            <Text>額</Text>
          </Col>
          <Col style={styles.left}>
            <Text>預計派彩</Text>
          </Col>
        </Row>
        <Row>
          <Col style={styles.left}>
            <Text>3-6</Text>
          </Col>
          <Col style={styles.left}>
            <Text>位置Q</Text>
          </Col>
          <Col style={styles.left}>
            <Text>22</Text>
          </Col>
          <Col style={styles.left}>
            <Text>280</Text>
          </Col>
          <Col style={styles.left}>
            <Text>6160</Text>
          </Col>
        </Row>
        <Row>
          <Col style={styles.left}>
            <Text>3-9</Text>
          </Col>
          <Col style={styles.left}>
            <Text>連贏</Text>
          </Col>
          <Col style={styles.left}>
            <Text>45</Text>
          </Col>
          <Col style={styles.left}>
            <Text>130</Text>
          </Col>
          <Col style={styles.left}>
            <Text>5850</Text>
          </Col>
        </Row>
        <Row>
          <Col style={styles.left}>
            <Text>6-9 </Text>
          </Col>
          <Col style={styles.left}>
            <Text>連贏</Text>
          </Col>
          <Col style={styles.left}>
            <Text>68</Text>
          </Col>
          <Col style={styles.left}>
            <Text>90</Text>
          </Col>
          <Col style={styles.left}>
            <Text>6120</Text>
          </Col>
        </Row>
        <Row>
          <Text>對沖下注是因應不同的賠率, 自動制定不同的投注金額, 以平衡派彩的回報. </Text>
        </Row>
      </Grid>
      
    );
  }
}

export default FirstScreen;
