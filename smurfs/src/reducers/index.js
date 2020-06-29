const intitalState = {
    loading: false,
    smurfs: []
}

const appReducer = (state = intitalState, action) => {
    switch (action.type) {
        case "GET_SMURFS":
            // grab all the snurfs in the village from the server
            return {
                ...state,
                smurfs: [...state.smurfs, ...action.payload],
                loading: false

            }

        case "LOADING_SMURFS":
            // Hang out untill done
            return {
                ...state,
                loading: true
            }

        case "POST_SMURF":
            // Add(POST) a new Smurf to the DB
            console.log("New smurf", action.payload);
            return {
                ...state,
                smurfs: [...state.smurfs, action.payload]
            }

        case "REMOVE_SMURF":
            console.log("Remove smurf", action.payload);

            return state;
            
        case "EDIT_SMURF":
            // edit/update a Smurf
            console.log("Edit smurf", action.payload);
            return {
                ...state,
                smurfs: [...state.smurfs, action.payload]
            }
        default:
            return state;
    }

}

export default appReducer;