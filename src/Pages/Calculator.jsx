import React, { useState } from "react";
import { toggleButton, Keys } from "../Data/data";
import * as math from "mathjs";

function Calculator() {
  // -----------------------states----------------------------------
  const [theme, setTheme] = useState("1");
  const [result, setResult] = useState("");

  // -----------------------functions----------------------------------
  const handleClick = (value) => {
    if (value === "DEL") {
      setResult((prevResult) => prevResult.slice(0, -1));
    } else {
      setResult((prevResult) => prevResult + value);
    }
  };

  const clearResult = () => {
    setResult("");
  };

  const calculateResult = () => {
    try {
      const calculatedResult = math.evaluate(result);
      setResult(calculatedResult.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  // ---------------------------------------------------------
  const chunkSize = 4; // Number of buttons per row

  const buttonRows = [];
  for (let i = 0; i < Keys.length; i += chunkSize) {
    buttonRows.push(Keys.slice(i, i + chunkSize));
  }

  return (
    // background container
    <div
      className={`flex items-center justify-center min-h-screen ${
        theme === "1"
          ? "bg-Theme1-backgroundOne-main"
          : theme === "2"
          ? "bg-Theme2-backgroundTwo-main"
          : "bg-Theme3-backgroundThree-main"
      } `}
    >
      {/* calculator container */}
      <div className="flex flex-col items-center justify-center max-w-sm">
        {/* calc and toggle */}
        <div className="flex flex-row space-x-28 justify-between">
          <h1
            className={`font-Spartan text-3x font-bold mt-3 ${
              theme === "1"
                ? "text-white"
                : theme === "2"
                ? "text-Theme2-textTwo-main"
                : "text-Theme3-textThree-main"
            }`}
          >
            calc
          </h1>

          {/* toggle button  in container with Theme Text and three switch toggle above the toggle there should be 123 for switching */}
          <div className="flex flex-row space-x-5">
            <h1
              className={` text-sm font-bold mt-8
            ${
              theme === "1"
                ? "text-white"
                : theme === "2"
                ? "text-Theme2-textTwo-main"
                : "text-Theme3-textThree-main"
            }
            
            
            `}
            >
              THEME
            </h1>

            {/* toggle button */}
            <div className="flex flex-col space-y-1">
              <div
                className={`flex flex-row space-x-5 ml-1 ${
                  theme === "1"
                    ? "text-white"
                    : theme === "2"
                    ? "text-Theme2-textTwo-main"
                    : "text-Theme3-textThree-main"
                }

              } `}
              >
                <label htmlFor="1" className="font-Spartan  font-bold">
                  1
                </label>
                <label htmlFor="2" className="font-Spartan  font-bold">
                  2
                </label>
                <label htmlFor="3" className="font-Spartan  font-bold">
                  3
                </label>
              </div>
              {/* switch toggle */}
              <div
                className={` flex flex-row space-x-1 rounded-3xl w-[85px] h-7 ${
                  theme === "1"
                    ? "bg-Theme1-backgroundOne-toggle"
                    : theme === "2"
                    ? "bg-Theme2-backgroundTwo-toggle"
                    : "bg-Theme3-backgroundThree-toggle"
                } `}
              >
                {/* radio button 1 */}
                {toggleButton.map((item) => (
                  <label key={item.id} className=" inline-flex ">
                    <input
                      type="radio"
                      name="theme"
                      value={item.value}
                      id={item.id}
                      className="hidden"
                      onChange={(e) => setTheme(e.target.value)}
                      checked={theme === item.value}
                    />
                    <span
                      className={`${
                        theme === item.value
                          ? item.toggleButtonDesign
                          : `toggle-button-design-border`
                      }`}
                    ></span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/*  result container */}
        <input
          type="text"
          className={`w-[90%] h-24 text-4xl font-bold text-right pr-5  rounded-xl bg-Theme1-backgroundOne-screen mt-5 ${
            theme === "1"
              ? "bg-Theme1-backgroundOne-screen text-Theme1-textOne-white"
              : theme === "2"
              ? "bg-Theme2-backgroundTwo-screen text-Theme2-textTwo-main"
              : "bg-Theme3-backgroundThree-screen text-Theme3-textThree-main"
          }`}
          value={result}
          readOnly
        />
        {/* ----------------------keys--------------------- */}
        {/* keys background */}
        <div
          className={`w-[90%] bg-Theme1-backgroundOne-screen mt-5 rounded-lg
        ${
          theme === "1"
            ? "bg-Theme1-backgroundOne-screen"
            : theme === "2"
            ? "bg-Theme2-backgroundTwo-toggle"
            : "bg-Theme3-backgroundThree-screen"
        }
        
        `}
        >
          {/* keys container */}
          <div className="flex flex-col mx-auto gap-5 p-5">
            {buttonRows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex flex-row justify-between gap-3"
              >
                {row.map((item) => (
                  <button
                    onClick={() => {
                      handleClick(item.key);
                    }}
                    key={item.id}
                    className={`

                  ${
                    theme === "1"
                      ? `${
                          item.key === "DEL"
                            ? `${item.keyDesign} Reset-Delete-Theme1`
                            : `${item.keyDesign}`
                        }`
                      : theme === "2"
                      ? `${
                          item.key === "DEL"
                            ? `${item.keyDesign} Reset-Delete-Theme2`
                            : `${item.keyDesign}`
                        }`
                      : `${
                          item.key === "DEL"
                            ? `${item.keyDesign} Reset-Delete-Theme3`
                            : `${item.keyDesign} button-Theme3`
                        }`
                  }
                  
                  
                  
                  `}
                  >
                    <h1
                      className={`${
                        theme === "3"
                          ? `
                          ${
                            item.key === "DEL"
                              ? "Delete-text"
                              : `${item.keyText} button-text-Theme3`
                          }`
                          : `${item.keyText}`
                      }`}
                    >
                      {item.key}
                    </h1>
                  </button>
                ))}
              </div>
            ))}
          </div>

          {/* last keys */}
          <div className="flex flex-row space-x-4 px-5 pb-5">
            {/* reset button */}
            <button
              onClick={clearResult}
              className={` w-1/2 h-14  text-Theme1-textOne-white   font-bold rounded-lg text-xl tracking-wider uppercase

              ${
                theme === "1"
                  ? "Reset-Delete-Theme1"
                  : theme === "2"
                  ? "Reset-Delete-Theme2"
                  : "Reset-Delete-Theme3"
              }
              `}
            >
              Reset
            </button>
            {/* equal  button */}
            <button
              onClick={calculateResult}
              className={`bg-Theme1-keyOne-redKeyBackground w-1/2 h-14 text-Theme1-textOne-white shadow-md  font-bold rounded-lg text-xl tracking-wider uppercase
                ${
                  theme === "1"
                    ? "bg-Theme1-keyOne-redKeyBackground shadow-Theme1-keyOne-redKeyShadow"
                    : theme === "2"
                    ? "bg-Theme2-keyTwo-orangeKeyBackground shadow-Theme2-keyTwo-orangeKeyShadow"
                    : "bg-Theme3-keyThree-cyanKeyBackground shadow-Theme3-keyThree-cyanKeyShadow text-Theme3-textThree-veryDarkBlue"
                }
            
            
            `}
            >
              =
            </button>
          </div>
        </div>
      </div>
      \
    </div>
    // </div>
  );
}

export default Calculator;
