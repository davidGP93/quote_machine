import React from "react";

const quoteBox = ({state, handleQuoteChange}) => {
  return (
    <section className="quote-box">
      <article className="quote-text">
        {state?.currentQuote?.text ? (
          <h1>{state.currentQuote.text}</h1>
        ) : (
          <p>Loading ...</p>
        )}
      </article>
      <article className="quote-author">
        <p>
          {"- "}
          {state.currentQuote.author ? state.currentQuote.author : "Anonimo"}
        </p>
      </article>
      <div className="buttons">
        <button onClick={handleQuoteChange}>change quote</button>
      </div>
    </section>
  );
};

export default quoteBox;
