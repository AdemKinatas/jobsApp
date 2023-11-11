import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import JobList from './JobList';
import JobDetail from './JobDetail';
import { useSelector } from 'react-redux';
import CustomHeaderTitle from '../../components/CustomHeaderTitle';

const Stack = createNativeStackNavigator();

const JobsRouter = () => {

    const jobName = useSelector(s => s.jobName);

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
                    headerTitleStyle: {
                        fontSize: 25,
                        fontWeight: "bold",
                    }
                }}
            />
            <Stack.Screen
                name="JobDetail"
                component={JobDetail}
                options={{
                    title: jobName.length > 30 ? `${jobName.substring(0, 30)}...` : jobName,
                    headerTitleAlign: "center",
                    headerTintColor: "red",
                    statusBarColor: "white",
                    navigationBarColor: "transparent",
                    headerTitleStyle: {
                        fontSize: 20,
                        fontWeight: "bold",
                    }
                }}
            />
        </Stack.Navigator>
    );
}

export default JobsRouter;