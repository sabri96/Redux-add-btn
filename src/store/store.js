import{createStore}from 'redux'
import counterReducer from '../reducers/counterReducer';

const store = createStore(counterReducer,
    window._REDUX_DEVTOOLS_EXTENSION_&&window._REDUX_DEVTOOLS_EXTENSION_()
    );



export default store;