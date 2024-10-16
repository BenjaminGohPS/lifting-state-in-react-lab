import React from "react";

// `src/components/BurgerStack.jsx`

const BurgerStack = (props) => {
  return (
    <ul>
      {props.stack.map((item, idx) => {
        return (
          <li style={{ backgroundColor: item.color }} key={idx}>
            {item.name}
            <button
              onClick={() => {
                props.removeFromBurger(item, idx);
              }}
            >
              X
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default BurgerStack;
