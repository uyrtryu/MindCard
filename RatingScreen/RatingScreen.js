import React, { useState } from 'react';
import { View, Image, Text, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import styles from './styles';
import DecksButton from '../../components/DecksButton/DecksButton';
import TestsButton from '../../components/TestsButton/TestsButton';
import RatingButton from '../../components/RatingButton/RatingButton';
import ProfileButton from '../../components/ProfileButton/ProfileButton';

const RatingScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Рейтинг');
  
  const [ratingData] = useState([
    { id: '1', username: '@alexmim', score: 115 },
    { id: '2', username: '@soft13', score: 102 },
    { id: '3', username: '@andreu07', score: 94 },
  ]);

  useFocusEffect(
    React.useCallback(() => {
      setActiveTab('Рейтинг');
    }, [])
  );

  const navigateToDecks = () => navigation.navigate('DecksScreen');
  const navigateToTests = () => navigation.navigate('TestsScreen');
  const navigateToProfile = () => navigation.navigate('ProfileScreen');

  const renderItem = ({ item, index }) => (
    <View style={styles.ratingItem}>
      <View style={styles.circleContainer}>
        <Image 
          source={require('../../assets/circle.png')} 
          style={styles.circleImage}
        />
        <Text style={styles.rankText}>{index + 1}</Text>
      </View>
      <Text style={styles.username}>{item.username}</Text>
      <Text style={styles.score}>{item.score}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/ranking.png')}
        style={styles.ratingImage}
      />

      <FlatList
        data={ratingData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />

      <View style={styles.navBar}>
        <DecksButton isActive={activeTab === 'Колоды'} onPress={navigateToDecks} />
        <TestsButton isActive={activeTab === 'Тесты'} onPress={navigateToTests} />
        <RatingButton isActive={activeTab === 'Рейтинг'} onPress={() => {}} />
        <ProfileButton isActive={activeTab === 'Профиль'} onPress={navigateToProfile} />
      </View>
    </View>
  );
};

export default RatingScreen;