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
  Picker,
  Form
} from "native-base";
import styles from "./style";
import { DragContainer, Draggable, DropZone } from "../../index";
import { connect } from "react-redux";
import * as Actions from "../../redux/action";
import * as API from '../../services/api'
import timer from "react-native-timer";


class OddCard extends React.Component {
  constructor(props) {
    super(props);

    /**
     *
     *
    独赢,位置
    win,pla,
    连赢,位置Q
    qin, qpl,
    三重彩
    tcetopn,tcebanker,
    单T
    tritopn,tribanker,trifull,
    四连环
    fftopn,ffbanker,fffull,
    四重彩
    qtttopn,qttbanker,
    马宝
    dbl,cwa,cwb,cwc
     */

    this.state = {
      racenum: 0,
      selected: [],
      amount: 1000,
      selectedType: 1,
      OddsResult: {},
      betType: {
        id: 1,
        name: "獨贏/位置",
        w1: '獨贏/位置',
        oddsName: [
          '獨贏',
          '位置'
        ],
        odds: [
          'win',
          'pla'
        ],
        list1: [],
        list2: [],
        list3: [],
      },
      betTypes: [
        {
          id: 1,
          name: "獨贏/位置",
          w1: '獨贏/位置',
          oddsName: [
            '獨贏',
            '位置'
          ],
          odds: [
            'win',
            'pla'
          ],
          list1: [],
          list2: [],
          list3: [],
        },
        {
          id: 2,
          name: "連贏/位置Q",
          w1: '膽',

          w2: '腳',

          oddsName: [
            '連贏',
            '位置Q'
          ],
          odds: [
            'qin',
            'qpl'
          ],
          list2limit: 1,
          list1: [],
          list2: [],
          list3: [],
        },
        {
          id: 3,
          name: "三重彩",
          w1: '第一馬膽',
          w2: '第二馬膽',
          w3: '馬腳',
          oddsName: [
            '三重彩'
          ],
          odds: [
            'tce'
          ],
          list1: [],
          list2: [],
          list3: [],
          list4: [],
        },
        {
          id: 4,
          name: "單T",
          w1: '膽',
          w2: '腳',
          oddsName: [
            '單T'
          ],
          odds: [
            'tri'
          ],
          list1: [],
          list2: [],
          list3: [],
        },
        {
          id: 5,
          name: "四連環",
          w1: '膽',
          w2: '腳',
          oddsName: [
            '四連環'
          ],
          odds: [
            'ff'
          ],
          list1: [],
          list2: [],
          list3: [],
        },
        {
          id: 6,
          name: "四重彩",
          w1: '膽',
          w2: '腳',
          oddsName: [
            '四連環'
          ],
          odds: [
            'qtt'
          ],
          list1: [],
          list2: [],
          list3: [],
        },
        /*{
          id: 7,
          name: "孖寶",
          w1: '膽',
          w2: '腳',
          oddsName: [
            '四連環'
          ],
          odds: [
            'qtt'
          ],
          list1: [],
          list2: [],
          list3: [],
        },*/
      ],
      list1: [
      ],
      list2: [],
      list3: [],
    };
  }

  onValueChange(i, value: string) {
    let selected = this.state.selected
    selected[i] = value
    this.setState({
      ...this.state,
      selected: selected
    });
  }

  showAllOdds = () => {
    this.props.navigation.navigate("all");
  };

  dropToList1 = e => {
    const {id, type} = e
    const s = this.state
    if(type == 'list1')
      return

    this.setState({
      ...s,
      betType: {
        ...s.betType,
        list1: [e, ...s.betType.list1].sort((a, b) => a.id - b.id),
        list2: s.betType.list2.filter(item => item.id != e.id).sort((a, b) => a.id - b.id),
        list3: s.betType.list3.filter(item => item.id != e.id).sort((a, b) => a.id - b.id),
      }
    });
  };

  dropToList2 = e => {
    const {id, type} = e
    const s = this.state
    if(type == 'list2')
      return
    if (s.betType.list2limit && s.betType.list2.length >= s.betType.list2limit)
      return

    this.setState({
      ...s,
      betType: {
        ...s.betType,
        list1: s.betType.list1.filter(item => item.id != e.id).sort((a, b) => a.id - b.id),
        list2: [e, ...s.betType.list2].sort((a, b) => a.id - b.id),
        list3: s.betType.list3.filter(item => item.id != e.id).sort((a, b) => a.id - b.id),
      }
    });
  };

