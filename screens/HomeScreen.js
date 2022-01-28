import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Discover from '../components/Discover';
import Activities from '../components/Activities';
import LearnMore from '../components/LearnMore';

const HomeScreen = ({ navigation }) => {
    return (
        <>
            <Header profileImage={require('../assets/person.jpg')} />
            <Discover navigation={navigation} />
            <Activities />
            <LearnMore />
        </>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
});
