import React, { useEffect, useState } from "react";

const index = () => {
  const [numbers, setNumbers] = useState([8, 5, 2, 0, 3, 1]);

  const orderedNumbers = bubbleSort(numbers);

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

const bubbleSort = (numbers: number[]): number[] => {
  for (let i = 0; i < numbers.length; i++) {
    const current = numbers[i];
    const next = numbers[i + 1];
    if (current > next) {
      numbers[i] = next;
      numbers[i + 1] = current;
    }
  }

  return numbers;
};
