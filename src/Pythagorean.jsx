import React, { useState } from 'react';

function Pythagorean() {
  const [calculationOption, setCalculationOption] = useState('side_a');
  const [sideA, setSideA] = useState('');
  const [sideB, setSideB] = useState('');
  const [sideC, setSideC] = useState('');
  const [result, setResult] = useState('');
  const [unit, setUnit] = useState('cm');

  const handleOptionChange = (e) => {
    const selectedOption = e.target.value;
    setCalculationOption(selectedOption);
    clearInputs();
  };

  const clearInputs = () => {
    setSideA('');
    setSideB('');
    setSideC('');
    setResult('');
  };

  const calculate = () => {
    const a = parseFloat(sideA);
    const b = parseFloat(sideB);
    const c = parseFloat(sideC);

    if (!isNaN(a) ) {
      let calculatedResult = '';

      switch (calculationOption) {
        case 'side_a':
          calculatedResult = `Side A = ${Math.sqrt(c * c - b * b).toFixed(2)} ${unit}`;
          break;
        case 'side_b':
          calculatedResult = `Side B = ${Math.sqrt(c * c - a * a).toFixed(2)} ${unit}`;
          break;
        case 'side_c':
          calculatedResult = `Hypotenuse (C) = ${Math.sqrt(a * a + b * b).toFixed(2)} ${unit}`;
          break;
        case 'area':
          calculatedResult = `Area (A) = ${(0.5 * a * b).toFixed(2)} square ${unit}`;
          break;
        default:
          break;
      }

      setResult(calculatedResult);
    } else {
      setResult('Please enter valid numbers for Side A, Side B, and Hypotenuse.');
    }
  };

  const renderSideAInput = () => (
    <div>
      <label htmlFor="sideA">Side A:</label>
      <input
        type="number"
        id="sideA"
        step="0.01"
        value={sideA}
        onChange={(e) => setSideA(e.target.value)}
        placeholder="Enter Side A"
      />
    </div>
  );

  const renderSideBInput = () => (
    <div>
      <label htmlFor="sideB">Side B:</label>
      <input
        type="number"
        id="sideB"
        step="0.01"
        value={sideB}
        onChange={(e) => setSideB(e.target.value)}
        placeholder="Enter Side B"
      />
    </div>
  );

  const renderSideCInput = () => (
    <div>
      <label htmlFor="sideC">Hypotenuse (C):</label>
      <input
        type="number"
        id="sideC"
        step="0.01"
        value={sideC}
        onChange={(e) => setSideC(e.target.value)}
        placeholder="Enter Hypotenuse"
      />
    </div>
  );

  const renderInputFields = () => {
    switch (calculationOption) {
      case 'side_a':
        return (
          <>
            {renderSideBInput()}
            {renderSideCInput()}
          </>
        );
      case 'side_b':
        return (
          <>
            {renderSideAInput()}
            {renderSideCInput()}
          </>
        );
      case 'side_c':
        return (
          <>
            {renderSideAInput()}
            {renderSideBInput()}
          </>
        );
      case 'area':
        return (
          <>
            {renderSideAInput()}
            {renderSideBInput()}
          </>
        );
      default:
        return null;
    }
  };

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
        <option value="side_c">Hypotenuse (C)</option>
        <option value="area">Area (A)</option>
      </select>

      <div id="inputFields">
        {renderInputFields()}
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
        <option value="km">km</option>
        <option value="m">m</option>
        <option value="cm">cm</option>
        <option value="mm">mm</option>
        <option value="mi">mi</option>
        <option value="yd">yd</option>
        <option value="ft">ft</option>
        <option value="in">in</option>
      </select>

      <button onClick={calculate}>Calculate</button>
    </div>
  );
}

export default Pythagorean;
