import React, { useState, useEffect } from "react";
import "./RandomQuote.css";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";

const RandomQuote = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(
          "https://api.api-ninjas.com/v1/quotes?category=happiness",
          {
            headers: {
              "X-Api-Key": "Ma/4AdLKUKhtrw6Mt3SzPA==cmXEcUT9ZYmfbClT", // Replace 'vh' with your actual API key
            },
          }
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        if (data.length > 0) {
          setQuote(data[0].quote);
        } else {
          setQuote("No quotes available");
        }
      } catch (error) {
        console.error("Request failed:", error);
        setQuote("Failed to fetch quote");
      }
    };

    fetchQuote(); // Initial fetch
    const intervalId = setInterval(fetchQuote, 5000); // Fetch every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="quote-container">
      <h3>Quotes of the day</h3>
      <p>
        <FaQuoteLeft color="gray" /> {quote} <FaQuoteRight color="gray" />
      </p>
    </div>
  );
};

export default RandomQuote;
