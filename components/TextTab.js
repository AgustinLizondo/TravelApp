import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import colors from '../assets/colors';

const TextTab = ({ content, selected }) => {
    return (
        <TouchableOpacity>
            <Text style={selected ? styles.selectedTab : styles.tab}>{content}</Text>
        </TouchableOpacity>
    )
}

export default TextTab;

const styles = StyleSheet.create({
    tab: {
        fontSize: 15,
        lineHeight: 20,
        fontWeight: '700',
        color: colors.Black,
    },
    selectedTab: {
        fontSize: 15,
        lineHeight: 20,
        fontWeight: '700',
        color: colors.Orange,
    },
});
