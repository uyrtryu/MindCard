import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#EBF7FD',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    position: 'absolute',
    marginTop: 70,
    left: 20,
  },
  backIcon: {
    width: 39,
    height: 39,
  },
  header: {
    marginTop: 50,
    alignItems: 'center',
  },
  deckTitle: {
    fontSize: 24,
    fontFamily: 'MontserratAlternates',
    color: '#042D3F',
  },
  progressContainer: {
    marginTop: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  progressText: {
    fontSize: 16,
    color: '#042D3F',
    marginBottom: 10,
  },
  progressBarBackground: {
    width: '80%',
    height: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#9FF9EE',
    borderRadius: 5,
  },
  card: {
    width: 300,
    height: 400,
    borderRadius: 12,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 70,
    alignSelf: 'center',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 24,
    fontFamily: 'MontserratAlternates',
    color: '#042D3F',
    textAlign: 'center',
    marginBottom: 15,
  },
  cardExample: {
    fontSize: 16,
    color: '#333F61',
    fontFamily: 'MontserratAlternates',
    textAlign: 'center',
    lineHeight: 22,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 5,
  },
  navButton: {
    padding: 10,
    borderRadius: 20,
    minWidth: 120,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#9FD7F9',
  },
  backButtonStyle: {
    backgroundColor: '#9FF9EE',
  },
  nextButtonStyle: {
    backgroundColor: '#9FD7F9',
  },
  disabledButton: {
    backgroundColor: '#E0E0E0',
    borderColor: '#BBDEFB',
  },
  navButtonText: {
    color: '#042D3F',
    fontFamily: 'Verdana',
    fontSize: 16,
  },
});