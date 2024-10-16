import React from "react";

// `src/components/BurgerStack.jsx`

const BurgerStack = (props) => {
  return (
    <ul key={props.idx}>
      <li style={{ backgroundColor: props.color }}>
        {props.name}
        <button
          onClick={() => {
            // props.removeFromBurger(props.idx);
          }}
        >
          X
        </button>
      </li>
    </ul>
  );
};

export default BurgerStack;

/* WORKINGS
<li style={props.color}>
 ul key={idx}
*/
