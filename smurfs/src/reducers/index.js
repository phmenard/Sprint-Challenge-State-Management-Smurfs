const intitalState = {
    loading: false,
    smurfs: []
}

const appReducer = (state = intitalState, action) => {
    switch (action.type) {
        case "GET_SMURFS":
            return {
                ...state,
                smurfs: [state.smurfs, ...action.payload],
                loading: false

            }

        case "LOADING_SMURFS":
            return {
                ...state,
                loading: true
            }

        case "POST_SMURF":
            return state;

        case "REMOVE_SMURF":
            return state;

        default:
            return state;
    }

}

export default appReducer;