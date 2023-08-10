import {
  GENERAL_QUOTES,
  CHANGE_QUOTE,
  CHANGE_BACKGROUND_COLOR,
} from "../actions/types";
import { randomNumber, colorNames } from "../utils/random";

export const initialState = {
  quotes: [],
  currentQuote: {},
  backGroundColor: "",
};

const getInitialState = (data) => {
  const indexRandom = randomNumber(data);
  const randomInitialData = data[indexRandom];
  return randomInitialData;
};

const getRandomQuote = (data) => {
  const randomQuote = getInitialState(data);
  let modifiedQuote = { ...randomQuote };
  if (randomQuote.author.split(",").length > 1) {
    modifiedQuote = {
      ...randomQuote,
      author: randomQuote.author.split(",")[0].trim(),
    };
  }
  return modifiedQuote;
};

const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case GENERAL_QUOTES:
      return {
        ...state,
        quotes: action.payload,
        currentQuote: getInitialState(action.payload),
        backGroundColor: getInitialState(colorNames),
      };
    case CHANGE_QUOTE:
      return {
        ...state,
        currentQuote: getRandomQuote([...state.quotes]),
      };
    case CHANGE_BACKGROUND_COLOR:
      return {
        ...state,
        backGroundColor: getInitialState(colorNames),
      };

    default:
      return state;
  }
};

export default generalReducer;
