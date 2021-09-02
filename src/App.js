import React, { useState } from "react";
import "./style.css";
import { data } from "./data.js";
import logo from "./icons8-get-quote-50.png";
function App() {
  const secretArr = ["i", "lo", "ve", "co", "di", "ng"];

  const [quote, setQuote] = useState(data[0]);
  const [secret, setSecret] = useState(secretArr[0]);
  const { img, author, quote: authorQuote } = quote;

  const randomQuote = () => {
    let randomizer = Math.floor(Math.random() * (7 - 0) - 0);
    setQuote(data[randomizer]);
    setSecret(secretArr[randomizer]);
  };

  return (
    <div className='body'>
      <div className='container'>
        <h1
          className='title-page'
          style={!secret ? { color: "yellow" } : { color: "white" }}
        >
          {secret ? secret : "Crack me genius!"}
        </h1>
        <div id='quote-box' className='quote-box'>
          <img src={img} className='author-image' alt='author' />
          <div id='text' className='quote-text'>
            <img src={logo} alt='quote icon' /> {authorQuote}
          </div>
          <cite id='author' className='quote-author'>
            - {author}
          </cite>

          <div className='buttons'>
            <a
              href={`https://twitter.com/intent/tweet?text=${authorQuote}-${author}`}
              className='tweet-btn'
              target='_blank'
              id='tweet-quote'
              rel='noreferrer'
            >
              <img
                src='https://img.icons8.com/office/40/000000/twitter.png'
                alt='twitter'
              />
            </a>
            <button
              id='new-qoute'
              className='quote-btn btn'
              onClick={randomQuote}
            >
              New Quote
            </button>
          </div>
        </div>
        <span
          style={{
            float: "right",
            textTransform: "uppercase",
            color: "white",
            fontSize: ".75rem",
            marginTop: "1em",
          }}
        >
          by Ryan Arqueza
        </span>
      </div>
    </div>
  );
}

export default App;
