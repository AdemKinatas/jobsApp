import React from 'react';
import { FlatList } from 'react-native';
import Config from 'react-native-config';
import useFetch from '../../../hooks/useFetch';
import JobCard from '../../../components/Cards/JobCard';
import styles from './JobList.styles';
import Loading from '../../../components/Loading';
import Error from '../../../components/Error';
import { useDispatch } from 'react-redux';

const JobList = ({navigation}) => {
    const { data, loading, error } = useFetch(`${Config.API_JOBS_URL}?page=1`);
    const disPatch = useDispatch();
    
    const getJobDetails = job => {
        disPatch({ type: 'SET_JOB_NAME', payload: { jobName: job.name } });
        navigation.navigate("JobDetail", {job});
     }

    const renderJob = ({ item }) => <JobCard job={item} onPress={() => getJobDetails(item)} />

    if (loading) {
        return (
            <Loading />
        );
    }

    if (error) {
        return (
            <Error />
        );
    }

    return <FlatList style={styles.container} data={data.results} keyExtractor={item => item.id} renderItem={renderJob} />;
}

export default JobList;