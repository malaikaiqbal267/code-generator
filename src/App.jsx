import { useState } from 'react';
import './App.css';

const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "The purpose of our lives is to be happy. - Dalai Lama",
  "Get busy living or get busy dying. - Stephen King",
  "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Act as if what you do makes a difference. It does. - William James",
  "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
  "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs",
  "The best way to predict the future is to invent it. - Alan Kay"
];

function App() {
  const [quote, setQuote] = useState("");

  function generateRandomQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }

  return (
    <>
      <h1>Random Quotes Generator</h1>
      {quote && <p>{quote}</p>}
      <button onClick={generateRandomQuote}>Generate Random Quote</button>
      
    </>
  );
}

export default App;
