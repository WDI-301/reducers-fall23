export default function counterReducer(state, action) {
    //reducers take in 2 parameters
    //first param is the state object
    //second param is the action object that we get from the dispatch
    
    //switch case matches the action.type to the case
    // the return in the case sets the state
    switch (action.type) {
        case 'RESET':
            return 0
        case 'increment':
            state++
            return state;
        case 'decrement':
            return state - 1
        case 42:
            return 42
        case '+':
            return state + action.value
        case '-':
            return state - action.value
        default:
            break;
    }
}