import React, { useEffect, useState } from "react";

const index = () => {
  const [numbers, setNumbers] = useState([33, 123123, 5, 23, 1]);

  const [value, setValue] = useState(0);

  const orderedNumbers = bubbleSort(numbers);
  const { smallest, biggest } = findSmallestNumber(numbers);

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
        <p>Ordered Numbers</p>
        {orderedNumbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
        <p>Smalles Number</p>
        {smallest}
        <p>Biggest Number</p>
        {biggest}
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

const findSmallestNumber = (
  numbers: number[]
): { smallest: number; biggest: number } => {
  let smallest = numbers[0];
  let biggest = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
      smallest = numbers[i];
    }
    if (numbers[i] > biggest) {
      biggest = numbers[i];
    }
  }

  return { smallest, biggest };
};
