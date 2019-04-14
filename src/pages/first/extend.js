import React from "react";
import { View, ImageBackground, Image } from "react-native";
import { Container, Content, Text, Button, Grid, Col, Row } from "native-base";
import styles from "./style";

class Card1 extends React.Component {
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
            <Text>Image</Text>
          </Col>
          <Col style={styles.right}>
            <Row>
              <Col>
                <Text>馬名: </Text>
              </Col>
              <Col>
                <Text>樂滿家 </Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Text>出生地: </Text>
              </Col>
              <Col>
                <Text>澳洲 </Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Text>年齡: </Text>
              </Col>
              <Col>
                <Text>5</Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Text>出場次數: </Text>
              </Col>
              <Col>
                <Text>20</Text>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Text>Icon</Text>
          </Col>
          <Col>
            <Text>AI 綜合評分為</Text>
          </Col>
          <Col>
            <Text>64</Text>
          </Col>
        </Row>
        <Row>
          <Text>大數據統計及分析: </Text>
        </Row>
        <Row>
          <Col>
            <Text>參加比賽20次, 3次冠軍, 2次亞軍, 1次季軍, 獲勝比率</Text>
          </Col>
          <Col>
            <Text>30%</Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <Text>跑14次1000米, 6次1200米, 1次1400米 喜好屬於</Text>
          </Col>
          <Col>
            <Text>短途馬</Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <Text>首次評分82, 最近評分90, 平均評分85, 評分屬於</Text>
          </Col>
          <Col>
            <Text>進步馬</Text>
          </Col>
        </Row>

        <Row>
          <Col>
            <Text>6次得獎比賽, 有4次是跑馬地, 2次沙田 場地喜好</Text>
          </Col>
          <Col>
            <Text>跑馬地</Text>
          </Col>
        </Row>

        <Row>
          <Col>
            <Text>首次評分82, 最近評分90, 平均評分85, 評分屬於</Text>
          </Col>
          <Col>
            <Text>草地</Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <Text>
              走位數據: 分析所有得獎比賽, 馬匹開閘 *********, 走位類型屬於
            </Text>
          </Col>
          <Col>
            <Text> VIP</Text>
          </Col>
        </Row>

        <Row>
          <Col>
            <Text>
              配備數據: 分析所有得獎比賽, 配帶**** 有***%勝出機率, 配備喜好
            </Text>
          </Col>
          <Col>
            <Text> VIP</Text>
          </Col>
        </Row>

        <Row>
          <Col>
            <Text>
              負磅分析: 根據所有比賽及負磅分析, 負磅介乎于 *** - *** 比較有利{" "}
            </Text>
          </Col>
          <Col>
            <Text> VIP</Text>
          </Col>
        </Row>
        <Row>
          <Text>
            免責聲明 綜合評分及大數據統計及分析是根據馬匹所有出場的資料,
            利用大數據分析及AI比較其他馬匹 為基準的綜合分數或結論,
            資料結果並不是由馬會或其他機構提供；此分數只作為參考用途,
            我們並不會因為任何資料誤差或統計結果而承擔任何損失和責任.
          </Text>
        </Row>
        <Row>
          <Col>
            <Text>升級成為VIP</Text>
          </Col>
          <Col>
            <Text> 分享給朋友</Text>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default FirstScreen;
