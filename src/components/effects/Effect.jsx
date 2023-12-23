import { useState, useEffect } from "react";

function Effect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Hello world");
  }, [count]);

  return (
    <>
      <h1>Contador</h1>
      <button type="button" onClick={() => setCount(count + 1)}>
        Contador {count}
      </button>
    </>
  );
}

export default Effect;
