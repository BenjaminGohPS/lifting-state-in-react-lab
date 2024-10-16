import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BurgerStack from "./components/BurgerStack";
import IngredientList from "./components/IngredientList";

// src/App.jsx

const availableIngredients = [
  { name: "Kaiser Bun", color: "saddlebrown" },
  { name: "Sesame Bun", color: "sandybrown" },
  { name: "Gluten Free Bun", color: "peru" },
  { name: "Lettuce Wrap", color: "olivedrab" },
  { name: "Beef Patty", color: "#3F250B" },
  { name: "Soy Patty", color: "#3F250B" },
  { name: "Black Bean Patty", color: "#3F250B" },
  { name: "Chicken Patty", color: "burlywood" },
  { name: "Lettuce", color: "lawngreen" },
  { name: "Tomato", color: "tomato" },
  { name: "Bacon", color: "maroon" },
  { name: "Onion", color: "lightyellow" },
  { name: "Cheddar Cheese", color: "#FDE18B" },
  { name: "Swiss Cheese", color: "#F1E1A8" },
];

const App = () => {
  const [stack, setStack] = useState([]);

  const addToBurger = () => {
    //codes here
    // setStack((prevState) => [...prevState, +1]);
    console.log("addToBurger Working");
    setStack((prevState) => {
      return [...(prevState + 1)];
    });
  };

  const removeFromBurger = () => {
    //codes here
    console.log("removeFromBurger");
  };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList
          availableIngredients={availableIngredients}
          addToBurger={addToBurger}
        />
        <BurgerStack stack={stack} removeFromBurger={removeFromBurger} />
        {stack}
      </section>
      {/* <section>
        <IngredientList />
        <BurgerStack />
      </section> */}
    </main>
  );
};

export default App;

/**

{JSON.stringify(availableIngredients)}

{availableIngredients.map((item, idx) => {
            return (
              <BurgerStack
                name={item.name}
                color={item.color}
                key={idx}
                idx={idx}
                removeFromBurger={removeFromBurger}
              />
            )}; 
            
 */

{
  /* <ul>
          {stack.map((item, idx) => {
            return (
              <BurgerStack
                name={item.name}
                color={item.color}
                key={idx}
                idx={idx}
                removeFromBurger={removeFromBurger}
              />
            );
          })}
</ul> */
}
