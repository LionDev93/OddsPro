import * as API from "../services/api";
import * as ActionType from "./actionType";

export const getCards = async () => {
  const res = await API.first_card_api();

  console.log(res)
  const {data } = res

  const keys = Object.keys(data)

  const dateText = keys[0]
  console.log(dateText)

  const cards = data[dateText]
  console.log(cards)
  if(res.status)
    return {
      type: ActionType.GET_CARD_OK,
      payload: {
        cards: cards,
        dateText: dateText,
      }
    };
  else{
    return {
      type: ActionType.GET_CARD_NOK,
      payload: {
        message: res.message,
      }
    };
  }
};

export const getPrevCards = async () => {
  const res = await API.previous_first_card_api();

  const {data } = res

  const cards = data
  if(res.status)
    return {
      type: ActionType.GET_PREV_CARD_OK,
      payload: {
        prevCards: cards,
      }
    };
  else{
    return {
      type: ActionType.GET_CARD_NOK,
      payload: {
        message: res.message,
      }
    };
  }
};

export const getBasicInfo = async (raceNum) => {
  const res = await API.get_basic_info_api(raceNum);

  console.log(res)

  if(res.status)
    return {
      type: ActionType.GET_BASIC_INFO_OK,
      payload: {
        cards: res.data
      }
    };
  else{
    return {
      type: ActionType.GET_BASIC_INFO_NOK,
      payload: {
        message: res.message,
      }
    };
  }
};

export const getCardInfo = async (raceId, raceNum) => {
  const res = await API.get_upcoming_raceinfo_horsedetail_api(raceNum);

  console.log(res)

  if(res.status) {
    res.data.horseViewList.sort( (a, b) => {
      return a.runnerno - b.runnerno;
    });
    return {
      type: ActionType.GET_BASIC_INFO_OK,
      payload: {
        raceNum: raceNum,
        cardInfo: res.data
      }
    };
  } else{
    return {
      type: ActionType.GET_BASIC_INFO_NOK,
      payload: {
        message: res.message,
      }
    };
  }
};

export const getRaceOdds = async (raceNum, raceType) => {
  const res = await API.get_raceodds_api(raceNum, raceType);

  console.log(res)

  if(res.status)
    return {
      type: ActionType.GET_RACE_ODDS_OK,
      payload: {
        racenum: raceNum,
        odds: res.data.data.map(odd => {
          let val = odd.split('=')
          return {
            pattern: val[0],
            odd: val[1]
          }
        }),
      }
    };
  else{
    return {
      type: ActionType.GET_RACE_ODDS_NOK,
      payload: {
        message: res.message,
      }
    };
  }
};
