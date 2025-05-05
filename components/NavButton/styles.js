import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',  // Выравнивание по центру по горизонтали
    padding: 10,
    width: '25%', // Равномерное распределение
  },
  activeContainer: {
    // Дополнительные стили для активного состояния
  },
  icon: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },
  label: {
    fontSize: 16,
    fontFamily: 'Verdana',
    color: '#333F61',
    marginTop: 5,
  },
  activeLabel: {
    color: '#333F61',
    fontWeight: '600',
  },
});