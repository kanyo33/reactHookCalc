import React from 'react';
import NegativeButton from './NegativeButton';
import NumberButton from './NumberButton';
import FunctionButton from './FunctionButton';
import EqualButton from './EqualButton';
import Display from './Display';
import ClearButton from './ClearButton';
import BackButton from './BackButton';


const Calculator = () => (
    <div className="container">
      <div className="ele_container">
           <Display/>
        <div className="box_container">
          <ClearButton/>
          <BackButton/>
        <FunctionButton buttonValue="/"/>
        </div>
        <div className="box_container">
            <NumberButton buttonValue={1}/>
            <NumberButton buttonValue={2}/>
            <NumberButton buttonValue={3}/>
            <FunctionButton buttonValue="*"/>
        </div>
        <div className="box_container">
            <NumberButton buttonValue={4}/>
            <NumberButton buttonValue={5}/>
            <NumberButton buttonValue={6}/>
            <FunctionButton buttonValue="-"/>
        </div>
        <div className="box_container">
            <NumberButton buttonValue={7}/>
            <NumberButton buttonValue={8}/>
            <NumberButton buttonValue={9}/>
            <FunctionButton buttonValue="+"/>
        </div>
        <div className="box_container">
            <NumberButton buttonValue="."/>
            <NumberButton buttonValue={0}/>
            <NegativeButton/>
            <EqualButton/>
        </div>
      </div>
    </div>
  );


export default Calculator;