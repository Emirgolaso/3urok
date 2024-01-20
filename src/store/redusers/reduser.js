const initialState = {
    isChangerColor: true,
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case 'CHANGE_COLOR':
            return { ...state, isChangerColor: payload }

        default:
            return state
    }
}

export default reducer;


