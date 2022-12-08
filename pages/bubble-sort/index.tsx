import React, { useEffect, useState } from "react";

const index = () => {
  const [numbers, setNumbers] = useState([
    8, 5, 2, 0, 3, 1, 12, 11, 52, 33, 123123, 23,
  ]);

  const [value, setValue] = useState(0);

  const orderedNumbers = bubbleSort(numbers);

  const handleAdd = () => {
    if (value === 0) return;
    if (numbers.includes(value)) return;
    setNumbers((state) => [...state, value]);
    setValue(0);
  };

  return (
    <div>
      <div>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(() => +e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div>
        {orderedNumbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </div>
    </div>
  );
};

export default index;

const bubbleSort = (numbers: number[]): number[] => {
  const orderedNumbers = [...numbers];
  for (let j = 0; j < orderedNumbers.length - 1; j++) {
    for (let i = 0; i < orderedNumbers.length - 1; i++) {
      const current = orderedNumbers[i];
      const next = orderedNumbers[i + 1];
      if (current > next) {
        orderedNumbers[i] = next;
        orderedNumbers[i + 1] = current;
      }
    }
  }

  return orderedNumbers;
};
