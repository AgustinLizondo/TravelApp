import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../assets/colors';

const DiscoverCard = (item) => {
    return (
        <TouchableOpacity style={styles.mainCard}>
            <Image
                source={item.bgImage}
                style={styles.mainCard}
            />
            <View style={{ position: 'absolute' }}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.location}>
                    <Icon name={'location-outline'} color={colors.White} />
                    <Text style={styles.locationText}>{item.location}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default DiscoverCard;

const styles = StyleSheet.create({
    mainCard: {
        width: 170,
        height: 250,
        borderRadius: 20,
        marginHorizontal: 10
    },
    title: {
        fontSize: 18,
        lineHeight: 22,
        color: colors.White,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        top: 168,
        marginLeft: 10,
    },
    location: {
        flexDirection: 'row',
        marginLeft: 13.75,
        top: 174,
    },
    locationText: {
        fontSize: 10,
        lineHeight: 12,
        fontWeight: '700',
        color: colors.White,
        alignSelf: 'center',
        marginLeft: 8.75
    }
});
