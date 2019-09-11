import React, { useState } from "react";

//import any components needed
import { SpecialButton } from "./SpecialButton"
//Import your array data to from the provided data file
import { specials } from "../../../data"

export const Specials = () => {
  // STEP 2 - add the imported data to state

  const [specialState,setSpecials] = useState(specials)
  
  
  return (
    <div>
      {specialState.map((item, index) => <SpecialButton special={item} key={index} />)}
    </div>
  );
};
export default Specials
