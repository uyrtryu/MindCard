import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import styles from './styles';

const NavButton = ({ icon, label, isActive, onPress }) => {
  return (
    <TouchableOpacity 
      style={[styles.container, isActive && styles.activeContainer]}
      onPress={onPress}
    >
      <Image source={icon} style={styles.icon} />
      <Text style={[styles.label, isActive && styles.activeLabel]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default NavButton;