import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavigationActions, StackActions } from 'react-navigation'
import { View, StatusBar, BackHandler, ToastAndroid } from 'react-native';


import { Container } from '../components/Container';
import { Searcher } from '../components/Searcher';
import { changeBackground } from '../actions/background';


class Search extends Component {

  static propTypes = {
    navigation: PropTypes.object,
  };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  };

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  };

  handleBackButton() {
    ToastAndroid.show('Back button is pressed', ToastAndroid.SHORT);
    return true;
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle='light-content' />
        <Searcher />
      </Container>
    )
  }
};

export default Search;
  
