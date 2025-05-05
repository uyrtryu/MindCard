import React from 'react';
import { Image } from 'react-native';
import NavButton from '../NavButton/NavButton'; // Измененный путь
import testsIconActive from '../../assets/test-active.png';
import testsIconInactive from '../../assets/test.png';

const TestsButton = ({ isActive, onPress }) => {
  return (
    <NavButton
      icon={isActive ? testsIconActive : testsIconInactive}
      label="Тесты"
      isActive={isActive}
      onPress={onPress}
    />
  );
};

export default TestsButton;