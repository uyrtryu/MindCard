import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, Modal } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import styles from './styles';
import DecksButton from '../../components/DecksButton/DecksButton';
import TestsButton from '../../components/TestsButton/TestsButton';
import RatingButton from '../../components/RatingButton/RatingButton';
import ProfileButton from '../../components/ProfileButton/ProfileButton';

const ProfileScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Профиль');
  const [selectedOption, setSelectedOption] = useState(null);
  const [customAlertVisible, setCustomAlertVisible] = useState(false);
  const [alertConfig, setAlertConfig] = useState({
    title: '',
    message: '',
    onConfirm: () => {},
  });

  // Синхронизация активной вкладки при фокусе
  useFocusEffect(
    React.useCallback(() => {
      setActiveTab('Профиль');
      return () => {};
    }, [])
  );

  const showCustomAlert = (title, message, onConfirm) => {
    setAlertConfig({ title, message, onConfirm });
    setCustomAlertVisible(true);
  };

  const handleSettingsPress = () => {
    setSelectedOption('Настройки');
    navigation.navigate('SettingsScreen');
  };

  const handleEditProfilePress = () => {
    setSelectedOption('Редактировать аккаунт');
    navigation.navigate('EditProfileScreen', {
      name: 'Александр Смирнов',
      username: '@alexsmirn',
      email: 'alex@example.com',
    });
  };

  const handleLogoutPress = () => {
    showCustomAlert('Выход из аккаунта', 'Вы уверены, что хотите выйти из аккаунта?', () => {
      setSelectedOption(null);
      navigation.navigate('AuthorizationScreen');
    });
  };

  const handleDeleteAccountPress = () => {
    showCustomAlert(
      'Удаление аккаунта',
      'Вы уверены, что хотите удалить аккаунт',
      () => {
        setSelectedOption(null);
        navigation.navigate('Auth');
      }
    );
  };

  // Функции навигации
  const navigateToDecks = () => navigation.navigate('DecksScreen');
  const navigateToTests = () => navigation.navigate('TestsScreen');
  const navigateToRating = () => navigation.navigate('RatingScreen');
  const navigateToProfile = () => {};

  return (
    <View style={styles.container}>
      {/* Шапка профиля */}
      <View style={styles.profileHeader}>
        <Image
          source={require('../../assets/profileImages/profile.png')}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Александр Смирнов</Text>
        <Text style={styles.profileUsername}>@alexsmirn</Text>
      </View>

      {/* Меню настроек */}
      <View style={styles.settingsMenu}>
        <TouchableOpacity
          style={[styles.menuButton, styles.buttonSpacing]}
          onPress={handleSettingsPress}
        >
          <Text style={styles.menuButtonText}>Настройки</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.menuButton, styles.buttonSpacing]}
          onPress={handleEditProfilePress}
        >
          <Text style={styles.menuButtonText}>Редактировать аккаунт</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.menuButton, styles.buttonSpacing]}
          onPress={handleLogoutPress}
        >
          <Text style={[styles.menuButtonText, styles.dangerText]}>
            Выйти из аккаунта
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={handleDeleteAccountPress}
        >
          <Text style={[styles.menuButtonText, styles.dangerText]}>
            Удалить аккаунт
          </Text>
        </TouchableOpacity>
      </View>

      {/* Кастомный алерт */}
      <Modal transparent visible={customAlertVisible} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>{alertConfig.title}</Text>
            <Text style={styles.modalMessage}>{alertConfig.message}</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={() => {
                  setCustomAlertVisible(false);
                  alertConfig.onConfirm();
                }}
              >
                <Text style={styles.confirmButtonText}>Да</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setCustomAlertVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Нет</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Навигационная панель */}
      <View style={styles.navBar}>
        <DecksButton
          isActive={activeTab === 'Колоды'}
          onPress={navigateToDecks}
        />
        <TestsButton
          isActive={activeTab === 'Тесты'}
          onPress={navigateToTests}
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

export default ProfileScreen;