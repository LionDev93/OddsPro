import * as API from "../services/api";
import * as ActionType from "./actionType";

export const getCards = async () => {
  const res = await API.first_card_api();

  console.log(res);
  const { data } = res;

  const keys = Object.keys(data);

  const dateText = keys[0];
  console.log(dateText);

  const cards = data[dateText];
  console.log(cards);
  if (res.status)
    return {
      type: ActionType.GET_CARD_OK,
      payload: {
        cards: cards,
        dateText: dateText
      }
    };
  else {
    return {
      type: ActionType.GET_CARD_NOK,
      payload: {
        message: res.message
      }
    };
  }
};

export const getPrevCards = async () => {
  const res = await API.previous_first_card_api();

  const { data } = res;

  const cards = data;
  if (res.status)
    return {
      type: ActionType.GET_PREV_CARD_OK,
      payload: {
        prevCards: cards
      }
    };
  else {
    return {
      type: ActionType.GET_CARD_NOK,
      payload: {
        message: res.message
      }
    };
  }
};


export const getLivePrevCards = async () => {
  const res = await API.previous_live_record_api();

  const { data } = res;

  const cards = data;
  console.log('const cards = res;', cards)
  if (res.status)
    return {
      type: ActionType.GET_PREV_CARD_OK,
      payload: {
        prevCards: cards
      }
    };
  else {
    return {
      type: ActionType.GET_PREV_CARD_NOK,
      payload: {
        message: res.message
      }
    };
  }
};


export const getBasicInfo = async raceNum => {
  const res = await API.get_basic_info_api(raceNum);

  console.log(res);

  if (res.status)
    return {
      type: ActionType.GET_BASIC_INFO_OK,
      payload: {
        cards: res.data
      }
    };
  else {
    return {
      type: ActionType.GET_BASIC_INFO_NOK,
      payload: {
        message: res.message
      }
    };
  }
};

export const getCardInfo = async (raceId, raceNum) => {
  const res = await API.get_upcoming_raceinfo_horsedetail_api(raceNum);

  console.log(res);

  if (res.status) {
    res.data.horseViewList.sort((a, b) => {
      return a.runnerno - b.runnerno;
    });
    return {
      type: ActionType.GET_BASIC_INFO_OK,
      payload: {
        raceNum: raceNum,
        cardInfo: res.data,
        currentRaceID: res.data.raceid,
      }
    };
  } else {
    return {
      type: ActionType.GET_BASIC_INFO_NOK,
      payload: {
        message: res.message
      }
    };
  }
};

export const getRaceOdds = async (raceNum, raceType) => {
  const res = await API.get_raceodds_api(raceNum, raceType);

  console.log(res);

  if (res.status)
    return {
      type: ActionType.GET_RACE_ODDS_OK,
      payload: {
        racenum: raceNum,
        odds: res.data.data.map(odd => {
          let val = odd.split("=");
          return {
            pattern: val[0],
            odd: val[1]
          };
        })
      }
    };
  else {
    return {
      type: ActionType.GET_RACE_ODDS_NOK,
      payload: {
        message: res.message
      }
    };
  }
};

export const openCard = async raceId => {
  return {
    type: ActionType.OPEN_CARD_OK,
    payload: {
      raceId: raceId,
   
    }
  };
};

export const getRaceAnalysis = async (raceId) => {
  console.log('getRaceAnalysis', 'HERE');
  const res = await API.race_analysis(raceId);

  console.log('getRaceAnalysis', res);

  if (res.status) {
    if(res.message != null)
    return {
      type: ActionType.GET_RACE_ANALYSIS_NO_RESULT,
      payload: {
        raceAnalysis: null,
        message: res.data.message
      }
    };

    return {
      type: ActionType.GET_RACE_ANALYSIS_OK,
      payload: {
        
        raceAnalysis: res.data
      }
    };
  } else {
    return {
      type: ActionType.GET_RACE_ANALYSIS_NOK,
      payload: {
        message: res.message
      }
    };
  }
};

export const setCurrentRaceID = async (raceID) => {
  

    return {
      type: ActionType.SET_CURRENT_RACE_ID,
      payload: {
        currentRaceID: raceID,

      }
    };
 
};