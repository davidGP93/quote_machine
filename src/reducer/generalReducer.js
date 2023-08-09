import {
  GENERAL_QUOTES,
  CHANGE_QUOTE,
  CHANGE_BACKGROUND_COLOR,
} from "../actions/types";
import { randomNumber, colorNames } from "../utils/random";

export const initialState = {
  quotes: [],
  currentQuote: { text: "I think therefore I am.", author: "Rene Descartes" },
  backGroundColor: "",
};

const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case GENERAL_QUOTES:
      return {
        ...state,
        quotes: action.payload,
      };
    case CHANGE_QUOTE:
      let copyQuotes = [...state.quotes];
      let randomIndex = randomNumber(copyQuotes);
      let randomQuote = copyQuotes[randomIndex];
      let modifiedQuote = { ...randomQuote };
      if (randomQuote.author.split(",").length > 1) {
        modifiedQuote = {
          ...randomQuote,
          author: randomQuote.author.split(",")[0].trim(),
        };
      }
      return {
        ...state,
        currentQuote: modifiedQuote,
      };
    case CHANGE_BACKGROUND_COLOR:
      let indexColor = randomNumber(colorNames);
      let currentColor = colorNames[indexColor];
      return {
        ...state,
        backGroundColor: currentColor,
      };

    default:
      return state;
  }
};

export default generalReducer;
