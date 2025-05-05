import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';
import styles from './styles';
import AuthButton from '../../components/AuthButton/AuthButton';
import { useNavigation } from "@react-navigation/native";
import { sendVerificationCode, verifyCode } from '../../api/api'; // путь корректируй под свою структуру

const RegistrationScreen = () => {
  const navigation = useNavigation();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [passwordrepeat, setPasswordRepeat] = useState('');
  const [focusedInput, setFocusedInput] = useState(null);
  const [loginError, setLoginError] = useState(false);
  const [codeSent, setCodeSent] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');

  useEffect(() => {
    setLoginError(login.length > 0 && login.length < 6);
  }, [login]);

  const handleRegisterPress = async () => {
    if (loginError) return;

    if (!codeSent) {
      try {
        await sendVerificationCode(login);
        setCodeSent(true);
        Alert.alert('Код отправлен', 'Проверьте вашу почту.');
      } catch (error) {
        Alert.alert('Ошибка', 'Не удалось отправить код.');
      }
    } else {
      try {
        const result = await verifyCode(login, verificationCode);
        if (result.includes('valid')) {
          Alert.alert('Успешно', 'Регистрация завершена.');
          navigation.navigate("AuthorizationScreen");
        } else {
          Alert.alert('Ошибка', 'Неверный или просроченный код.');
        }
      } catch (error) {
        Alert.alert('Ошибка', 'Не удалось проверить код.');
      }
    }
  };

  const handleContinueWithoutAuth = () => navigation.navigate("DecksWithoutAuth");
  const handleAuth = () => navigation.navigate('AuthorizationScreen');

  const isButtonDisabled = !login || !password || !passwordrepeat || password !== passwordrepeat || loginError || (codeSent && !verificationCode);

  const handleFocus = (inputName) => setFocusedInput(inputName);
  const handleBlur = () => setFocusedInput(null);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        {/* Блок 1: Приветствие */}
        <View style={styles.headerBlock}>
          <Text style={styles.welcomeText}>Добро пожаловать</Text>
          <Text style={styles.welcomeSubText}>в MindCard</Text>
        </View>

        {/* Блок 2: Форма */}
        <View style={styles.formBlock}>
          <Text style={styles.inputLabel}>Почта</Text>
          <TextInput
            style={[
              styles.inputField,
              focusedInput === 'login' && styles.inputFieldFocused,
              loginError && styles.inputFieldError
            ]}
            placeholder={loginError ? "Минимум 6 символов" : "Введите e-mail"}
            placeholderTextColor="#000"
            value={login}
            onChangeText={setLogin}
            onFocus={() => handleFocus('login')}
            onBlur={handleBlur}
          />
          {loginError && <Text style={styles.errorText}>Логин должен содержать минимум 6 символов</Text>}

          <Text style={styles.inputLabel}>Пароль</Text>
          <TextInput
            style={[
              styles.inputField,
              focusedInput === 'password' && styles.inputFieldFocused
            ]}
            placeholder="Введите пароль"
            placeholderTextColor="#000"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            onFocus={() => handleFocus('password')}
            onBlur={handleBlur}
          />

          <Text style={styles.inputLabel}>Повторите пароль</Text>
          <TextInput
            style={[
              styles.inputField,
              focusedInput === 'passwordrepeat' && styles.inputFieldFocused
            ]}
            placeholder="Введите пароль повторно"
            placeholderTextColor="#000"
            secureTextEntry
            value={passwordrepeat}
            onChangeText={setPasswordRepeat}
            onFocus={() => handleFocus('passwordrepeat')}
            onBlur={handleBlur}
          />

          {codeSent && (
            <>
              <Text style={styles.inputLabel}>Код подтверждения</Text>
              <TextInput
                style={[
                  styles.inputField,
                  focusedInput === 'verificationCode' && styles.inputFieldFocused
                ]}
                placeholder="Введите код из письма"
                placeholderTextColor="#000"
                keyboardType="numeric"
                value={verificationCode}
                onChangeText={setVerificationCode}
                onFocus={() => handleFocus('verificationCode')}
                onBlur={handleBlur}
              />
            </>
          )}

          <AuthButton
            title={codeSent ? "Подтвердить код" : "Зарегистрироваться"}
            onPress={handleRegisterPress}
            disabled={isButtonDisabled}
          />
        </View>

        {/* Блок 3: Действия */}
        <View style={styles.actionsBlock}>
          <TouchableOpacity style={[styles.linkButton, styles.secondaryLinkButton]} onPress={handleAuth}>
            <Text style={styles.secondaryLinkButtonText}>Войти</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.linkButton, styles.secondaryLinkButton]} onPress={handleContinueWithoutAuth}>
            <Text style={styles.secondaryLinkButtonText}>Войти без регистрации</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;
