import React from 'react';
import PropTypes from 'prop-types';
import { View, StatusBar, TouchableWithoutFeedback, Keyboard } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet'
import styles from './styles'


const Container = ({ children }) => {
  
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        { children }
      </View>
    </TouchableWithoutFeedback>
  )
}
  

Container.propTypes = {
  children: PropTypes.any,
  backgroundColor: PropTypes.string,
}

export default Container;
