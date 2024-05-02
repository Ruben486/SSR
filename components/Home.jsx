import React, { useState } from "react";
export default () => {
    const [counter,set] = useState(0);
  return (
  <>
  <h2>Componentes React en Express</h2>;
  <p>{counter}</p>
  <button onClick={() => 
    set(counter => counter+1)
  }>
    Aumentar
  </button>
  </>
  )
};
