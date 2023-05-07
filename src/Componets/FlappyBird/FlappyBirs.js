import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../Home/header";

const BIRD_SIZE = 20;
const game_width = 500;
const GAME_HEIGHT = 500;
const gravity = 6;
const JUMP_HEIGHT = 100;
const OBSTACLE_WIDTH = 80;
const OBSTACLE_GAP = 200;

const FlappyyBird = () => {
  const [birdPosition, setBirdPosition] = useState(250);
  const [gameisStarted, setGameIStarted] = useState(false);
  const [obstacleft, setObstacleft] = useState(game_width - OBSTACLE_WIDTH);
  const [obstaclHEight, setObstacleHeight] = useState(100);
  const [score, setScore] = useState(0);
  const BottomObltacleHeight = GAME_HEIGHT - OBSTACLE_GAP - obstaclHEight;
  useEffect(() => {
    let time;
    if (gameisStarted && birdPosition < GAME_HEIGHT - BIRD_SIZE ) {
      time = setInterval(() => {
        setBirdPosition((birdPosition) => birdPosition + gravity);
       
      }, 24);
      return () => {
        clearInterval(time);
      }
    }



  }, [gameisStarted, birdPosition]);

  useEffect(() => {
    let obstAcleId;
    if (gameisStarted && obstacleft > - OBSTACLE_WIDTH) {
      obstAcleId = setInterval(() => {
        setObstacleft((obstacleft) => obstacleft - 5);
      }, 5);
      return () => {
        clearInterval(obstAcleId);
      };
    } else {
      setObstacleft(game_width - OBSTACLE_WIDTH);
      setObstacleHeight(
        Math.floor(Math.random() * (GAME_HEIGHT - OBSTACLE_GAP))
      );

      setScore((score) => score + 1);
    }
  }, [gameisStarted, obstacleft]);

  useEffect(() => {
    const hasColideWithTopObstalcle =
      birdPosition >= 0 && birdPosition < obstaclHEight;

    const hasColideWithLowerObstalcle =
      birdPosition <= 500 && birdPosition >=500 -BottomObltacleHeight;

    if (
      obstacleft >= 0 &&
      obstacleft <= OBSTACLE_WIDTH &&
      (hasColideWithLowerObstalcle || hasColideWithTopObstalcle)
    ) {
      setGameIStarted(false);
    }
  }, [BottomObltacleHeight, obstacleft, obstaclHEight, birdPosition]);
  const handleClicked = () => {
    let newBirdPostion = birdPosition - JUMP_HEIGHT;
    if (!gameisStarted) {
      setGameIStarted(true);
    } else if (newBirdPostion < 0) {
      setBirdPosition(0);
    } else {
      setBirdPosition(newBirdPostion);
    }
  };

  return (
      <>
    <Div onClick={handleClicked}>
      <GameBox height={GAME_HEIGHT} width={game_width}>
        <Obstacl
          height={obstaclHEight}
          width={OBSTACLE_WIDTH}
          top={0}
          left={obstacleft}
        />
        <Obstacl
          height={BottomObltacleHeight}
          width={OBSTACLE_WIDTH}
          top={GAME_HEIGHT - (obstaclHEight + BottomObltacleHeight)}
          left={obstacleft}
        />
        <Bird size={BIRD_SIZE} top={birdPosition} />
      </GameBox>
      <span>{score}</span>
    </Div>
    </>
  );
};

export default FlappyyBird;

const Bird = styled.div`
  position: absolute;
  background-image:url("https://png.pngitem.com/pimgs/s/184-1842460_flappy-bird-bird-png-transparent-png.png");
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  top: ${(props) => props.top}px;
  border-radius: 50%;
  background-size:cover;
  background-position:center;
`;

const Div = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const GameBox = styled.div`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  background-image:url("https://user-images.githubusercontent.com/18351809/46888871-624a3900-ce7f-11e8-808e-99fd90c8a3f4.png") ;
  
  overflow: hidden;
`;

const Obstacl = styled.div`
  position: relative;
  top: ${(props) => props.top}px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-image:url("http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/113fb366a989650.png");
  left: ${(props) => props.left}px;
`;
