import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const CalculatorButton = ({ buttonValue }) => {
  const { handleSetDisplayValue } = useContext(NumberContext);
  return (
    <button class="box" onClick={() => handleSetDisplayValue(buttonValue)}>
      {buttonValue}
    </button>
  );
};

export default CalculatorButton;