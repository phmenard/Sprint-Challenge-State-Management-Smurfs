import React, { useState } from "react";
import { connect } from "react-redux";
import { postSmurf } from "../actions";
import { NewSmurf } from "../hooks/NewSmurf"; 

import "../css/index.css";

const smurf = {
    image: "",
    name: "",
    age: 0,
    height: 0
}

const Header = (props) => {
    //const [values, handleChanges, handleSubmit, showSuccessMessage] = NewSmurf('header', initialValue);
    
    const [isMovingIn, setIsMovingIn] = useState(false);
    const [newSmurf, setNewSmurf] = useState(smurf);
 
    const handleChanges = e => {
        setNewSmurf({
            ...newSmurf,
            [e.target.name]: e.target.value
          });
    };

    const handleSubmit = () => {
        setIsMovingIn(!isMovingIn);
        props.postSmurf(newSmurf);
    }

    const cancel = () => {
        setIsMovingIn(!isMovingIn);
    }

    return (
        <div>
            <header>
                <h1>Welcome to my Smurf village</h1>
                <div className="right-image">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbzzsxz6liz-flywheel.netdna-ssl.com%2Fwp-content%2Fuploads%2F2019%2F05%2FLambda_Logo-1-200x56.png&f=1&nofb=1" alt="Lambda image" />
                </div>
                {isMovingIn
                    ? <div className="moving-in">
                        <div className="smurf-image">
                        <input
                            className="image-input"
                            type="text"
                            name="image"
                            //value={newArtistText}
                            onChange={handleChanges}
                            placeholder="image"
                        />
                        </div>
                        <div className="new-smurf-data">
                         <input
                            className="name-input"
                            type="text"
                            name="name"
                            //value={newArtistText}
                            onChange={handleChanges}
                            placeholder="name"
                        />
                        <input
                            className="age-input"
                            type="text"
                            name="age"
                            //value={newArtistText}
                            onChange={handleChanges}
                            placeholder="age"
                        />
                        <input
                            className="height-input"
                            type="text"
                            name="height"
                            //value={newArtistText}
                            onChange={handleChanges}
                            placeholder="height"
                        />
                        </div>
                        <div className="button-container">
                            <p>Move in to our village</p>
                        <div className="add-smurf" onClick={() =>{
                             handleSubmit();                                                         
                               
                        }}>
                            Add
                        </div>
                        <div className="add-smurf" onClick={() =>{
                             cancel();                                                         
                               
                        }}>
                            Cancel
                        </div>
                        </div>
                    </div>

                    : <div className="moving-in-button" onClick={() => {
                        setIsMovingIn(!isMovingIn);
                    }}>Move in</div>}

            </header>
        </div>
    );

}

const mapDispatchToProps = { postSmurf  };

export default connect(null, mapDispatchToProps)(Header);