  dropToList3 = e => {
    const {id, type} = e
    const s = this.state
    if(type != 'list1')
      return

    this.setState({
      ...s,
      betType: {
        ...s.betType,
        list1: s.betType.list1.filter(item => item.id != e.id).sort((a, b) => a.id - b.id),
        list2: s.betType.list2.filter(item => item.id != e.id).sort((a, b) => a.id - b.id),
        list3: [e, ...s.betType.list3].sort((a, b) => a.id - b.id)
      }
    });
  };

  static getDerivedStateFromProps(props, state) {
    let s = state
    if (state.racenum == 0) {
       s =  {
          ...s,
          racenum: props.racenum

      };
    }

    if(props.cardInfo && s.list1.length == 0){
      // console.error('hey')
      const list = props.cardInfo[props.racenum].horseViewList

      const list1 = list && list.map(item => {
        return {
          id: item.runnerno,
          name: item.horsenamecht,
        }
      })

      s = {
        ...s,
        list1: list1,
        betType: {
          ...s.betType,
          list1: list1,
        },
        betTypes: s.betTypes.map(t => {
          return {
            ...t,
            list1: list1,
          };
        })
      }
    }

    return s;
  }

  updateOdds = async () => {
    //get race oodd

      const list = []
      let type1 = this.state.betType.odds[0]
      let type2 = this.state.betType.odds[1]
      const racenum = this.state.racenum

      const res1 = await API.get_raceodds_api(racenum, type1)

      const res2 = await API.get_raceodds_api(racenum, type2)




    this.setState({
      OddsResult: {
        ...this.state.OddsResult,
        [type1]: res1.data.data.map(odd => {
          let val = odd.split('=')
          return {
            pattern: val[0],
            odd: val[1]
          }
        }),
        [type2]: res2.data.data.map(odd => {
          let val = odd.split('=')
          return {
            pattern: val[0],
            odd: val[1]
          }
        }),
      },
    })

    // console.error(racenum, type, data)



  }

  onUpdRaceNum = async () => {
    await this.updateOdds()
    await this.props.getCardInfo(0, this.state.racenum)
    await this.props.onRefreshRaceAnalysis()

    this.setState({
      ...this.state,
      betType: {
        ...this.state.betType,
        list1: this.props.cardInfo[this.state.racenum].horseViewList.map(item => {
          return {
            id: item.runnerno,
            name: item.horsenamecht,
          }
        }),
        list2: [],
        list3: [],
      }
    })
  }

  componentWillUnmount(){
    timer.clearInterval(this);

  }

  async componentDidMount() {
    this.updateOdds()

    timer.setInterval(
      this,
      "timer",
      () => {
        this.updateOdds()
      },
      5000
    );

  }

  changeBetType = async (betType) =>{
    if(betType.id >= 3) {
      Alert.alert('only support win, pla, qin, qpl for demo')
      return
    }

    this.setState({
      selectedType: betType.id,
      betType: betType,
      betTypes: this.state.betTypes.map(t => {
        if (t.id == this.state.betType.id) return this.state.betType;
        return t;
      })
     }, () => this.updateOdds())


     //await this.props.getCardInfo(this.state.racenum)

  }

