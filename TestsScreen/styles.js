import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  // Общие стили
  container: {
    flex: 1,
    backgroundColor: '#EBF7FD',
    paddingTop: height > 800 ? 20 : 15,
  },
  listContainer: {
    paddingBottom: 80,
    paddingHorizontal: width > 400 ? 20 : 15,
    flexGrow: 1,
  },
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
  emptyText: {
    textAlign: 'center',
    marginTop: height * 0.3,
    fontSize: width > 400 ? 16 : 14,
    color: '#888',
    fontFamily: 'Montserrat-Regular',
  },

  // Стили для дней недели
  daysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width > 400 ? 15 : 8,
    paddingVertical: 10,
    marginBottom: 10,
  },
  dayContainer: {
    alignItems: 'center',
    width: (width - (width > 400 ? 30 : 16)) / 7,
  },
  dayText: {
    fontSize: width > 400 ? 16 : 12,
    color: '#333F61',
    marginBottom: 4,
    fontFamily: 'Verdana',
  },
  starIcon: {
    width: width > 400 ? 40 : 40,
    height: width > 400 ? 40 : 40,
  },

  // Стили для заголовка
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: width > 400 ? 20 : 15,
    paddingVertical: 12,
    marginBottom: 5,
    marginLeft: width > 400 ? 55 : 5,
    marginRight: width > 400 ? 50 : 5,
  },
  headerText: {
    fontSize: width > 400 ? 24 : 24,
    fontFamily: 'MontserratAlternates',
    color: '#333F61',
    marginRight: 10,
  },
  addIcon: {
    width: width > 400 ? 40 : 40,
    height: width > 400 ? 40 : 40,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#C2D0F9',
    borderRadius: 4,
  },

  // Стили для тестов
  testItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: width > 400 ? 16 : 14,
    marginBottom: width > 400 ? -12 : -12,
    marginHorizontal: width > 400 ? -10 : -10,
    backgroundColor: 'transparent',
  },
  testName: {
    fontSize: width > 400 ? 24 : 24,
    color: '#333F61',
    fontFamily: 'MontserratAlternates',
  },
  testArrow: {
    width: width > 400 ? 40 : 40,
    height: width > 400 ? 40 : 40,
  },
});