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
      selected: "key1",
      selectedType: 1,
      OddsResult: [],
      betType: {
        id: 1,
        name: "獨贏/位置",
        w1: '獨贏',

        w2: '位置',
        oddsName: [
          '獨贏',
          '位置'
        ],
        odds: [
          'win', 
          'pla'
        ]
      },
      betTypes: [
        {
          id: 1,
          name: "獨贏/位置",
          w1: '獨贏',

          w2: '位置',
          oddsName: [
            '獨贏',
            '位置'
          ],
          odds: [
            'win', 
            'pla'
          ]
        },
        {
          id: 2,
          name: "連贏/位置Q",
          w1: '膽',

          w2: '腳',

          oddsName: [
            '膽',
            '腳'
          ],
          odds: [
            'qin', 
            'qpl'
          ]
        },
        {
          id: 3,
          name: "三重彩",
          w1: '膽',
          w2: '腳',
        },
        {
          id: 4,
          name: "单T",
          w1: '膽',
          w2: '腳',
        },
        {
          id: 5,
          name: "四连环",
          w1: '膽',
          w2: '腳',
        },
        {
          id: 6,
          name: "四重彩",
          w1: '膽',
          w2: '腳',
        },
        {
          id: 7,
          name: "马宝",
          w1: '膽',
          w2: '腳',
        },
      ],
      list1: [
        // {
        //   id: 1,
        //   name: "金剛仔"
        // },
        // {
        //   id: 2,
        //   name: "悅目星光"
        // },
        // {
        //   id: 3,
        //   name: "藍海策略"
        // },
        // {
        //   id: 4,
        //   name: "睡眠大學"
        // },
        // {
        //   id: 5,
        //   name: "一舖成名"
        // },
        // {
        //   id: 6,
        //   name: "二郎"
        // },
        // {
        //   id: 7,
        //   name: "萬事醒"
        // },
        // {
        //   id: 8,
        //   name: "得意"
        // },
        // {
        //   id: 9,
        //   name: "事必獲利"
        // },
        // {
        //   id: 10,
        //   name: "暴風俠"
        // },
        // {
        //   id: 11,
        //   name: "神馬飛揚"
        // }
        // ,
        // {
        //   id: 12,
        //   name: "駿協精英"
        // }
      ],
      list2: [],
      list3: [],
    };
  }

  onValueChange(value: string) {

    this.setState({
      selected: value
    });
  }

  // showAllOdds = () => {
  //   this.props.navigation.navigate("all");
  // };

  dropToList1 = e => {
    const {id, type} = e
    if(type == 'list2'){
      this.setState({
        list2: this.state.list2.filter(item => item.id != id)
      });
    }
    
    if(type == 'list3'){
      this.setState({
        list3: this.state.list3.filter(item => item.id != id)
      });
    }
    
  };

  dropToList2 = e => {
    const {id, type} = e
    if(type != 'list1')
      return

    this.setState({
      list2: [e, ...this.state.list2]
    });
  };

  dropToList3 = e => {
    const {id, type} = e
    if(type != 'list1')
      return

    this.setState({
      list3: [e, ...this.state.list3]
    });
  };

  static getDerivedStateFromProps(props, state) {
    let s = {}
    if (state.racenum == 0) {
       s =  {
        
          racenum: props.racenum
  
      };
    }


    if(props.cardInfo){
      // console.error('hey')
      const list = props.cardInfo.horseViewList

      const list1 = list && list.map(item => {
        return {
          id: item.runnerno,
          name: item.horsenamechs,
        }
      })

      s = {
        ...s,
        list1: list1
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
      list.push(res1.data)
      
      const res2 = await API.get_raceodds_api(racenum, type2)
      list.push(res2.data)

     


    this.setState({
      OddsResult: list,
    })
    
    // console.error(racenum, type, data)

    

  }

  onUpdRaceNum = async () => {
    await this.updateOdds()
    await this.props.getCardInfo(this.state.racenum)
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
     }, () => this.updateOdds())
     

     //await this.props.getCardInfo(this.state.racenum)

  }

  render() {
    // // const { racenum } = this.props
    // this.state.OddsResult.length > 0 ? console.error(
    //   this.state.OddsResult[0].data) : ''
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
              onPress={() => this.state.racenum < 3 ? this.setState({racenum: this.state.racenum + 1}, () => this.onUpdRaceNum()) : ''}
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
                  {this.state.list1.map((item, i) => (
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
              <Text style={styles.row2ColTitle}>{this.state.selectedType == 1 ? '獨贏' : '膽'}</Text>
            </Col>

            <Col style={{ flex: 8 }}>
              <DropZone onDrop={e => this.dropToList2(e)}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  style={{ width: "100%", height: 95 }}
                >
                  {this.state.list2.map((item, i) => (
                    <Draggy key={i} id={item.id} name={item.name} type="list2" />
                  ))}
                </ScrollView>
              </DropZone>
            </Col>
          </Row>

          <Row style={styles.horsesBg}>
            <Col style={[styles.row2ColTitleBg, { flex: 2 }]}>
              <Text style={styles.row2ColTitle}>{this.state.selectedType == 1 ? '位置' : '腳'}</Text>
            </Col>
            <Col style={{ flex: 8 }}>
              <DropZone onDrop={e => this.dropToList3(e)}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  style={{ width: "100%", height: 95 }}
                >
                  {this.state.list3.map((item, i) => (
                    <Draggy key={i} id={item.id} name={item.name} type="list3" />
                  ))}
                </ScrollView>
              </DropZone>
            </Col>
          </Row>
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
            <Text style={styles.row6Text}>實時賠率 共3注</Text>
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
        {this.state.OddsResult.length > 0 ? (
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
        )}
        

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