  render() {
    // // const { racenum } = this.props
    // this.state.OddsResult.length > 0 ? console.error(
    //   this.state.OddsResult[0].data) : ''
    const { OddsResult, amount } = this.state
    const {id, odds, list2, list3} = this.state.betType
    let type1 = odds[0]
    let type2 = odds[1]
    let betList = []
    if (id == 1) {
      for (let i = 0; i < list2.length; i++) {
        betList.push([list2[i].id])
      }
    } else {
      betList = list3.map(odd => {
        return list2.concat([odd]).map(item => item.id)
      });
    }

    let oddList = betList.map((item, i) => {
      const {betType, selected} = this.state
      const text = item.map(i => ("00"+i).slice(-2)).join('-')
      const type = selected[i]
      let odd = OddsResult[type] && OddsResult[type].find(o => o.pattern == text)
      return odd ? odd.odd : null;
    });
    let rec = [], recsum = 0;
    for (let i = 0; i < oddList.length; i++) {
      if (!oddList[i]) continue;
      let oddproto = parseFloat(1 / oddList[i])
      rec.push(oddproto)
      recsum += oddproto
    }
    let amountList = oddList.map((odd, i) => {
      return odd ? Math.round(rec[i] / recsum * amount / 10) * 10 : 0
    });

    return (
      <Grid style={{paddingBottom: 90}}>
        <Row style={styles.headerBg}>
          <Col style={styles.headerLeft}>
            <TouchableOpacity
              style={styles.headerLeft}
              onPress={() => this.state.racenum > 1 ? this.setState({racenum: this.state.racenum - 1}, () => this.onUpdRaceNum()) : ''}
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
            <Text style={styles.headerText}>第 {this.state.racenum} 場</Text>
          </Col>

          <Col style={styles.headerRight}>
            <TouchableOpacity
              style={styles.headerRight}
              onPress={() => this.state.racenum < this.props.cards.length ? this.setState({racenum: this.state.racenum + 1}, () => this.onUpdRaceNum()) : ''}
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
                <Col
                  key={item.id}
                  style={
                    this.state.selectedType == item.id
                      ? styles.row1ColBgActive
                      : styles.row1ColBg
                  }
                >
                  <TouchableOpacity
                    onPress={this.changeBetType.bind(this, item)}
                  >
                    <Text
                      style={
                        this.state.selectedType == item.id
                          ? styles.row1ColTextActive
                          : styles.row1ColText
                      }
                    >
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                </Col>
              );
            })}
          </ScrollView>
        </View>
        <DragContainer>
          <Row style={styles.horsesBg}>
            <Col style={[styles.row2ColTitleBg, { flex: 2 }]}>
              <Text style={styles.textBlack48}>馬匹</Text>
            </Col>
            <Col style={{ flex: 8 }}>
              <DropZone onDrop={e => this.dropToList1(e)}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  {this.state.betType.list1.map((item, i) => (
                    <Draggy
                      key={i}
                      id={item.id}
                      name={item.name}
                      type="list1"
                    />
                  ))}
                </ScrollView>
              </DropZone>
            </Col>
          </Row>

          <Row style={styles.horsesBg}>
            <Col style={[styles.row2ColTitleBg, { flex: 2 }]}>
              <Text style={styles.row2ColTitle}>{this.state.betType.w1}</Text>
            </Col>

            <Col style={{ flex: 8 }}>
              <DropZone onDrop={e => this.dropToList2(e)}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  style={{ width: "100%", height: 95 }}
                >
                  {this.state.betType.list2.map((item, i) => (
                    <Draggy key={i} id={item.id} name={item.name} type="list2" />
                  ))}
                </ScrollView>
              </DropZone>
            </Col>
          </Row>

          {this.state.betType.w2 &&
          <Row style={styles.horsesBg}>
            <Col style={[styles.row2ColTitleBg, { flex: 2 }]}>
              <Text style={styles.row2ColTitle}>{this.state.betType.w2}</Text>
            </Col>
            <Col style={{ flex: 8 }}>
              <DropZone onDrop={e => this.dropToList3(e)}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  style={{ width: "100%", height: 95 }}
                >
                  {this.state.betType.list3.map((item, i) => (
                    <Draggy key={i} id={item.id} name={item.name} type="list3" />
                  ))}
                </ScrollView>
              </DropZone>
            </Col>
          </Row>}

          {this.state.betType.w3 &&
          <Row style={styles.horsesBg}>
            <Col style={[styles.row2ColTitleBg, { flex: 2 }]}>
              <Text style={styles.row2ColTitle}>{this.state.betType.w3}</Text>
            </Col>
            <Col style={{ flex: 8 }}>
              <DropZone onDrop={e => this.dropToList3(e)}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  style={{ width: "100%", height: 95 }}
                >
                  {this.state.betType.list3.map((item, i) => (
                    <Draggy key={i} id={item.id} name={item.name} type="list3" />
                  ))}
                </ScrollView>
              </DropZone>
            </Col>
          </Row>}
        </DragContainer>
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
            <Text style={styles.row6Text}>實時賠率 共{betList.length}注</Text>
          </Col>
          {this.state.betType.oddsName.map((item, i) => {
            return(
              <Col style={styles.row6col2} key={i}>
                <Text style={styles.row6Text1}>{item}</Text>
              </Col>
            )
          })}
          {/* <Col style={styles.row6col2}>
            <Text style={styles.row6Text1}> </Text>
          </Col>
          <Col style={styles.row6col2}>
            <Text style={styles.row6Text1}>位置Q</Text>
          </Col> */}
        </Row>
        {/*this.state.OddsResult.length > 0 ? (
          this.state.OddsResult[0].data.map((item, i) => {
            var splits = item.split('=');

            const item2 = this.state.OddsResult[1].data[i]
            var splits2 = item2.split('=');
            return(
              <Row style={styles.horsesBg} key={i}>
                <Col style={styles.row6col1}>
                  <Text style={styles.row7Text}>連贏 {splits[0]}</Text>
                </Col>
                <Col style={styles.row7col2}>
                  <Text style={styles.row7Text1}>{splits[1]} </Text>
                </Col>
                <Col style={styles.row7col3}>
                  <Text style={styles.row7Text1}>{splits2[1]}</Text>
                </Col>
              </Row>
            )
          })

        ): (
          <React.Fragment/>
        )*/}
        {betList.map((item, i) => {
            const text = item.map(i => ("00"+i).slice(-2)).join('-')
            const odd1 = OddsResult[type1] && OddsResult[type1].find(o => o.pattern == text)
            const odd2 = OddsResult[type2] && OddsResult[type2].find(o => o.pattern == text)
            return(
              <Row style={styles.horsesBg} key={i}>
                <Col style={styles.row6col1}>
                  <Text style={styles.row7Text}>{text}</Text>
                </Col>
                <Col style={styles.row7col2}>
                  <Text style={styles.row7Text1}>{odd1 ? odd1.odd : '-' }</Text>
                </Col>
                <Col style={styles.row7col3}>
                  <Text style={styles.row7Text1}>{odd2 ? odd2.odd : '-' }</Text>
                </Col>
              </Row>
            )
          })
        }


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
              <Input style={styles.row9Col1Text} defaultValue={this.state.amount.toString()}
                onChangeText={(text) => this.setState({...this.state, amount: text})}/>
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
            <Text style={styles.row10Text}>金額</Text>
          </Col>
          <Col>
            <Text style={styles.row10Text}>預計派彩</Text>
          </Col>
        </Row>
        {betList.map((item, i) => {
            const {betType, selected} = this.state
            const text = item.map(i => ("00"+i).slice(-2)).join('-')
            const type = selected[i]
            const odd = OddsResult[type] && OddsResult[type].find(o => o.pattern == text)
            return(
              <Row style={styles.horsesBg}>
                <Col>
                  <Text style={styles.row10Text}>{text}</Text>
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
                    selectedValue={this.state.selected[i]}
                    onValueChange={this.onValueChange.bind(this, i)}
                  >
                    {betType.odds.map((odd, i) => {
                      return (
                        <Picker.Item label={betType.oddsName[i]} value={odd} />
                      )
                    })}
                  </Picker>
                </Col>
                <Col>
                  <Text style={styles.row10Text}>{odd ? odd.odd : '-'}</Text>
                </Col>
                <Col>
                  <Text style={styles.row10Text}>{amountList[i]}</Text>
                </Col>
                <Col>
                  <Text style={styles.row10Text}>{odd ? (odd.odd * amountList[i]).toFixed(2) : '-'}</Text>
                </Col>
              </Row>
            )
          })
        }
        <Row style={[styles.horsesBg, { with: "100%" }]}>
          <Text style={styles.row10Text}>
            對沖下注是因應不同的賠率, 自動制定不同的投注金額, 以平衡派彩的回報.{" "}
          </Text>
        </Row>
      </Grid>
    );
  }
}

