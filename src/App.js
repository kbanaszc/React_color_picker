import "./styles.css";
import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function App() {
  const colors = [
    "#FE0000",
    "#924E7D",
    "#EFA94A",
    "#7E7B52",
    "#D95030",
    "#587246",
    "#F75E25",
    "#00BB2D",
    "#EA899A",
    "#E5BE01"
  ];

  const [background, setBackground] = useState("#152e20");
  const [currentColor, setCurrent] = useState(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrent(null);
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [currentColor]);

  return (
    <div className="App" style={{ background: background }}>
      {currentColor !== null && <h1>Copied {currentColor}</h1>}
      <div className="container">
        {colors.map((color, index) => (
          <div key={index} className="card">
            <div
              style={{
                background: color,
                filter: "brightness(85%)",
                boxShadow: color === background ? "0 0 5px #000" : ""
              }}
              className="box"
              onClick={() => setBackground(color)}
            />
            <CopyToClipboard text={`color: ${color};`}>
              <p
                style={{ color: color === background ? "#fff" : color }}
                onClick={() => setCurrent(color)}
              >
                {color}
              </p>
            </CopyToClipboard>
          </div>
        ))}
      </div>
    </div>
  );
}
