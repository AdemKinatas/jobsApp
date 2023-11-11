import React from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';
import styles from './FavoriteJobCard.styles';
import RedButton from '../../Buttons/RedButton';
import { useDispatch } from 'react-redux';

const JobCard = ({ job }) => {
    const disPatch = useDispatch();

    const handleRemoveFromFavorites = () => {
        disPatch({ type: 'REMOVE_FROM_FAVORITES', payload: { jobId: job.id } });
    }

    return (
        <TouchableWithoutFeedback>
            <View style={styles.container}>
                <Text style={styles.name}>{job.name}</Text>
                <Text style={styles.company_name}>{job.company.name}</Text>
                <View style={styles.container_location}>
                    <Text style={styles.location_name}>{job.locations[0].name}</Text>
                </View>
                <Text style={styles.level_name}>{job.levels[0].name}</Text>
                <RedButton text="Remove" onPressHandle={handleRemoveFromFavorites} iconName="delete-circle" />
            </View>
        </TouchableWithoutFeedback>
    );
}

export default JobCard;