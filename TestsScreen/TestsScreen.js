import React, { useState } from 'react';
import { View, Image, Text, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import styles from './styles';
import DecksButton from '../../components/DecksButton/DecksButton';
import TestsButton from '../../components/TestsButton/TestsButton';
import RatingButton from '../../components/RatingButton/RatingButton';
import ProfileButton from '../../components/ProfileButton/ProfileButton';

const { width } = Dimensions.get('window');

const TestsScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Тесты');
  
  const daysOfWeek = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
  const [visitedDays] = useState([true, true, false, true, false, false, false]);

  const [testsData] = useState([
    { id: '1', testName: 'Тест 1' },
    { id: '2', testName: 'Тест 2' },
    { id: '3', testName: 'Тест 3' },
  ]);

  useFocusEffect(
    React.useCallback(() => {
      setActiveTab('Тесты');
    }, [])
  );

  const navigateToDecks = () => navigation.navigate('DecksScreen');
  const navigateToRating = () => navigation.navigate('RatingScreen');
  const navigateToProfile = () => navigation.navigate('ProfileScreen');
  const navigateToTest = (testId) => navigation.navigate('TestScreen', { testId });
  const navigateToCreateTest = () => navigation.navigate('CreateTestScreen');

  const renderItem = ({ item }) => (
    <View style={styles.testItem}>
      <Text style={styles.testName}>{item.testName}</Text>
      <TouchableOpacity onPress={() => navigateToTest(item.id)}>
        <Image 
          source={require('../../assets/go-to.png')} 
          style={styles.testArrow}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Дни недели - статичный ряд */}
      <View style={styles.daysContainer}>
        {daysOfWeek.map((day, index) => (
          <View key={index} style={styles.dayContainer}>
            <Text style={styles.dayText}>{day}</Text>
            <Image 
              source={visitedDays[index] 
                ? require('../../assets/star-active.png') 
                : require('../../assets/star.png')} 
              style={styles.starIcon}
            />
          </View>
        ))}
      </View>

      {/* Заголовок и кнопка создания */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Создать тест</Text>
        <TouchableOpacity onPress={navigateToCreateTest}>
          <Image 
            source={require('../../assets/add-icon.png')} 
            style={styles.addIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Список всех тестов */}
      <FlatList
        data={testsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Нет доступных тестов</Text>
        }
      />

      {/* Нижняя навигация */}
      <View style={styles.navBar}>
        <DecksButton isActive={activeTab === 'Колоды'} onPress={navigateToDecks} />
        <TestsButton isActive={activeTab === 'Тесты'} onPress={() => {}} />
        <RatingButton isActive={activeTab === 'Рейтинг'} onPress={navigateToRating} />
        <ProfileButton isActive={activeTab === 'Профиль'} onPress={navigateToProfile} />
      </View>
    </View>
  );
};

export default TestsScreen;