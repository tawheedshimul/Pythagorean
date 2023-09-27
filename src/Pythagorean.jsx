import React, { useState } from 'react';

function Pythagorean() {
  const [calculationOption, setCalculationOption] = useState('side_a');
  const [sideA, setSideA] = useState('');
  const [sideB, setSideB] = useState('');
  const [result, setResult] = useState('');
  const [unit, setUnit] = useState('cm');

  const handleOptionChange = (e) => {
    const selectedOption = e.target.value;
    setCalculationOption(selectedOption);
    setSideA('');
    setSideB('');
    setResult('');
  };

  const calculate = () => {
    const a = parseFloat(sideA);
    const b = parseFloat(sideB);

    if (!isNaN(a) && !isNaN(b)) {
      switch (calculationOption) {
        case 'side_a':
          setResult(`Side A = ${a} ${unit}`);
          setSideB(Math.sqrt(b * b - a * a).toFixed(2));
          break;
        case 'side_b':
          setResult(`Side B = ${b} ${unit}`);
          setSideA(Math.sqrt(a * a - b * b).toFixed(2));
          break;
        case 'hypotenuse':
          setResult(`Hypotenuse (C) = ${Math.sqrt(a * a + b * b).toFixed(2)} ${unit}`);
          break;
        case 'area':
          setResult(`Area (A) = ${(0.5 * a * b).toFixed(2)} square ${unit}`);
          break;
        default:
          setResult('');
      }
    } else {
      setResult('Please enter valid numbers for Side A and Side B.');
    }
  };

  const getInputLabelsAndPlaceholders = () => {
    let labelA = 'Side A';
    let placeholderA = 'Enter Side A';
    let labelB = 'Side B';
    let placeholderB = 'Enter Side B';

    switch (calculationOption) {
      case 'side_a':
        labelA = 'Side B';
        placeholderA = 'Enter Side B';
        labelB = 'Hypotenuse (C)';
        placeholderB = 'Enter Hypotenuse';
        break;
      case 'side_b':
        labelA = 'Side A';
        placeholderA = 'Enter Side A';
        labelB = 'Hypotenuse (C)';
        placeholderB = 'Enter Hypotenuse';
        break;
      case 'hypotenuse':
        labelA = 'Side A';
        placeholderA = 'Enter Side A';
        labelB = 'Side B';
        placeholderB = 'Enter Side B';
        break;
      case 'area':
        labelA = 'Side A';
        placeholderA = 'Enter Side A';
        labelB = 'Side B';
        placeholderB = 'Enter Side B';
        break;
      default:
        break;
    }

    return { labelA, placeholderA, labelB, placeholderB };
  };

  const { labelA, placeholderA, labelB, placeholderB } = getInputLabelsAndPlaceholders();

  return (
    <div className="container">
      <h2>Pythagorean Theorem Solver</h2>
      <label htmlFor="calculationOption">Solve for:</label>
      <select
        id="calculationOption"
        value={calculationOption}
        onChange={handleOptionChange}
      >
        <option value="side_a">Side A</option>
        <option value="side_b">Side B</option>
        <option value="hypotenuse">Hypotenuse (C)</option>
        <option value="area">Area (A)</option>
      </select>

      <div id="inputFields">
        <label htmlFor="sideA">{labelA}:</label>
        <input
          type="number"
          id="sideA"
          step="0.01"
          value={sideA}
          onChange={(e) => setSideA(e.target.value)}
          placeholder={placeholderA}
        />
        <label htmlFor="sideB">{labelB}:</label>
        <input
          type="number"
          id="sideB"
          step="0.01"
          value={sideB}
          onChange={(e) => setSideB(e.target.value)}
          placeholder={placeholderB}
        />
      </div>

      {result && (
        <div id="result">
          <p>{result}</p>
        </div>
      )}

      <label htmlFor="unitOption">Unit:</label>
      <select
        id="unitOption"
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
      >
        <option value="cm">cm</option>
        <option value="inch">inch</option>
      </select>

      <button onClick={calculate}>Calculate</button>
    </div>
  );
}

export default Pythagorean;
