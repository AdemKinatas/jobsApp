import React from 'react';
import { FlatList } from 'react-native';
import Config from 'react-native-config';
import useFetch from '../../../hooks/useFetch';
import JobCard from '../../../components/Cards/JobCard';
import styles from './JobList.styles';

const JobList = () => {
    const { data, loading, error } = useFetch(`${Config.API_JOBS_URL}?page=1`);

    const renderJob = ({ item }) => <JobCard job={item} />
    return (
        <FlatList
            style={styles.container}
            data={data.results}
            keyExtractor={item => item.id}
            renderItem={renderJob}
        />
    );
}

export default JobList;