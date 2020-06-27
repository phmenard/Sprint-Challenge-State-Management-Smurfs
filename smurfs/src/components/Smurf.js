import React, { useEffect } from "react";

//import '../css/index.css';

const Smurf = props => {
    console.log("Props from smurf:", props);
  
  return (
    <div className="smurf">
      <h3>{props.smurf.name}</h3>
      <p>{props.smurf.age}</p>
      <p>{props.smurf.height}</p>
      
    </div>
  );
};

export default Smurf;