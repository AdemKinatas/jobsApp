import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import JobsRouter from './pages/Jobs';
import FavoritedJobsRouter from './pages/FavoritedJobs';
import { createDrawerNavigator } from '@react-navigation/drawer';

// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Jobs"
          component={JobsRouter}
          options={{
            headerShown: false,
            drawerActiveTintColor: "#F74B4B"
          }}
        />
        <Drawer.Screen
          name="Favorited Jobs"
          component={FavoritedJobsRouter}
          options={{
            headerShown: false,
            drawerActiveTintColor: "#F74B4B"
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Router;