import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";
import Smurf from "./Smurf";

//import '../css/index.css';

const SmurfList = props => {
  console.log("props from SmurfList:", props);
   useEffect(() => {
    props.getSmurfs();
    //console.log("Smurfs:",smurfs);
  },[]);

  if (props.state.isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="slContainer">
        <h4>Smurf Village {props.artist} </h4>
    <div className="songList">
      
      {props.state.smurfs.length >= 1 ? (
        <>
          {props.state.smurfs.map((smurf, i) => (
            <Smurf key={i} smurf={smurf}/>
          ))}
        </>
      ) : (
        <p>Nothing to see here.</p>
      )}
    </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state
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