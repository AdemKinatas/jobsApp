import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './FavoritedJobList.styles';
import FavoriteJobCard from '../../../components/Cards/FavoriteJobCard';

const FavoritedJobList = () => {
    const favoritedJobs = useSelector(s => s.favoritedJobs);

    const renderJob = ({ item }) => <FavoriteJobCard job={item} />

    return(
        <FlatList style={styles.container} data={favoritedJobs} keyExtractor={item => item.id} renderItem={renderJob} />
    );
}

export default FavoritedJobList;