const initState = {};

export default (state = initState, {type, payload}) => {
    switch (type) {
        case 1:
            return{
                ...state,
                payload,
            }
        default :
            return state
    }
}