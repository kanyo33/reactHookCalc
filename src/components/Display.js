import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const Display = () => {
  const { number, storedNumber, functionType } = useContext(NumberContext);
  return (
      <div>
        <p>
            {!number.length && !storedNumber ? '0' : number || storedNumber}
        </p>
        <h5>
            {!storedNumber ? '' : `${storedNumber} ${functionType} ${number}`}
        </h5>
      </div>
  );
};

export default Display;