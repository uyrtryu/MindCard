import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Animated, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import styles from './styles';

const DeckScreen = ({ navigation }) => {
  const route = useRoute();
  const { deckId } = route.params;
  const [deck, setDeck] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const bgColor = useState(new Animated.Value(0))[0];
  const borderColor = useState(new Animated.Value(0))[0];
  const progressAnim = useState(new Animated.Value(0))[0];

  const mockDecks = {
    '1': {
      id: '1',
      name: 'Животные',
      cards: [
        { 
          id: '1', 
          front: 'Lion', 
          frontExample: 'The lion is the king of the jungle.', 
          back: 'Лев', 
          backExample: 'Лев - царь зверей.' 
        },
        { 
          id: '2', 
          front: 'Elephant', 
          frontExample: 'Elephants have excellent memory.', 
          back: 'Слон', 
          backExample: 'Слоны обладают отличной памятью.' 
        },
        { 
            id: '3', 
            front: 'Giraffe', 
            frontExample: 'Giraffes have very long necks to reach leaves.', 
            back: 'Жираф', 
            backExample: 'Жирафы имеют очень длинные шеи, чтобы доставать листья.' 
          }
      ],
      total: 30
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDeck(mockDecks[deckId]);
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [deckId]);

  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: (currentCardIndex + 1) / deck?.cards?.length || 0,
      duration: 500,
      useNativeDriver: false
    }).start();
  }, [currentCardIndex, deck]);

  const handlePressIn = () => {
    Animated.parallel([
      Animated.timing(bgColor, {
        toValue: 1,
        duration: 150,
        useNativeDriver: false
      }),
      Animated.timing(borderColor, {
        toValue: 1,
        duration: 150,
        useNativeDriver: false
      })
    ]).start();
  };

  const handlePressOut = () => {
    Animated.parallel([
      Animated.timing(bgColor, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false
      }),
      Animated.timing(borderColor, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false
      })
    ]).start(() => {
      setIsFlipped(!isFlipped);
    });
  };

  const nextCard = () => {
    if (currentCardIndex < deck.cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false);
    }
  };

  const prevCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setIsFlipped(false);
    }
  };

  const backgroundColor = bgColor.interpolate({
    inputRange: [0, 1],
    outputRange: ['#FFFFFF', '#EBF7FD']
  });

  const borderAnimColor = borderColor.interpolate({
    inputRange: [0, 1],
    outputRange: ['#E0E0E0', '#9FF9EE']
  });

  const progressWidth = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%']
  });

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2196F3" />
      </View>
    );
  }

  if (!deck) {
    return (
      <View style={styles.container}>
        <Text>Колода не найдена</Text>
      </View>
    );
  }

  const currentCard = deck.cards[currentCardIndex];
  const progressPercent = Math.round(((currentCardIndex + 1) / deck.cards.length) * 100);

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.navigate('DecksScreen')}
      >
        <Image 
          source={require('../../assets/return.png')} 
          style={styles.backIcon}
        />
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.deckTitle}>{deck.name}</Text>
      </View>

      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>
          {currentCardIndex + 1}/{deck.cards.length} ({progressPercent}%)
        </Text>
        <View style={styles.progressBarBackground}>
          <Animated.View style={[styles.progressBarFill, { width: progressWidth }]} />
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={1}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Animated.View style={[
          styles.card,
          {
            backgroundColor,
            borderColor: borderAnimColor
          }
        ]}>
          {!isFlipped ? (
            <>
              <Text style={styles.cardTitle}>{currentCard.front}</Text>
              <Text style={styles.cardExample}>{currentCard.frontExample}</Text>
            </>
          ) : (
            <>
              <Text style={styles.cardTitle}>{currentCard.back}</Text>
              <Text style={styles.cardExample}>{currentCard.backExample}</Text>
            </>
          )}
        </Animated.View>
      </TouchableOpacity>

      <View style={styles.navigation}>
        <TouchableOpacity 
          style={[
            styles.navButton, 
            styles.backButtonStyle,
            currentCardIndex === 0 && styles.disabledButton
          ]}
          onPress={prevCard}
          disabled={currentCardIndex === 0}
        >
          <Text style={styles.navButtonText}>Назад</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[
            styles.navButton, 
            styles.nextButtonStyle,
            currentCardIndex === deck.cards.length - 1 && styles.disabledButton
          ]}
          onPress={nextCard}
          disabled={currentCardIndex === deck.cards.length - 1}
        >
          <Text style={styles.navButtonText}>
            {currentCardIndex === deck.cards.length - 1 ? 'Конец' : 'Далее'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DeckScreen;