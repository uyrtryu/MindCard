import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, ActivityIndicator, View } from 'react-native';
import * as Font from 'expo-font';
import 'web-streams-polyfill';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextEncoder } from 'text-encoding';
import AuthorizationScreen from './screens/AuthorizationScreen/AuthorizationScreen';
import RegistrationScreen from './screens/RegistrationScreen/RegistrationScreen';
import EditProfileScreen from './screens/EditProfileScreen/EditProfileScreen';
import AuthorizationAcceptScreen from './screens/AuthorizationAcceptScreen/AuthorizationAcceptScreen';
import PremiumScreen from './screens/PremiumScreen/PremiumScreen';
import RatingScreen from './screens/RatingScreen/RatingScreen';
import DecksScreen from './screens/DecksScreen/DecksScreen';
import DeckScreen from './screens/DeckScreen/DeckScreen';
import TestsScreen from './screens/TestsScreen/TestsScreen';
import ProfileWithoutAuth from './screens/ProfileWithoutAuth/ProfileWithoutAuth';
import RatingWithoutAuth from './screens/RatingWithoutAuth/RatingWithoutAuth';
import DecksWithoutAuth from './screens/DecksWithoutAuth/DecksWithoutAuth';
import TestsWithoutAuth from './screens/TestsWtihoutAuth/TestsWtihoutAuth';
import PremiumFreeScreen from './screens/PremiumFreeScreen/PremiumFreeScreen';
import ChooseCityScreen from './screens/ChooseCityScreen/ChooseCityScreen';
import ChoosePreferencesScreen from './screens/ChoosePreferencesScreen/ChoosePreferencesScreen';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';
import MyRoutesScreen from './screens/MyRoutesScreen/MyRoutesScreen';
import DoneRoutesScreen from './screens/DoneRoutesScreen/DoneRoutesScreen';
import LikeRoutesScreen from './screens/LikeRoutesScreen/LikeRoutesScreen';

global.TextEncoder = TextEncoder;

const Stack = createStackNavigator();

// Функция загрузки шрифтов
const loadFonts = async () => {
  await Font.loadAsync({
    'Verdana': require('./assets/fonts/Verdana.ttf'),
    'Segoe UI': require('./assets/fonts/Segoe UI.ttf'),
    'XI20': require('./assets/fonts/Segoe UI.ttf'),
    'Regular': require('./assets/fonts/Pacifico-Regular.ttf'),
    'MontserratAlternates': require('./assets/fonts/MontserratAlternates-Regular.ttf')
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await loadFonts();
      } catch (e) {
        console.warn('Ошибка загрузки шрифтов:', e);
      } finally {
        setFontsLoaded(true);
      }
    }

    prepare();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="AuthorizationScreen" // Изменили начальный экран
          screenOptions={{ headerShown: false }}
        >
          {/* Убрали LoadingScreen */}
          <Stack.Screen name="AuthorizationScreen" component={AuthorizationScreen} />
          <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
          <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
          <Stack.Screen name="RatingScreen" component={RatingScreen} />
          <Stack.Screen name="TestsScreen" component={TestsScreen} />
          <Stack.Screen name="DecksScreen" component={DecksScreen} />
          <Stack.Screen name="ProfileWithoutAuth" component={ProfileWithoutAuth} />
          <Stack.Screen name="RatingWithoutAuth" component={RatingWithoutAuth} />
          <Stack.Screen name="TestsWithoutAuth" component={TestsWithoutAuth} />
          <Stack.Screen name="DecksWithoutAuth" component={DecksWithoutAuth} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          <Stack.Screen name="DeckScreen" component={DeckScreen} options={({ route }) => ({ title: route.params.deckId })}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}