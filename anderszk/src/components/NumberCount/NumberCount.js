import React, { useState, useEffect } from "react";

function NumberCount({ max, type }) {
  const [count, setCount] = useState(0);

  if (type == "country") {
    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < max) {
          return prevCount + 1;
        } else {
          clearInterval(timer);
          return prevCount;
        }
      });
    }, 100);
  }
  if (type == "cash") {
    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < max) {
          return prevCount + 1000;
        } else {
          clearInterval(timer);
          return prevCount;
        }
      });
    }, 100);
  }
  if (type == "percent") {
    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < max) {
          return prevCount + 1;
        } else {
          clearInterval(timer);
          return prevCount;
        }
      });
    }, 100);
  }

  return <p>{count}</p>;
}

export default NumberCount;
