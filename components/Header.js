import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../assets/colors';

const Header = ({ profileImage }) => {
  return (
    <View style={styles.headerCard}>
      <TouchableOpacity>
        <Icon name={'menu'} size={32} color={colors.Black} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={profileImage}
          style={styles.profileImage}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerCard: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImage: {
    height: 52,
    width: 52,
    borderRadius: 10,
  },
});
