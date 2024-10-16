import React from "react";
// import { availableIngredients } from "../App";

// src/components/IngredientList.jsx

const IngredientList = (props) => {
  return (
    <ul>
      {props.availableIngredients.map((item, idx) => {
        return (
          <li style={{ backgroundColor: item.color }} key={idx}>
            {item.name}
            <button
              onClick={() => {
                props.addToBurger(item, idx);
              }}
            >
              +
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default IngredientList;
