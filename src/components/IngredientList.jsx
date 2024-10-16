import React from "react";
// import { availableIngredients } from "../App";

// src/components/IngredientList.jsx

const IngredientList = (props) => {
  // const [newstack, setNewStack] = useState([]);
  // const addStack = (event) => {
  //   setNewStack(event.target.value);
  // };
  return (
    <ul>
      {props.availableIngredients.map((item, idx) => {
        return (
          <li style={{ backgroundColor: item.color }} key={idx}>
            {item.name}
            <button onClick={props.addToBurger}>+</button>
          </li>
        );
      })}
    </ul>
  );
};

export default IngredientList;

/*
<button onClick={props.addToBurger}>+</button>
<button
              onClick={() => {
                console.log(item.name);
                props.addToBurger;
              }}
            >
              +
            </button>

<button
              onClick={() => {
                console.log("onClick is working");
                {
                  props.addToBurger;
                }
              }}
            >
              +
            </button>

*/
