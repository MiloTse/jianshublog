import { fromJS } from 'immutable';


const defaultState = fromJS({
    login: false
});


 const reducer = (state = defaultState, action) => {
    switch (action.type) {


        default:
            return state;
    }
};

export default reducer;
