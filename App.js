import "./styles.css";
import React, { useState } from "react";

var emojiDictionary = {
  "⚽": "Soccer Ball",
  "⚾": "Baseball",
  "🥎": "Softball",
  "🏀": "Basketball",
  "🏐": "Volleyball",
  "🏈": "American Football",
  "🏉": "Rugby Football",
  "🎱": "Pool 8 Ball",
  "🥏": "Flying Disc",
  "🎳": "Bowling",
  "🎾": "Tennis",
  "🏏": "Cricket Game",
  "🏓": "Ping Pong",
  "🏸": "Badminton",
  "🏏": "Cricket Game"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "oops! We don't seem to have this in our Database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ padding: "1rem" }}>What's Y⚽ur Sp🏀rt?</h1>
      <h2> Click on an Emoji or put one in the search box. </h2>
      <input onChange={emojiInputHandler} />
      <h2 style={{ color: "#4B5563" }}> {meaning} </h2>
      <hr />
      <h3> Find your Emoji! </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "2rem",
              padding: "0.7rem",
              cursor: "pointer",
              maxWidth: "400px",
              margin: "auto"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
      <br />
      <br /> <br /> <br />
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIl6dCF5LZro_o2PGv1Uf-OY4D7U8BEFBXZA&usqp=CAU" />
      </div>
    </div>
  );
}
