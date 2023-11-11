import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './RedButton.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const RedButton = ({ text, onPressHandle, iconName }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPressHandle} >
            <Icon style={styles.icon} name={iconName} />
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

export default RedButton;