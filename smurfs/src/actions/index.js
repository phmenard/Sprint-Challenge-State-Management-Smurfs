import axios from "axios";

export const GET_SMURF = "GET_SMURF";
export const POST_SMURF = "POST_SMURF";
export const REMOVE_SMURF = "REMOVE_SMURF";
export const EDIT_SMURF = "EDIT_SMURF";

export const getSmurfs = () => dispatch => {
    dispatch({ type: "LOADING_SMURFS" });
    axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
      console.log(res);
      dispatch({ type: "GET_SMURFS", payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
}

export const postSmurf = (smurf) => dispatch => {
  
  //console.log(smurf) ;
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => {
      dispatch({type: "POST_SMURF", payload: smurf});
    })
    .catch(err => console.log(err));
}

export const editSmurf = (smurf) => dispatch => {
  // edit the Smurf
  
  axios
    .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
    .then(res => {
      dispatch({type: "EDIT_SMURF", payload: smurf});
    })
    .catch(err => console.log(err));
}

export const removeSmurf = (smurf) => dispatch => {
  axios
    .remove(`http://localhost:3333/smurfs/${smurf.id}`)
    .then(res => {
      dispatch({ type: "GET_SMURFS", payload: res.data });
    })
    .catch(err => console.log(err));
} 



