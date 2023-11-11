import React from 'react';
import { View, Text } from 'react-native';
import styles from './DetailInformationCard.styles';

const DetailInformationCard = ({ job }) => {
    console.log(job);
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{job.name}</Text>
            <Text style={styles.company_name}>{job.company.name}</Text>
            <View style={styles.container_location}>
                <Text style={styles.location_name}>{job.locations[0].name}</Text>
            </View>
            <Text style={styles.level_name}>{job.levels[0].name}</Text>
        </View>
    );
}

export default DetailInformationCard;