export class Draggy extends React.Component {
  render() {
    const { name, id, type } = this.props;
    const item = {
      name,
      id,
      type
    };
    return (
      <Draggable data={item} style={{ margin: 7.5 }}>
        <DropZone>
          <DraggyInner {...this.props} />
        </DropZone>
      </Draggable>
    );
  }
}

export class DraggyInner extends React.Component {
  render() {
    // if (this.props.dragOver && !this.props.ghost && !this.props.dragging) {
    //   return (
    //     <View style={{ height: 100, width: 100, backgroundColor: "green" }} />
    //   );
    // }
    let shadows = {
      shadowColor: "black",
      shadowOffset: { width: 0, height: 20 },
      shadowOpacity: 0.5,
      shadowRadius: 20,
      opacity: 0.5
    };
    const { id, name, type } = this.props;
    const styleType = type == 'list1' ? styles.row2ColBg : type == 'list2' ? styles.row3ColBg : styles.row4ColBg
    return (
      <View style={[styleType, this.props.dragging ? shadows : null]}>
        <View style={styles.circle}>
          <Text style={styles.rowText}>{id}</Text>
        </View>
        <Text style={styles.textWhite36}>{name}</Text>
      </View>
    );
  }
}

// export default OddCard;

const mapState = state => {
  return {
    cards: state.global.cards,
    cardInfo: state.global.cardInfo,
  };
};

const actionCreator = {
  getRaceOdds: Actions.getRaceOdds,
  getCardInfo: Actions.getCardInfo,
};

export default connect(
  mapState,
  actionCreator
)(OddCard);
