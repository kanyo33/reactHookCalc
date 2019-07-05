import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const BackButton = () => {
  const { handleBackButton } = useContext(NumberContext);
  return (
    <button className="boxed spe" onClick={() => handleBackButton()}>
      &#8592;
    </button>
  );
};

export default BackButton;