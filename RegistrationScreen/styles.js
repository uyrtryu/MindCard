import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Общий фон экрана
  },

  // Блок 1: Приветствие (синий)
  headerBlock: {
    backgroundColor: '#9FD7F9', // Темно-синий фон
    width: '100%',
    paddingVertical: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  welcomeText: {
    fontSize: 24,
    fontFamily: 'MontserratAlternates',
    color: '#042D3F', 
    marginTop: 0,
  },
  welcomeSubText: {
    fontSize: 24,
    fontFamily: 'MontserratAlternates',
    color: '#042D3F', 
  },

  // Блок 2: Форма (белый)
  formBlock: {
    backgroundColor: '#EBF7FD', // Белый фон
    width: '100%',
    alignSelf: 'center',
    borderRadius: 0,
    padding: 45,
    marginTop: 0, // Поднимаем чтобы перекрыть синий блок
   
  },
  inputLabel: {
    fontSize: 16,
    fontFamily: 'Verdana',
    color: '#042D3F', // Серый текст
    marginBottom: 8,
    textAlign: 'center',
  },
  inputField: {
    fontSize: 14,
    fontFamily: 'Segoe UI',
    borderRadius: 12,
    padding: 12,
    marginBottom: 15,
    textAlign: 'center', // Основное выравнивание
    textAlignVertical: 'center', // Для вертикального центрирования (Android)
    backgroundColor: 'transparent',
    borderWidth: 0.5, 
    borderColor: '#D0F9D2',
    includeFontPadding: false, // Убирает лишние отступы
    width: '100%', // Важно для правильного центрирования
  },

  inputFieldFocused: {
    backgroundColor: '#F8FCFF',
    borderColor: '#042D3F',
    borderWidth: 0.5,
    borderRadius: 12,
  },
  
  inputFieldError: {
    borderColor: '#FF0000',
    borderWidth: 1,
    backgroundColor: '#FFF0F0',
  },

  // Стиль для текста ошибки
  errorText: {
    color: '#FF0000',
    fontSize: 12,
    fontFamily: 'Verdana',
    marginTop: -10,
    marginBottom: 15,
    textAlign: 'center',
  },

  // Блок 3: Действия (светло-серый)
  actionsBlock: {
    backgroundColor: '#EBF7FD',
    width: '100%',
    height: '100%',
    padding: 25,
    paddingTop: 50,
    marginTop: 0,
    alignItems: 'center',
  },
  
  // Стили для кнопок-ссылок
  linkButton: {
    width: '80%',
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
    backgroundColor: 'transparent',
    borderWidth: 0.5,
    borderColor: '#D0F9D2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkButtonText: {
    fontSize: 16,
    fontFamily: 'Verdana',
    color: '#042D3F',
    textAlign: 'center',
  },
  secondaryLinkButton: {
    marginTop: 0,
    backgroundColor: '#9FD7F9',
    borderWidth: 0.5,
    borderColor: '#D0F9D2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryLinkButtonText: {
    fontSize: 16,
    fontFamily: 'Verdana',
    color: '#042D3F',
    textAlign: 'center',
    borderColor: '#D0F9D2',
  },

  // Кнопка авторизации
  primaryButton: {
    backgroundColor: '#3E3C80',
    borderRadius: 25,
    padding: 15,
    marginTop: 20,
  },
  disabledButton: {
    backgroundColor: '#CECED1',
  },
  primaryButtonText: {
    color: '#042D3F',
    textAlign: 'center',
  },


  // Логотип
  imageLogoName: {
    width: 165,
    height: 35,
    tintColor: '#FFFFFF', // Белый логотип
  },
  
});

export default styles;