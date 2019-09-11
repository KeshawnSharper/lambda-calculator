import React from "react";
import { Display } from "../../DisplayComponents/Display"


export const NumberButton = (props) => {
  const { number }  = props
  let clickNumber =  () => <Display display={ number }/>
      
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
  {<button onClick={ clickNumber }>{ number }</button>}
    </>
  );
};


