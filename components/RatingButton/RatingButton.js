import React from 'react';
import { Image } from 'react-native';
import NavButton from '../NavButton/NavButton';
import ratingIconActive from '../../assets/rating-active.png';
import ratingIconInactive from '../../assets/rating.png';

const RatingButton = ({ isActive, onPress }) => {
  return (
    <NavButton
      icon={isActive ? ratingIconActive : ratingIconInactive}
      label="Рейтинг"
      isActive={isActive}
      onPress={onPress}
    />
  );
};

export default RatingButton;