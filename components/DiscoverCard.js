import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../assets/colors';

const DiscoverCard = (item) => {
    return (
        <TouchableOpacity style={styles.mainCard} onPress={() => item.navigation.navigate('Details', {
            bgImage: item.bgImage,
            bigImage: item.bigImage,
            description: item.description,
            duration: item.duration,
            location: item.location,
            rating: item.rating,
            price: item.price,
            title: item.title,
        })}>
            <Image
                source={item.bgImage}
                style={styles.mainCard}
            />
            <View style={{ position: 'absolute' }}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.location}>
                    <Icon name={'map-marker-alt'} color={colors.White} />
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
        marginHorizontal: 10,
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
        marginLeft: 24,
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
