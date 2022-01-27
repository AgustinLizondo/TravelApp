import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import colors from '../assets/colors';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ActivityButton = ({ iconName, title }) => {
    return (
        <TouchableOpacity style={styles.card}>
            <Icon name={iconName} size={30} color={colors.Orange} />
            <Text style={styles.titleText}>{title}</Text>
        </TouchableOpacity>
    );
};

export default ActivityButton;

const styles = StyleSheet.create({
    card: {
        width: 38,
        height: 54,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 10,
        lineHeight: 12,
        color: colors.Gray,
        fontWeight: 'bold',
        marginTop: 9,
    }
});
