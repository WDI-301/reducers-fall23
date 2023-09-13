export default function counterReducer(state, action) {
    //reducers take in 2 parameters
    //first param is the state object
    //second param is the action object that we get from the dispatch
    
    //switch case matches the action.type to the case
    // the return in the case sets the state
    switch (action.type) {
        case "Add":
            
            return state + 1;
    
        default:
            break;
    }
}