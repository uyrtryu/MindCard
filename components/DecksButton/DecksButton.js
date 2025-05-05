import React from 'react';
import { Image } from 'react-native';
import NavButton from '..//NavButton/NavButton';
import decksIconActive from '../../assets/deck-active.png';
import decksIconInactive from '../../assets/deck.png';

const DecksButton = ({ isActive, onPress }) => {
  return (
    <NavButton
      icon={isActive ? decksIconActive : decksIconInactive}
      label="Колоды"
      isActive={isActive}
      onPress={onPress}
    />
  );
};

export default DecksButton;