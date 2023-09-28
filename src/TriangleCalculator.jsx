import React, { useState } from 'react';

const TriangleCalculator = () => {
  const [sideA, setSideA] = useState('');
  const [sideB, setSideB] = useState('');
  const [sideC, setSideC] = useState('');
  const [calculationOption, setCalculationOption] = useState('side_a');
  const [unit, setUnit] = useState('units');
  const [result, setResult] = useState('');
  const [steps, setSteps] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'sideA':
        setSideA(value);
        break;
      case 'sideB':
        setSideB(value);
        break;
      case 'sideC':
        setSideC(value);
        break;
      case 'calculationOption':
        setCalculationOption(value);
        break;
      case 'unit':
        setUnit(value);
        break;
      default:
        break;
    }
  };

  const calculate = () => {
    setSteps([]); // Clear previous steps
    if (isValidInput()) {
      const newSteps = [];

      switch (calculationOption) {
        case 'side_a':
          newSteps.push(`Calculate Side A:`);
          newSteps.push(`Side A = √(C^2 - B^2)`);
          newSteps.push(`Side A = √(${sideC}^2 - ${sideB}^2)`);
          newSteps.push(`Side A = √(${sideC * sideC - sideB * sideB})`);
          newSteps.push(`Side A ≈ ${Math.sqrt(sideC * sideC - sideB * sideB).toFixed(2)} ${unit}`);
          //area steps 
          newSteps.push(`Calculate Area:`);
          newSteps.push(`Area (A) = 0.5 * A * B`);
          newSteps.push(` A = .5* ${(Math.sqrt(sideC * sideC - sideB * sideB).toFixed(2))} * ${sideB}`);
          newSteps.push(`Area A = √(${sideC * sideC - sideB * sideB})`);
          setResult(`Side A ≈ ${Math.sqrt(sideC * sideC - sideB * sideB).toFixed(2)} ${unit}
          Area= ${(0.5 * (Math.sqrt(sideC * sideC - sideB * sideB).toFixed(2)) * sideB).toFixed(2)} square ${unit}`);
          break;
        case 'side_b':
          newSteps.push(`Calculate Side B:`);
          newSteps.push(`Side B = √(C^2 - A^2)`);
          newSteps.push(`Side B = √(${sideC}^2 - ${sideA}^2)`);
          newSteps.push(`Side B = √(${sideC * sideC - sideA * sideA})`);
          newSteps.push(`Side B ≈ ${Math.sqrt(sideC * sideC - sideA * sideA).toFixed(2)} ${unit}`);
          setResult(`Side B ≈ ${Math.sqrt(sideC * sideC - sideA * sideA).toFixed(2)} ${unit}`);
          break;
        case 'side_c':
          newSteps.push(`Calculate Hypotenuse (C):`);
          newSteps.push(`Hypotenuse (C) = √(A^2 + B^2)`);
          newSteps.push(`Hypotenuse (C) = √(${sideA}^2 + ${sideB}^2)`);
          newSteps.push(`Hypotenuse (C) = √(${sideA * sideA + sideB * sideB})`);
          newSteps.push(`Hypotenuse (C) ≈ ${Math.sqrt(sideA * sideA + sideB * sideB).toFixed(2)} ${unit}`);
          setResult(`Hypotenuse (C) ≈ ${Math.sqrt(sideA * sideA + sideB * sideB).toFixed(2)} ${unit}`);
          break;
        case 'area':
          newSteps.push(`Calculate Area (A):`);
          newSteps.push(`Area (A) = 0.5 * A * B`);
          newSteps.push(`Area (A) = 0.5 * ${sideA} * ${sideB}`);
          newSteps.push(`Area (A) ≈ ${(0.5 * sideA * sideB).toFixed(2)} square ${unit}`);
          setResult(`Area (A) ≈ ${(0.5 * sideA * sideB).toFixed(2)} square ${unit}`);
          break;
        default:
          break;
      }

      setSteps(newSteps);
    } else {
      setResult('Please enter valid numbers for Side A, Side B, and Hypotenuse.');
    }
  };

  const isValidInput = () => {
    return !isNaN(sideA) && !isNaN(sideB) && !isNaN(sideC);
  };

  // Conditional rendering of input fields based on the selected calculation option
  let inputFields;
  if (calculationOption === 'side_a') {
    inputFields = (
      <>
        <div>
          <p>a=√(c^2 - b^2)</p>
          <label>
            Side B:
            <input type="text" name="sideB" value={sideB} onChange={handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Hypotenuse (C):
            <input type="text" name="sideC" value={sideC} onChange={handleInputChange} />
          </label>
        </div>
      </>
    );
  } else if (calculationOption === 'side_b') {
    inputFields = (
      <>
        <div>
          <p>b=√(c^2 - a^2)</p>
          <label>
            Side A:
            <input type="text" name="sideA" value={sideA} onChange={handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Hypotenuse (C):
            <input type="text" name="sideC" value={sideC} onChange={handleInputChange} />
          </label>
        </div>
      </>
    );
  } else if (calculationOption === 'side_c') {
    inputFields = (
      <>
        <div>
          <p>a=√(a^2 + b^2)</p>
          <label>
            Side A:
            <input type="text" name="sideA" value={sideA} onChange={handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Side B:
            <input type="text" name="sideB" value={sideB} onChange={handleInputChange} />
          </label>
        </div>
      </>
    );
  } else if (calculationOption === 'area') {
    inputFields = (
      <>
        <div>
          <p>A=1/2*a*b</p>
          <label>
            Side A:
            <input type="text" name="sideA" value={sideA} onChange={handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Side B:
            <input type="text" name="sideB" value={sideB} onChange={handleInputChange} />
          </label>
        </div>
      </>
    );
  }

  return (
    <div>
      <h1>Triangle Calculator</h1>
      <div>
        <label>
          Calculation Option:
          <select name="calculationOption" value={calculationOption} onChange={handleInputChange}>
            <option value="side_a">Side A</option>
            <option value="side_b">Side B</option>
            <option value="side_c">Hypotenuse (C)</option>
            <option value="area">Area (A)</option>
          </select>
        </label>
      </div>
      {inputFields}
      <div>
        <label>
          Unit:
          <input type="text" name="unit" value={unit} onChange={handleInputChange} />
        </label>
      </div>
      <div>
        <button onClick={calculate}>Calculate</button>
      </div>
      <div>
        <p>{result}</p>
      </div>
      <div>
        <p>Steps:</p>
        <ul>
          {steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TriangleCalculator;
