import React, { useEffect, useState } from "react";

const index = () => {
  const [numbers, setNumbers] = useState([1, 5, 2, 0, 3, 8]);

  const orderedNumbers = selectionSort(numbers);

  return (
    <div>
      <div>
        <input type="number" />
        <button>Add</button>
      </div>
      <div>
        {orderedNumbers.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </div>
    </div>
  );
};

export default index;

const selectionSort = (numbers: number[]): number[] => {
  return numbers;
};
