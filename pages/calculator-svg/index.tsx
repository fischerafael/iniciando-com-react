import React from "react";

const index = () => {
  // STATES
  const [number, setNumber] = React.useState<number>(0);
  const [numbers, setNumbers] = React.useState<number[]>([]);

  // DERIVED STATES
  const sumOfNumbers = sumItemsOfArray(numbers);
  const numbersLen = numbers.length;
  const avg = numbersLen > 0 ? sumOfNumbers / numbersLen : 0;
  const formattedAvg = numbersLen > 0 ? avg.toFixed(2) : 0;

  // METHODS
  const handleAddNumberToList = () => {
    if (number === 0) return;
    setNumbers((previousState) => [...previousState, number]);
    setNumber(0);
  };

  const handleResetNumbersList = () => {
    setNumbers(() => []);
  };

  return (
    <div>
      <input
        placeholder="New Number"
        type="number"
        value={number}
        onChange={(event) => setNumber(Number(event.target.value))}
      />
      <button onClick={handleAddNumberToList}>Add Number</button>
      <button onClick={handleResetNumbersList}>Reset Numbers List</button>
      <ul>
        {numbers.map((numb) => (
          <li key={numb}>{numb}</li>
        ))}
      </ul>
      <p>
        A soma dos números é {sumOfNumbers}, e existem {numbersLen} números na
        lista. A média aritmética é {formattedAvg}
      </p>
    </div>
  );
};

export default index;

// UTILS FUNCTION
const sumItemsOfArray = (array: number[]): number => {
  return array.reduce((total, currentValue) => {
    return total + currentValue;
  }, 0);
  // let result = 0;
  // for (let i = 0; i < array.length; i++) {
  //   result = result + array[i];
  // }
  // return result;
};
