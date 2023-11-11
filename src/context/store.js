// store.js
import { createStore } from 'redux';
import rootReducer from './reducers';

import AsyncStorage from '@react-native-async-storage/async-storage';

const getInitialFavorites = async () => {
    try {
        const storedFavorites = await AsyncStorage.getItem('favoritedJobs');
        return storedFavorites ? JSON.parse(storedFavorites) : [];
    } catch (error) {
        console.error('Error reading favorites from AsyncStorage:', error);
        return [];
    }
};

const configureStore = async () => {
    const initialState = {
        favoritedJobs: await getInitialFavorites(),
        jobName: ''
    };

    const store = createStore(rootReducer, initialState);

    // AsyncStorage'den veriyi al
    const storedFavorites = await getInitialFavorites();

    // Başlangıç durumunu güncelle
    store.dispatch({ type: 'SET_INITIAL_FAVORITES', payload: { favoritedJobs: storedFavorites } });

    return store;
};

export default configureStore;
