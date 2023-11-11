// reducers.js
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducer = (state, action) => {
  switch (action.type) {
    case 'SET_JOB_NAME':
      const { jobName } = action.payload;
      return { ...state, jobName: jobName };

    case 'SET_INITIAL_FAVORITES':
      return { ...state, favoritedJobs: action.payload.favoritedJobs };

    case 'ADD_TO_FAVORITES':
      const { job } = action.payload;
      // If job is already exist in the favorites return same state
      if (state.favoritedJobs.some(favJob => favJob.id === job.id)) {
        return state;
      }
      const newFavoritesList = [...state.favoritedJobs, job];
      AsyncStorage.setItem('favoritedJobs', JSON.stringify(newFavoritesList));
      return { ...state, favoritedJobs: newFavoritesList };

    case 'REMOVE_FROM_FAVORITES':
      const { jobId } = action.payload;
      const updatedFavoritesList = state.favoritedJobs.filter(favJob => favJob.id !== jobId);
      AsyncStorage.setItem('favoritedJobs', JSON.stringify(updatedFavoritesList));
      return { ...state, favoritedJobs: updatedFavoritesList };

    default:
      return state;
  }
};

export default rootReducer;
