import * as ActionType from "../actionType";

const initState = {
  cards: null,
  prevCards: null,
  cardInfo: {},
  odds: {},
  message: "",
  dateText: "",
  openedCardID: 0,
  raceAnalysis: null,
  raceAnalysisMessage: "",
  currentRaceID: 0
};

const globalReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionType.GET_CARD_OK:
      const { cards, dateText } = action.payload;
      return {
        ...state,
        cards: cards,
        dateText: dateText
      };
    case ActionType.GET_CARD_NOK:
      const { message } = action.payload;
      return {
        ...state,
        message: message
      };
    case ActionType.GET_PREV_CARD_OK:
      const { prevCards } = action.payload;
      return {
        ...state,
        prevCards: prevCards
      };
    case ActionType.GET_BASIC_INFO_OK:
      const { raceNum, cardInfo } = action.payload;
      return {
        ...state,
        cardInfo: {
          ...state.cardInfo,
          [raceNum]: cardInfo
        },
        currentRaceID: action.payload.currentRaceID,
      };
    case ActionType.GET_BASIC_INFO_NOK:
      return {
        ...state,
        message: action.payload.message
      };
    case ActionType.GET_RACE_ODDS_OK:
      const { racenum, odds } = action.payload;
      return {
        ...state,
        odds: {
          ...state.odds,
          [racenum]: odds
        }
      };
    case ActionType.GET_RACE_ODDS_NOK:
      return {
        ...state,
        message: action.payload.message
      };
    case ActionType.OPEN_CARD_OK:
      return {
        ...state,
        openedCardID: action.payload.raceId
      };
    case ActionType.GET_RACE_ANALYSIS_OK:
      return {
        ...state,
        raceAnalysis: action.payload.raceAnalysis
      };
    case ActionType.GET_RACE_ANALYSIS_NO_RESULT:
      return {
        ...state,
        raceAnalysisMessage: action.payload.message,
        raceAnalysis: action.payload.raceAnalysis,
      };
    case ActionType.GET_RACE_ANALYSIS_NOK:
      return {
        ...state,
        message: action.payload.message
      };
    case ActionType.SET_CURRENT_RACE_ID:
      return {
        ...state,
        currentRaceID: action.payload.currentRaceID
      };
    default:
      return state;
  }
};

export default globalReducer;
