import React, { useState, useRef } from 'react';
import { View, Image, TextInput, Text, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './styles';
import AuthButton from '../../components/AuthButton/AuthButton';
import { useNavigation } from "@react-navigation/native";

const AuthorizationScreen = () => {
  const navigation = useNavigation();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [focusedInput, setFocusedInput] = useState(null);
  const loginInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const handleLoginChange = (text) => {
    setLogin(text);
    setTimeout(() => {
      loginInputRef.current?.setNativeProps({
        selection: { start: text.length, end: text.length }
      });
    }, 0);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    setTimeout(() => {
      passwordInputRef.current?.setNativeProps({
        selection: { start: text.length, end: text.length }
      });
    }, 0);
  };

  const handleLoginPress = () => {
    console.log('Login:', login, 'Password:', password);
    navigation.navigate("ProfileScreen");
  };

  const handleRegisterPress = () => {
    navigation.navigate("RegistrationScreen");
  };

  const handleForgotPassword = () => {
    navigation.navigate("PasswordRecoveryScreen");
  };

  const handleContinueWithoutAuth = () => {
    navigation.navigate("DecksWithoutAuth");
  };

  const isButtonDisabled = !login || !password;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.headerBlock}>
          <Text style={styles.welcomeText}>Добро пожаловать</Text>
          <Text style={styles.welcomeSubText}>в MindCard</Text>
        </View>

        <View style={styles.formBlock}>
          <Text style={styles.inputLabel}>Логин</Text>
          <TextInput
            ref={loginInputRef}
            style={[
              styles.inputField,
              focusedInput === 'login' && styles.inputFieldFocused
            ]}
            placeholder="Введите логин"
            placeholderTextColor="#042D3F"
            value={login}
            onChangeText={handleLoginChange}
            onFocus={() => setFocusedInput('login')}
            onBlur={() => setFocusedInput(null)}
            textAlign="center"
            textAlignVertical="center"
          />
          
          <Text style={styles.inputLabel}>Пароль</Text>
          <TextInput
            ref={passwordInputRef}
            style={[
              styles.inputField,
              focusedInput === 'password' && styles.inputFieldFocused
            ]}
            placeholder="Введите пароль"
            placeholderTextColor="#042D3F"
            secureTextEntry
            value={password}
            onChangeText={handlePasswordChange}
            onFocus={() => setFocusedInput('password')}
            onBlur={() => setFocusedInput(null)}
            textAlign="center"
            textAlignVertical="center"
          />
          
          <AuthButton
            title="Войти"
            onPress={handleLoginPress}
            disabled={isButtonDisabled}
          />
        </View>

        <View style={styles.actionsBlock}>
          <TouchableOpacity 
            style={styles.linkButton}
            onPress={handleRegisterPress}
          >
            <Text style={styles.linkButtonText}>Зарегистрироваться</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.linkButton}
            onPress={handleForgotPassword}
          >
            <Text style={styles.linkButtonText}>Забыл(а) пароль</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.linkButton, styles.secondaryLinkButton]}
            onPress={handleContinueWithoutAuth}
          >
            <Text style={styles.secondaryLinkButtonText}>Продолжить без регистрации</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AuthorizationScreen;