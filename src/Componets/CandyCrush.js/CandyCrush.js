import React, { useState, useEffect, useCallback } from "react";
import "./Stylee/CandyCrush.scss";
import blueCandy from "./images/blue-candy.png";
import greenCandy from "./images/green-candy.png";
import orangeCandy from "./images/orange-candy.png";
import purpleCandy from "./images/purple-candy.png";
import red from "./images/red-candy.png";
import yellow from "./images/yellow-candy.png";
import blank from "./images/blank.png";
import Score from "./Score";
// import Header from "../Home/header";

const width = 8;
const candyColors = [
  blueCandy,
  greenCandy,
  red,
  orangeCandy,
  greenCandy,
  yellow,
  purpleCandy,

];

const CandyCrush = () => {
  const [currentArrangement, setCurrentArragement] = useState([]);
  const [squareBeingDraged, setSquareBeingDraged] = useState(null);
  const [squareBeingPlaced, setSquareBeingPlaced] = useState(null);
  const [score, setScore] = useState(0);

  //   const checkForColumnofThree = () =>{

  //   }
  const checkForColumnofFour = useCallback(() => {
    for (let i = 0; i <= 39; i++) {
      const columnOfFour = [i, i + width, i + width * 2, i + width * 3];
      const decidedColor = currentArrangement[i];

      if (
        columnOfFour.every(
          (square) => currentArrangement[square] === decidedColor
        )
      ) {
        setScore((scoree) => scoree + 4);
        columnOfFour.forEach((square) => (currentArrangement[square] = blank));
        return true;
      }
    }
  }, [currentArrangement]);

  const checkForRowofFour = useCallback(() => {
    for (let i = 0; i < 64; i++) {
      const firstRow = [0, 1, 2, 3, 4, 5, 6, 7];
      const isFirstRow = firstRow.includes(i);

      if (isFirstRow && currentArrangement[i] === blank) {
        let randomnumber = Math.floor(Math.random() * candyColors.length);
        currentArrangement[i] = candyColors[randomnumber];

      }

      const RowofFour = [i, i + 1, i + 2, i + 3];
      const decidedColor = currentArrangement[i];
      const notValid = [
        5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53,
        54, 55, 62, 63, 64,
      ];

      if (notValid.includes(i)) continue;

      if (
        RowofFour.every((square) => currentArrangement[square] === decidedColor)
      ) {
        setScore((scoree) => scoree + 4)
        RowofFour.forEach((square) => (currentArrangement[square] = blank));
        return true;
      }
    }
  }, [currentArrangement]);

  const checkForColumnofThree = useCallback(() => {
    for (let i = 0; i <= 47; i++) {
      const columnOfThree = [i, i + width, i + width * 2];
      const decidedColor = currentArrangement[i];

      if (
        columnOfThree.every(
          (square) => currentArrangement[square] === decidedColor
        )
      ) {
        setScore((scoree) => scoree + 3)
        columnOfThree.forEach((square) => (currentArrangement[square] = blank));
        return true;
      }
    }
  }, [currentArrangement]);

  const checkForRowfThree = useCallback(() => {
    for (let i = 0; i < 64; i++) {
      const RowOfThree = [i, i + 1, i + 2];
      const decidedColor = currentArrangement[i];
      const notValid = [
        6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64,
      ];

      if (notValid.includes(i)) continue;

      if (
        RowOfThree.every(
          (square) => currentArrangement[square] === decidedColor
        )
      ) {
        setScore((scoree) => scoree + 3)
        RowOfThree.forEach((square) => (currentArrangement[square] = blank));
        return true;
      }
    }
  }, [currentArrangement]);

  // const moveIntoSquareBelow = () => {

  // };
  const moveIntoSquareBelow = useCallback(() => {
    for (let i = 0; i < 64 - width; i++) {
      if (currentArrangement[i + width] === blank) {
        currentArrangement[i + width] = currentArrangement[i];
        currentArrangement[i] = blank;
      }
    }
  }, [currentArrangement]);

  const dragstart = (e) => {
    setSquareBeingDraged(e.target);
    console.log("drag-start");

  };
  const dragDrop = (e) => {
    setSquareBeingPlaced(e.target);
    console.log("drag-drop");
  };

  const DragEnd = (e) => {
    const squarebeingDragedId = parseInt(
      squareBeingDraged.getAttribute("data-Id")
    );
    const squarebeingReplacedId = parseInt(
      squareBeingPlaced.getAttribute("data-Id")
    );

    currentArrangement[squarebeingReplacedId] =
      squareBeingDraged.getAttribute("src");
    currentArrangement[squarebeingDragedId] =
      squareBeingPlaced.getAttribute("src");

    // console.log(squarebeingReplacedId, squarebeingDragedId);

    const validMoves = [
      squarebeingDragedId - 1,
      squarebeingDragedId - width,
      squarebeingDragedId + 1,
      squarebeingDragedId + width,
    ];

    const validMove = validMoves.includes(squarebeingReplacedId);

    const isAColumnOfFour = checkForColumnofFour();
    const isRawOfFour = checkForRowofFour();
    const isAColumnOfthree = checkForColumnofThree();
    const isARowOfThree = checkForRowfThree();

    if (
      squarebeingDragedId &&
      validMove &&
      (isAColumnOfFour || isAColumnOfthree || isARowOfThree || isRawOfFour)
    ) {
      setSquareBeingDraged(null);
      setSquareBeingPlaced(null);
    } else {
      currentArrangement[squarebeingReplacedId] =
        squareBeingPlaced.getAttribute("src");
      currentArrangement[squarebeingDragedId] =
        squareBeingDraged.getAttribute("src");
      setCurrentArragement([...currentArrangement]);
    }
  };

  const createBoard = () => {
    const randomColorArrangement = [];
    for (let i = 0; i < width * width; i++) {
      const randomColor =
        candyColors[Math.floor(Math.random() * candyColors.length)];
      randomColorArrangement.push(randomColor);
    }
    setCurrentArragement(randomColorArrangement);
  };

  useEffect(() => {
    createBoard();
  }, []);
  // console.log(currentArrangement);

  useEffect(() => {
    const Timer = setInterval(() => {
      checkForRowofFour();
      checkForColumnofFour();

      checkForColumnofThree();

      checkForRowfThree();
      moveIntoSquareBelow();

      setCurrentArragement([...currentArrangement]);
    }, 200);
    return () => clearInterval(Timer);
  }, [
    checkForRowofFour,
    checkForColumnofFour,
    checkForColumnofThree,
    checkForRowfThree,
    moveIntoSquareBelow,
    currentArrangement,
  ]);

  return (
    <>



      <div className="main">
        <h1 className="h">CandyCrush</h1>

        <div className="game">
          {currentArrangement.map((candyColor, index) => (
            <img
              key={index}
              src={candyColor}
              alt={candyColor}
              data-id={index}
              draggable={true}
              onDragStart={dragstart}
              onDragOver={(e) => e.preventDefault()}
              onDragEnter={(e) => e.preventDefault()}
              onDragLeave={(e) => e.preventDefault()}
              onDrop={dragDrop}
              onDragEnd={DragEnd}
            />
          ))}
        </div>
        <Score score={score} />
      </div>
    </>
  );
};

export default CandyCrush;
