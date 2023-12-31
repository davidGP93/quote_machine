import { useContext, useEffect } from "react";
import "./App.scss";
import { GeneralContext } from "./context/GeneralContext";
import {
  CHANGE_BACKGROUND_COLOR,
  CHANGE_QUOTE,
  GENERAL_QUOTES,
} from "./actions/types";
import useData from "./services/useData";

function App() {
  const { dispatch, state } = useContext(GeneralContext);
  const { fetchData } = useData();

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      dispatch({ type: GENERAL_QUOTES, payload: data });
    };

    getData();
  }, [dispatch, fetchData]);

  const handleQuoteChange = () => {
    dispatch({ type: CHANGE_QUOTE });
    dispatch({ type: CHANGE_BACKGROUND_COLOR });
  };

  const headerStyle = {
    background: state.backGroundColor,
    color:
      state.backGroundColor === "white" ||
      state.backGroundColor === "yellow" ||
      state.backGroundColor === "gray" ||
      state.backGroundColor === "cyan" ||
      state.backGroundColor === "purple" ||
      state.backGroundColor === "lime" ||
      state.backGroundColor === "pink"
        ? "black"
        : "white",
  };

  return (
    <>
      <section className="app">
        <header style={headerStyle} className="app-header">
          {state?.currentQuote?.text ? (
            <>
              <h1>{state.currentQuote.text}</h1>
              <p>
                {state.currentQuote.author
                  ? state.currentQuote.author
                  : "Anonimo"}
              </p>
            </>
          ) : (
            <p>Loading ...</p>
          )}

          <button onClick={handleQuoteChange}>change quote</button>
        </header>
      </section>
    </>
  );
}

export default App;
