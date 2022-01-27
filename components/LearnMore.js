import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import morePlaces from '../assets/morePlaces'
import MoreCard from './MoreCard'

const LearnMore = () => {
    return (
        <View style={styles.card}>
            <Text style={styles.moreText}>Learn More</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {morePlaces.map((el, index) => (<MoreCard bgImage={el.bgImage} title={el.title} key={index} />))}
            </ScrollView>
        </View>
    );
};

export default LearnMore;

const styles = StyleSheet.create({
    card: {
        width: '100%',
    },
    moreText: {
        fontSize: 24,
        lineHeight: 28,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 30,
        marginBottom: 20
    },
});
