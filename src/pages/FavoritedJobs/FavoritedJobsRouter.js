import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoritedJobList from './FavoritedJobList';
import FavoritedJobDetail from './FavoritedJobDetail';

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
            <Stack.Screen
                name="FavoritedJobDetail"
                component={FavoritedJobDetail}
                options={{
                    title: "Favorited Job Detail",
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