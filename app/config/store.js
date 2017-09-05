import { createStore, compose } from 'redux';
import reducer from '../reducers';
import { AsyncStorage } from 'react-native';
import { persistStore, autoRehydrate } from 'redux-persist';

let defaultState = {
   counter: 0
};
export var configureStore = (initialState = defaultState) => {
    let store = createStore(reducer, initialState, compose(autoRehydrate()));
    persistStore(store, { storage: AsyncStorage });
    return store;
};