import React from 'react';
import { View } from 'react-native';
import styles from './DetailBottomCard.styles';
import RedButton from '../../Buttons/RedButton';
import { useDispatch } from 'react-redux';

const DetailBottomCard = ({ job }) => {
    const disPatch = useDispatch();

    const handleSubmit = () => {
        disPatch({ type: 'ADD_TO_FAVORITES', payload: { job: job } });
    }

    return (
        <View style={styles.container}>
            <View style={styles.button_container}>
                <RedButton text="Submit" onPressHandle={handleSubmit} iconName="checkbox-marked-circle-outline" />
            </View>
            <View style={styles.button_container}>
                <RedButton text="Favorite Job" onPressHandle={handleSubmit} iconName="cards-heart" />
            </View>
        </View>
    );
}

export default DetailBottomCard;