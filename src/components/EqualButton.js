import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const EqualButton = () => {
  const { doMath } = useContext(NumberContext);
  return (
    <button className="box equal" onClick={() => doMath()}>
      =
    </button>
  );
};

export default EqualButton;