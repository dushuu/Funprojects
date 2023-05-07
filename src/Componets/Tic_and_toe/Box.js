import classNames from "classnames";
import React from "react";
import "./Box.scss";

const Box = ({ value, onClick, color, id }) => {
  const styl = classNames("Boxx", {
    X:  value === "X",
    O:  value === "O",
  });

  return (
    <button className={styl} onClick={onClick } id={id} >
      {value}
    </button>

  
  );
};

export default Box;
