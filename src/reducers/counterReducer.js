const USER_CLICK = "USER_CLICK";

const initialState = {
    clicks: 0
};

export default function counterReducer(state = initialState, action) {
    switch(action.type) {
        case USER_CLICK:
            return {
                ...state,
                clicks: state.clicks + 1
            }
        default:
            return {...state}
    }
}