import React from 'react';
import { Image } from 'react-native';
import NavButton from '../NavButton/NavButton';
import profileIconActive from '../../assets/profile-active.png';
import profileIconInactive from '../../assets/profileImages/profile.png';

const ProfileButton = ({ isActive, onPress }) => {
  return (
    <NavButton
      icon={isActive ? profileIconActive : profileIconInactive}
      label="Профиль"
      isActive={isActive}
      onPress={onPress}
    />
  );
};

export default ProfileButton;