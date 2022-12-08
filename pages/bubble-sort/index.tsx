import React, { useEffect, useState } from "react";

const index = () => {
  const [numbers, setNumbers] = useState([
    8, 5, 2, 0, 3, 1, 12, 11, 52, 33, 123123, 23,
  ]);

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
  let lastItemsAlreadyOrdered = 0;

  const orderedNumbers = [...numbers];
  for (
    let j = 0;
    j < orderedNumbers.length - 1 - lastItemsAlreadyOrdered;
    j++
  ) {
    for (let i = 0; i < orderedNumbers.length - 1; i++) {
      const current = orderedNumbers[i];
      const next = orderedNumbers[i + 1];
      if (current > next) {
        orderedNumbers[i] = next;
        orderedNumbers[i + 1] = current;
        lastItemsAlreadyOrdered++;
      }
    }
  }

  return orderedNumbers;
};
