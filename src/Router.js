import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Jobs from './pages/Jobs';
import FavoritedJobs from './pages/FavoritedJobs';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Jobs" component={Jobs} />
        <Stack.Screen name="FavoritedJobs" component={FavoritedJobs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;