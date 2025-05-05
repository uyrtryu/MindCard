import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Основной контейнер
  container: {
    flex: 1,
    backgroundColor: '#F8FCFF',
  },

  // Центральный блок с кнопкой авторизации
  authContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },


  // Заголовок
  authTitle: {
    fontSize: 24,
    fontFamily: 'Verdana',
    color: '#042D3F',
    marginBottom: 10,
    textAlign: 'center',
  },

  // Подзаголовок
  authSubtitle: {
    fontSize: 16,
    fontFamily: 'Verdana',
    color: '#333F61',
    marginBottom: 30,
    textAlign: 'center',
    lineHeight: 22,
  },

  // Кнопка авторизации
  authButton: {
    backgroundColor: '#C2D0F9',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 12,
    width: '100%',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  // Текст кнопки
  authButtonText: {
    color: '#042D3F',
    fontSize: 18,
    fontFamily: 'MontserratAlternates-SemiBold',
    textAlign: 'center',
  },

  // Нижняя навигационная панель
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#F8FCFF',
  },
});