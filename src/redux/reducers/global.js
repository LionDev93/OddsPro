import * as ActionType from "../actionType";

const initState = {
  cards: null,
  prevCards: null,
  cardInfo: {},
  odds: {},
  message: '',
  dateText: '',
};

const globalReducer = (state = initState, action) => {

  switch (action.type) {

    case ActionType.GET_CARD_OK:
      const { cards, dateText } = action.payload;
      return {
        ...state,
        cards: cards,
        dateText: dateText,
      };
    case ActionType.GET_CARD_NOK:
      const { message } = action.payload;
      return {
        ...state,
        message: message,
      };
    case ActionType.GET_PREV_CARD_OK:
      const { prevCards } = action.payload;
      return {
        ...state,
        prevCards: prevCards,
      };
    case ActionType.GET_BASIC_INFO_OK:
        const { raceNum, cardInfo } = action.payload;
        return {
          ...state,
          cardInfo: {
            ...state.cardInfo,
            [raceNum]: cardInfo,
          },
        };
      case ActionType.GET_BASIC_INFO_NOK:

        return {
          ...state,
          message: action.payload.message,
        };
    case ActionType.GET_RACE_ODDS_OK:
      const { racenum, odds } = action.payload;
      return {
        ...state,
        odds: {
          ...state.odds,
          [racenum]: odds,
        }
      };
    case ActionType.GET_RACE_ODDS_NOK:

      return {
        ...state,
        message: action.payload.message,
      };
    default:
      return state;
  }
};

export default globalReducer;
