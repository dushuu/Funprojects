import React, { useEffect } from 'react'

import './key.css'

const KeyBoard = () => {

  const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const FirstRow = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
  const SecondRow = ['a','s','d','f','g','h','j','k','l'];
  const lastRow = ['z','x','c','v','b','n','m']

  const board = () => {
    const buttons = document.querySelectorAll(".btn");
    const delete_btn = document.querySelector(".delete");
    const shift_btn = document.querySelector(".shift");
    const space_btn = document.querySelector(".space");



    buttons.forEach((btn) => {
      window.addEventListener("keydown", (e) => {
        if (btn.innerHTML === e.key) {
          btn.style.backgroundColor = "aqua";
        } else if (delete_btn.id === e.code) {
          document.getElementById("Backspace").style.background = "red";
        } else if (shift_btn.id === e.key) {
          document.getElementById("Shift").style.background =
            "rgb(175, 274, 08)";
        } else if (space_btn.innerHTML === e.code) {
          document.getElementById("Space").style.background =
            "rgb(175, 244, 106)";
        }
      });
    });
  };

  useEffect(() => {
    board()

  }, [])


  return (
    <>

      <div className="container"  >
        <div className="keyboard">
          <div className="row">
            {number.map((item) => {
              return (
                <button className="btn">{item}</button>
              )
            })}
            <button className="delete" id="Backspace">
              Delete
            </button>
          </div>
          <div className="row">
            {FirstRow.map((item) => {
              return (
                <button className="btn">{item}</button>
              )
            })}
          </div>
          <div className="row">
          {SecondRow.map((item) => {
              return (
                <button className="btn">{item}</button>
              )
            })}
          </div>
          <div className="row">
          {lastRow.map((item) => {
              return (
                <button className="btn">{item}</button>
              )
            })}
        
            <button className="shift" id="Shift">
              Shift
            </button>
          </div>
          <div className="row">
            <button className="space" id="Space">Space</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default KeyBoard