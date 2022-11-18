import React from "react";

const index = () => {
  const [valueA, setValueA] = React.useState(0);
  const [valueB, setValueB] = React.useState(0);
  const [result, setResult] = React.useState(0);

  const sum = () => {
    const result = valueA + valueB;
    setResult(result);
  };

  const reset = () => {
    setValueA(0);
    setValueB(0);
    setResult(0);
  };

  console.log(valueA, valueB, result);

  return (
    <div>
      <input value={valueA} onChange={(e) => setValueA(+e.target.value)} />
      <input value={valueB} onChange={(e) => setValueB(+e.target.value)} />
      <button onClick={sum}>Calcular</button>
      <button onClick={reset}>Resetar Valores</button>
      <p>O resultado da soma é {result}</p>
    </div>
  );
};

export default index;
