import React, { useState } from "react";
import { editSmurf, removeSmurf } from "../actions";
import { connect } from "react-redux";

import "../css/index.css";

const smurf = {
  image: "",
  name: "",
  age: 0,
  height: 0
}

const Smurf = props => {
  console.log("Props from smurf:", props);
  const [editSmurf, setEditSmurf] = useState(false);
  const [newSmurf, setNewSmurf] = useState(smurf);

  const handleChanges = e => {
    setNewSmurf({
      ...smurf,
      [e.target.name]: e.target.value
    });
  };

  const handleEdit = () => {
    props.editSmurf(newSmurf);
    cancelEdit();
  }

  const cancelEdit = () => {
    setEditSmurf(false);
  }


  return (
    <div className="smurf">
      {!editSmurf ?
        <>
          <div className="smurf-image"><img src={props.smurf.image} alt={props.smurf.name} /></div>
          <div className="smurf-data">
            <h3>{props.smurf.name}</h3>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
            <div className="options">
              <div className="edit" onClick={() => {
                setEditSmurf(true);
              }}>Edit</div>
              <div className="remove" onClick={() => {
                removeSmurf(props.smurf.id)
              }}>Remove</div>
            </div>
          </div>
        </>
        :
        //<div>
          <div className="edit-smurf">

            <div className="smurf-image">
              <input
                className="image-input"
                type="text"
                name="image"
                value={newSmurf.image}
                onChange={handleChanges}
                placeholder="image"
              />
            </div>
            <div className="new-smurf-data">
              <input
                className="name-input"
                type="text"
                name="name"
                value={newSmurf.name}
                onChange={handleChanges}
                placeholder="name"
              />
              <input
                className="age-input"
                type="text"
                name="age"
                value={newSmurf.age}
                onChange={handleChanges}
                placeholder="age"
              />
              <input
                className="height-input"
                type="text"
                name="height"
                value={newSmurf.height}
                onChange={handleChanges}
                placeholder="height"
              />
            </div>
            <div className="options">
              <div className="edit" onClick={() => {
                handleEdit();
              }}>Update</div>
              <div className="remove" onClick={() => {
                cancelEdit();
              }}>Cancel</div>
            </div>
          </div>
        //</div>
      }

    </div>

  );
};

const mapDispatchToProps = { editSmurf  };

export default connect(null, mapDispatchToProps)(Smurf);

