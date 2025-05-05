import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#9FD7F9',
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    width: '70%',
    includeFontPadding: false,
    alignSelf: 'center'
  },
  disabled: {
    backgroundColor: 'transparent',
    borderWidth: 0.8, 
    borderColor: '#D0F9D2',
  },
  buttonText: {
    color: '#042D3F',
    fontSize: 16,
    fontFamily: 'Verdana',
  },
});

export default styles;