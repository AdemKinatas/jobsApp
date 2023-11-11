import React from 'react';
import { View, Text } from 'react-native';
import styles from './DetailInformationCard.styles';

const DetailInformationCard = ({ job }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{job.name}</Text>
            <View style={styles.location_container}>
                <Text style={styles.location_title}>Locations: </Text>
                <Text style={styles.location_name}>{job.locations[0].name}</Text>
            </View>
            <View style={styles.level_container}>
                <Text style={styles.level_title}>Job Level: </Text>
                <Text style={styles.level_name}>{job.levels[0].name}</Text>
            </View>
            <Text style={styles.job_detail}>Job Detail</Text>
        </View>
    );
}

export default DetailInformationCard;