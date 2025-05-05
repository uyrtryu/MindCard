import React, { useState } from 'react';
import { View, Image, Text, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import styles from './styles';
import DecksButton from '../../components/DecksButton/DecksButton';
import TestsButton from '../../components/TestsButton/TestsButton';
import RatingButton from '../../components/RatingButton/RatingButton';
import ProfileButton from '../../components/ProfileButton/ProfileButton';

const { width } = Dimensions.get('window');

const DecksWithouAuth = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Колоды');
  
  const daysOfWeek = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
  const [visitedDays] = useState([true, true, false, true, false, false, false]);

  const [decksData] = useState([
    { id: '1', deckName: 'Животные' },
    { id: '2', deckName: 'Цвета и формы' },
    { id: '3', deckName: 'Внешность' },
    { id: '4', deckName: 'Кино и театр' },
  ]);

  useFocusEffect(
    React.useCallback(() => {
      setActiveTab('Колоды');
    }, [])
  );

  const navigateToTests = () => navigation.navigate('TestsWithoutAuth');
  const navigateToRating = () => navigation.navigate('RatingWithoutAuth');
  const navigateToProfile = () => navigation.navigate('ProfileWithoutAuth');
  const navigateToDeck = (deckId) => navigation.navigate('DeckScreen', { deckId });
  const navigateToCreateDeck = () => navigation.navigate('CreateDeckScreen');

  const renderItem = ({ item }) => (
    <View style={styles.testItem}>
      <Text style={styles.testName}>{item.deckName}</Text>
      <TouchableOpacity onPress={() => navigateToDeck(item.id)}>
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
        <Text style={styles.headerText}>Создать колоду</Text>
        <TouchableOpacity onPress={navigateToCreateDeck}>
          <Image 
            source={require('../../assets/add-icon.png')} 
            style={styles.addIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Список всех колод */}
      <FlatList
        data={decksData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Нет доступных колод</Text>
        }
      />

      {/* Нижняя навигация */}
      <View style={styles.navBar}>
        <DecksButton isActive={activeTab === 'Колоды'} onPress={() => {}} />
        <TestsButton isActive={activeTab === 'Тесты'} onPress={navigateToTests} />
        <RatingButton isActive={activeTab === 'Рейтинг'} onPress={navigateToRating} />
        <ProfileButton isActive={activeTab === 'Профиль'} onPress={navigateToProfile} />
      </View>
    </View>
  );
};

export default DecksWithouAuth;