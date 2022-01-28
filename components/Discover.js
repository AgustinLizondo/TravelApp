import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TextTab from './TextTab';
import DiscoverCard from './DiscoverCard';
import destinations from '../assets/destinations'

const Discover = ({ navigation }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.discoverText}>Discover</Text>
            <View style={styles.tabCard}>
                <TextTab content={'All'} selected={true} />
                <TextTab content={'Destinations'} selected={false} />
                <TextTab content={'Cities'} selected={false} />
                <TextTab content={'Experiences'} selected={false} />
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {destinations.map((el, index) => (<DiscoverCard
                    navigation={navigation}
                    key={index}
                    bgImage={el.bgImage}
                    bigImage={el.bigImage}
                    description={el.description}
                    location={el.location}
                    duration={el.duration}
                    price={el.price}
                    rating={el.rating}
                    title={el.title}
                />))}
            </ScrollView>
            {/* We can replace that ScrollView with this FlatList. */}
            {/* <FlatList
                data={destinations}
                renderItem={DiscoverCard}
                horizontal
            /> */}
        </View>
    );
};

export default Discover;

const styles = StyleSheet.create({
    card: {
        width: '100%',
    },
    discoverText: {
        fontSize: 32,
        lineHeight: 38,
        fontWeight: 'bold',
        marginLeft: 20
    },
    tabCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 20
    }
});
