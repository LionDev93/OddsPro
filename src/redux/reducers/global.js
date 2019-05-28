import * as ActionType from "../actionType";

const initState = {
  cards: null,
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
    default:
      return state;
  }
};

export default globalReducer;
