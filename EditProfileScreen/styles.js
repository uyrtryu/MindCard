import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FCFF',
    padding: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 40,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 10,
    paddingTop: 50,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#C2D0F9',
  },
  editIcon: {
    position: 'absolute',
    right: -30,
    bottom: -7,
    borderRadius: 20,
    padding: 8,
  },
  editIconImage: {
    width: 30,
    height: 30,
    
  },
  username: {
    fontSize: 16,
    fontFamily: 'Verdana',
    color: '#333F61',
    marginBottom: 30,
    textAlign: 'center',
  },
  fieldsContainer: {
    width: '100%',
    marginBottom: 150,
    marginTop: 30,
  },
  fieldRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  textField: {
    flex: 1,
    fontSize: 24,
    fontFamily: 'MontserratAlternates',
    color: '#042D3F',
    paddingVertical: 8,
    backgroundColor: 'transparent',
    textAlign: 'center',
    maxWidth: '80%'
  },
  activeTextField: {
    backgroundColor: '#F8FCFF',
    borderWidth: 2,
    borderColor: '#C2D0F9',
    borderRadius: 12,
   },
  editFieldButton: {
    marginLeft: 10,
    padding: 0,
  },
  editFieldIcon: {
    width: 30,
    height: 30,
  },
  actionsContainer: {
    marginTop: 20,
    width: '100%',
    alignSelf: 'center',   // Центрирует контейнер по горизонтали
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: '#C2D0F9',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 30,
    width: '60%'
  },
  saveButtonText: {
    color: '#333F61',
    fontSize: 16,
    fontFamily: 'Verdana',
  },
  backButton: {
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#3E3C80',
    backgroundColor: '#C7FCEC',
    width: '60%'
  },
  backButtonText: {
    color: '#3E3C80',
    fontSize: 16,
    fontFamily: 'Verdana'
  },
});