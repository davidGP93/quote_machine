import { useContext } from "react";
import "./App.scss";
import { GeneralContext } from "./context/GeneralContext";
import { CHANGE_BACKGROUND_COLOR, CHANGE_QUOTE } from "./actions/types";
import useData from "./services/useData";

function App() {
  const { dispatch, state } = useContext(GeneralContext);
  const { fetchData } = useData();
  fetchData();

  const handleQuoteChange = () => {
    dispatch({ type: CHANGE_QUOTE });
    dispatch({type: CHANGE_BACKGROUND_COLOR})
    console.log(state.currentQuote);
  };

  const headerStyle = {
    background: state.backGroundColor,
    color: state.backGroundColor === "white" || state.backGroundColor === "yellow" || state.backGroundColor === "gray" || state.backGroundColor === "cyan" ? "black" : "white",
  }

  return (
    <>
      <section className="app">
        <header style={headerStyle} className="app-header">
          {state.currentQuote.text ? (
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
