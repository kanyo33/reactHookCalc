import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const ClearButton = () => {
  const { handleClearValue } = useContext(NumberContext);
  return (
    <button className="boxed spe" onClick={() => handleClearValue()}>
      C
    </button>
  );
};

export default ClearButton;