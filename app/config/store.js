import { createStore, compose } from 'redux';
import reducer from '../reducer';
import { AsyncStorage } from 'react-native';
import { persistStore, autoRehydrate } from 'redux-persist';

let defaultState = {
    title: 'Welcome to React Native!',
    description: 'To get started, edit index.ios.js',
    commandDescription: 'Press Cmd+R to reload,\n Cmd+D or shake for dev menu'
};
export var configureStore = (initialState = defaultState) => {
    let store = createStore(reducer, initialState, compose(autoRehydrate()));
    persistStore(store, { storage: AsyncStorage });
    return store;
};