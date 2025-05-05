import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBF7FD',
  },
  ratingImage: {
    width: 200,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 90,
  },
  ratingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  circleContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    position: 'relative',
  },
  circleImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  rankText: {
    fontSize: 24,
    fontFamily: 'MontserratAlternates',
    color: '#042D3F',
    textAlign: 'center',
  },
  username: {
    flex: 1,
    fontSize: 24,
    fontFamily: 'MontserratAlternates',
    color: '#042D3F',
    marginLeft: 10,
  },
  score: {
    fontSize: 24,
    fontFamily: 'MontserratAlternates',
    color: '#042D3F',
    minWidth: 50,
    textAlign: 'right',
  },
  listContainer: {
    paddingBottom: 80,
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
});