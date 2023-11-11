import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoritedJobList from './FavoritedJobList';

const Stack = createNativeStackNavigator();

const FavoritedJobsRouter = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="FavoritedJobsList"
                component={FavoritedJobList}
                options={{
                    title: "Favorited Jobs",
                    headerTitleAlign: "center",
                    headerTintColor: "red",
                    statusBarColor: "white",
                    navigationBarColor: "transparent",
                    headerTitleStyle: {
                        fontSize: 25,
                        fontWeight: "bold",
                    }
                }}
            />
        </Stack.Navigator>
    );
}

export default FavoritedJobsRouter;