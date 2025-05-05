import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // 1. Основные стили контейнера и фона
  container: {
    flex: 1,
    backgroundColor: '#EBF7FD',
  },

  // 2. Стили шапки профиля
  profileHeader: {
    alignItems: 'center',
    paddingTop: 70,
    paddingBottom: 0,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 0,
    borderColor: '#C2D0F9',
  },
  profileName: {
    fontSize: 24,
    fontFamily: 'MontserratAlternates',
    color: '#042D3F',
  },
  profileUsername: {
    fontSize: 16,
    fontFamily: 'Verdana',
    color: '#333F61',
  },

  // 3. Стили меню настроек
  settingsMenu: {
    width: '100%',
    alignSelf: 'center',
    borderRadius: 0,
    paddingHorizontal: 0, // Убрали боковые отступы
    paddingTop: 45,
    paddingBottom: 15,
    marginTop: 0,
    alignItems: 'center', // Выравнивание кнопок по центру
  },

  // 4. Обновленные стили для кнопок меню
  menuButton: {
    width: '70%', // Ширина 80% от экрана
    paddingVertical: 15,
    backgroundColor: '#9FD7F9',
    borderRadius: 12,
    alignItems: 'center', // Текст по центру
    justifyContent: 'center',
  },  
  menuButtonText: {
    fontSize: 16,
    color: '#042D3F',
    fontFamily: 'Verdana',
    textAlign: 'center', // Дополнительное выравнивание текста
    width: '100%', // Чтобы текст занимал всю ширину кнопки
  },
  dangerText: {
    color: '#FF3B30',
  },
  buttonSpacing: {
    marginBottom: 15,
  },

  // 5. Стили навигационной панели
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#EBF7FD',
  },

  // 6. Стили модального окна (без изменений)
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    height: '30%',
    backgroundColor: '#FFE2B7',
    padding: 25,
    borderRadius: 16,
    alignItems: 'center',
    elevation: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontFamily: 'MontserratAlternates',
    color: '#333F61',
    marginBottom: 40,
  },
  modalMessage: {
    fontSize: 20,
    fontFamily: 'MontserratAlternates',
    color: '#333F61',
    textAlign: 'center',
    marginBottom: 40,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  confirmButton: {
    flex: 1,
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#98FB98',
    marginRight: 100,
    alignItems: 'center',
  },
  cancelButton: {
    flex: 1,
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#FFC1CC',
    marginLeft: 10,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#042D3F',
    fontWeight: 'bold',
  },
  confirmButtonText: {
    color: '#042D3F',
    fontWeight: 'bold',
  },
});