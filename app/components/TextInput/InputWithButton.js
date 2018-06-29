import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, TextInput, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import color from 'color';

const ICON_COLOR = '#868686';
const ICON_SIZE = 23;
const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';

const InputWithButton = (props) => {
  const { buttonText, onPress, onQuery } = props;
  const containerStyles = [styles.container];
  const buttonTextStyles = [styles.buttonText];
  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(styles.$buttonBackgroundColorModifier);

  return (
    <View style={containerStyles}>
      
      <TextInput style={styles.input} underlineColorAndroid='transparent' {...props} />
      <View style={styles.separator} />
      <TouchableHighlight 
            underlayColor={underlayColor} 
            onPress={onQuery} 
            style={styles.buttonContainer}>
        <Ionicons name={`${ICON_PREFIX}-search`} color={ICON_COLOR} size={ICON_SIZE} style={styles.search} />
      </TouchableHighlight>
    </View>
  )
};

InputWithButton.propTypes = {
  editable: PropTypes.bool,
  buttonText: PropTypes.string,
  onPress: PropTypes.func,
  textColor: PropTypes.string,
};


export default InputWithButton;

