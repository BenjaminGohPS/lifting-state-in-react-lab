import React from "react";

// `src/components/BurgerStack.jsx`

const BurgerStack = (props) => {
  return (
    <ul>
      <li>testing</li>
      {props.stack.map((item, idx) => {
        return (
          <li style={{ backgroundColor: item.color }} key={idx}>
            {item.name}
            {/* <button onClick={props.removeFromBurger}>X</button> */}
          </li>
        );
      })}
    </ul>
    // <ul>
    //   <li>testing</li>
    //   <li>{props.stack}</li>
    // </ul>
    // <li key={props.idx} style={{ backgroundColor: props.color }}>
    //   {props.name}
    //   <button
    //     onClick={() => {
    //       // props.removeFromBurger(props.idx);
    //     }}
    //   >
    //     X
    //   </button>
    // </li>
  );
};

export default BurgerStack;

/* WORKINGS
<li style={props.color}>
 ul key={idx}
*/
