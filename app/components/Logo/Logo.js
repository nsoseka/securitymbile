import React, { Component } from 'react';
import { View, Image, Text, Platform, Keyboard, Animated, StyleSheet } from 'react-native';
import styles from './styles';


const ANIMATION_DURATION = 200;

class Logo extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      imageWidth: new Animated.Value(styles.$largeContainerSize),
    };
  };


  componentDidMount() {
    const action = Platform.Os === 'ios' ? 'Will' : 'Did';
    this.keyboardShowListener = Keyboard.addListener(`keyboard${action}Show`, this.keyboardShow);
    this.keyboardHideListener = Keyboard.addListener(`keyboard${action}Hide`, this.keyboardHide);
  };

  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();
  };

  keyboardShow = () => {
    Animated.timing(this.state.imageWidth, {
      toValue: styles.$smallContainerSize,
      duration: ANIMATION_DURATION
    }).start();
  };

  keyboardHide = () => {
    Animated.timing(this.state.imageWidth, {
      toValue: styles.$largeContainerSize,
      duration: ANIMATION_DURATION
    }).start();
  };

  render() {
    const imageStyle = [
      styles.logo,
      { width: this.state.imageWidth, height: this.state.imageWidth },
    ];

    return (
      <View styles={styles.container}>
        <Animated.Image 
          resizeMode="contain" 
          style={[imageStyle]} 
          source={require('./images/ll.png')} />
      </View>
    )
  }
};

export default Logo;



