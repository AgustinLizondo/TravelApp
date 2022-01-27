import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ActivityButton from './ActivityButton';
import activities from '../assets/activities';

const Activities = () => {
    return (
        <View style={styles.card}>
            <Text style={styles.activitiesText}>Activities</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {activities.map((el, index) => (<ActivityButton iconName={el.iconName} title={el.title} key={index} />))}
            </ScrollView>
        </View>
    );
};

export default Activities;

const styles = StyleSheet.create({
    card: {
        width: '100%',
    },
    activitiesText: {
        fontSize: 24,
        lineHeight: 28,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 30,
        marginBottom: 20,
    }
});
