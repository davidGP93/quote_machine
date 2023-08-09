import { createContext, useReducer } from "react";
import generalReducer from "../reducer/generalReducer";
import { initialState } from "../reducer/generalReducer";
import Proptypes from "prop-types";

export const GeneralContext = createContext(initialState);
export const GeneralProvider = ({ children }) => {
  const [state, dispatch] = useReducer(generalReducer, initialState);
  return (
    <GeneralContext.Provider value={{ state, dispatch }}>
      {children}
    </GeneralContext.Provider>
  );
};

GeneralProvider.propTypes = {
  children: Proptypes.node.isRequired,
};
