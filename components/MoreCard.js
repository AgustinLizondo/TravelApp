import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import colors from '../assets/colors';

const MoreCard = ({ bgImage, title }) => {
    return (
        <TouchableOpacity>
            <Image
                source={bgImage}
                style={styles.bgImage}
            />
            <Text style={styles.titleText}>{title}</Text>
        </TouchableOpacity>
    );
};

export default MoreCard;

const styles = StyleSheet.create({
    titleText: {
        position: 'absolute',
        fontSize: 24,
        lineHeight: 28,
        fontWeight: 'bold',
        bottom: 20,
        paddingLeft: 40,
        color: colors.White
    },
    bgImage: {
        width: 170,
        height: 180,
        borderRadius: 20,
        marginLeft: 20
    }
});
