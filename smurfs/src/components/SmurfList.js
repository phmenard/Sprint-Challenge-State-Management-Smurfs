import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";
import Smurf from "./Smurf";

import '../css/index.css';

const SmurfList = props => {
  console.log("props from SmurfList:", props);
   useEffect(() => {
    props.getSmurfs();
    //console.log("Smurfs:",smurfs);
  },[]);

  if (props.isLoading) {
    // Loading up the Smurf village
    return <h2>Loading...</h2>;
  }

  return (
    <div className="smurf-container">
        
    
      
      {props.smurfs.length >= 1 ? (
        <>
          {props.smurfs.map((smurf, i) => (
            <Smurf key={i} smurf={smurf}/>
          ))}
        </>
      ) : (
        <p>Nothing to see here.</p>
      )}
    
    </div>
  );
};

const mapStateToProps = state => { /// ????
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading

    //state /// ??????
    /*name: state.name,
    age: state.age,  
    height: state.height,
    id: state.id,*/
            
  };
};

const mapDispatchToProps = { getSmurfs  };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SmurfList);