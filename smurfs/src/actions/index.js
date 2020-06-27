import axios from "axios";

export const GET_SMURF = "GET_SMURF";
export const POST_SMURF = "POST_SMURF";
export const REMOVE_SMURF = "REMOVE_SMURF";

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

}

export const removeSmurf = (smurf) => dispatch => {

}



