import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import styles from './styles';
import DecksButton from '../../components/DecksButton/DecksButton';
import TestsButton from '../../components/TestsButton/TestsButton';
import RatingButton from '../../components/RatingButton/RatingButton';
import ProfileButton from '../../components/ProfileButton/ProfileButton';

const TestsWithoutAuth = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Тесты');

  useFocusEffect(
    React.useCallback(() => {
      setActiveTab('Тесты');
      return () => {};
    }, [])
  );

  // Функции навигации
  const navigateToDecks = () => navigation.navigate('DecksWithoutAuth');
  const navigateToRating = () => navigation.navigate('RatingWithoutAuth');
  const navigateToAuth = () => navigation.navigate('AuthorizationScreen'); // Экран авторизации
  const navigateToProfile = () => navigation.navigate('ProfileWithoutAuth')

  return (
    <View style={styles.container}>
      {/* Центральная кнопка авторизации */}
      <View style={styles.authContainer}>
        <Text style={styles.authTitle}>Войдите в аккаунт</Text>
        <Text style={styles.authSubtitle}>Чтобы сохранять прогресс и настройки</Text>
        
        <TouchableOpacity
          style={styles.authButton}
          onPress={navigateToAuth}
        >
          <Text style={styles.authButtonText}>Авторизоваться</Text>
        </TouchableOpacity>
      </View>

      {/* Навигационная панель */}
      <View style={styles.navBar}>
        <DecksButton
          isActive={activeTab === 'Колоды'}
          onPress={navigateToDecks}
        />
        <TestsButton
          isActive={activeTab === 'Тесты'}
          onPress={() => {}}
        />
        <RatingButton
          isActive={activeTab === 'Рейтинг'}
          onPress={navigateToRating}
        />
        <ProfileButton
          isActive={activeTab === 'Профиль'}
          onPress={navigateToProfile}
        />
      </View>
    </View>
  );
};

export default TestsWithoutAuth;