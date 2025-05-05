import React, { useState, useRef } from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, Keyboard, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';

const EditProfileScreen = ({ navigation, route }) => {
  const [name, setName] = useState(route.params?.name || 'Александр Смирнов');
  const [email, setEmail] = useState(route.params?.email || 'alex.smirnov@mail.ru');
  const [activeField, setActiveField] = useState(null);
  const [isAvatarEditing, setIsAvatarEditing] = useState(false);
  const nameInputRef = useRef();
  const emailInputRef = useRef();

  const handleSave = () => {
    Keyboard.dismiss();
    navigation.goBack();
  };

  const handleFieldPress = (fieldName, inputRef) => {
    if (activeField === fieldName) {
      Keyboard.dismiss();
      setActiveField(null);
    } else {
      setActiveField(fieldName);
      inputRef.current.focus();
    }
  };

  const toggleAvatarEditing = () => {
    setIsAvatarEditing(!isAvatarEditing);
    // Здесь будет логика выбора нового аватара
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
    setActiveField(null);
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        {/* Шапка профиля */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <Image 
              source={require('../../assets/profileImages/profile.png')}
              style={styles.profileImage}
            />
            <TouchableOpacity 
              style={styles.editIcon}
              onPress={toggleAvatarEditing}
            >
              <Image 
                source={isAvatarEditing 
                  ? require('../../assets/edit-active.png')
                  : require('../../assets/edit.png')}
                style={styles.editIconImage}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.username}>@alexsmirn</Text>
        </View>

        {/* Поля редактирования */}
        <View style={styles.fieldsContainer}>
          {/* Поле имени */}
          <View style={styles.fieldRow}>
            <TextInput
              ref={nameInputRef}
              style={[
                styles.textField,
                activeField === 'name' && styles.activeTextField,
                { textAlign: 'center' }
              ]}
              value={name}
              onChangeText={setName}
              onFocus={() => setActiveField('name')}
              onBlur={() => setActiveField(null)}
            />
            <TouchableOpacity 
              onPress={() => handleFieldPress('name', nameInputRef)}
              style={styles.editFieldButton}
            >
              <Image 
                source={activeField === 'name' 
                  ? require('../../assets/edit-active.png')
                  : require('../../assets/edit.png')}
                style={styles.editFieldIcon}
              />
            </TouchableOpacity>
          </View>

          {/* Поле email */}
          <View style={styles.fieldRow}>
            <TextInput
              ref={emailInputRef}
              style={[
                styles.textField,
                activeField === 'email' && styles.activeTextField,
                { textAlign: 'center' }
              ]}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              onFocus={() => setActiveField('email')}
              onBlur={() => setActiveField(null)}
            />
            <TouchableOpacity 
              onPress={() => handleFieldPress('email', emailInputRef)}
              style={styles.editFieldButton}
            >
              <Image 
                source={activeField === 'email' 
                  ? require('../../assets/edit-active.png')
                  : require('../../assets/edit.png')}
                style={styles.editFieldIcon}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Кнопки действий */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity 
            style={styles.saveButton}
            onPress={handleSave}
          >
            <Text style={styles.saveButtonText}>Сохранить изменения</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>Назад к профилю</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default EditProfileScreen;