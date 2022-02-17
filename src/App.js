import "./styles.css";
import React, { useState } from "react";

var BooksDB = {
  Fantasy: [
    {
      name: "Percy Jackson & the Olympians",
      Ratings: "4.33/5",
      Author: "Rick Riordan"
    },
    { name: "The Alchemist", Ratings: "3.9/5", Author: " Paulo Coelho" }
  ],
  Fiction: [
    {
      name: "Looking For Alaska",
      Ratings: "3.9/5",
      Author: "John Green"
    },
    {
      name: "Death in the Sunshine",
      Ratings: "3.98/5",
      Author: "Steph Broadribb"
    }
  ],
  Mystery: [
    {
      name: "The Fields",
      Ratings: "3.67/5",
      Author: "Erin Young"
    },
    { name: "[Hyouka]", Ratings: "4.12/5", Author: "Honobu Yonezawa" },
    {
      name: "Classroom of the Elite",
      Ratings: "4.20/5",
      Author: "Syougo Kinugasa"
    }
  ]
};

var BooksfromBooksDB = Object.keys(BooksDB);

export default function App() {
  const [selectedGenre, setgenre] = useState("Fantasy");

  function ClickHandler(genre) {
    setgenre(genre);
  }
  return (
    <div className="App">
      <h1>Good Books</h1>
      <h2>Here are some of my recommended Books</h2>
      <div>
        {BooksfromBooksDB.map((genre) => (
          <button
            onClick={() => ClickHandler(genre)}
            style={{
              listStyle: "none",
              padding: "1rem",
              border: "1px",
              background: "#E5E7EB",
              border: "2px",
              margin: "0.5rem",
              borderRadius: "0.8rem",
              cursor: "pointer"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <div>
        <ul>
          {BooksDB[selectedGenre].map((Books) => (
            <li
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                margin: "1rem",
                borderRadius: "1.5rem"
              }}
              key={BooksDB.name}
            >
              <div style={{ font: "larger" }}>{Books.name}</div>
              <div style={{ fontSize: "small" }}>{Books.Author}</div>
              <div style={{ fontSize: "smaller" }}>{Books.Ratings}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
