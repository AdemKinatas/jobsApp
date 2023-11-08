import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import JobList from './JobList';
import JobDetail from './JobDetail';

const Stack = createNativeStackNavigator();

const JobsRouter = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="JobList"
                component={JobList}
                options={{
                    title: "Jobs",
                    headerTitleAlign: "center",
                    headerTintColor: "red",
                    statusBarColor: "white",
                    navigationBarColor: "transparent",
                    headerTitleStyle : {
                        fontSize: 25,
                        fontWeight: "bold",
                    }
                }}
            />
            <Stack.Screen
                name="JobDetail"
                component={JobDetail}
                options={{
                    title: "JobDetail",
                    headerTitleAlign: "center",
                    headerTintColor: "red",
                    statusBarColor: "white",
                    navigationBarColor: "transparent",
                    headerTitleStyle : {
                        fontSize: 25,
                        fontWeight: "bold",
                    }
                }}
            />
        </Stack.Navigator>
    );
}

export default JobsRouter;