import * as actionTypes from '../../actions/action';

const initialState = {
    categories: [
        { id: '1', content: 'Home' },
        { id: '2', content: 'Office' }
    ]
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_CATEGORY:
            return {
                ...state,
                categories: state.categories.concat({
                    id: new Date(),
                    content: action.content
                })
            };
        case actionTypes.REMOVE_CATEGORY:
            return {
                ...state,
                categories: state.categories.filter(cat => cat.id !== action.id)
            };
        default:
            return state;

    }
};

export default categoryReducer;
