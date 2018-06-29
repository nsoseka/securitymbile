import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StatusBar, KeyboardAvoidingView, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import {NetInfo} from 'react-native';

import { connectAlert } from '../components/Alert';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { changeQuery } from '../actions/background';
import { changeBackground } from '../actions/background';

const TEMP_QUERY = 'ID';

class Home extends Component {

  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    query: PropTypes.string,
  };

  changeQuery(text) {
    this.props.dispatch(changeQuery(text));
  };

  validQuery() {
    if (!this.props.query) {
      return { veracity: false, errorMessage: 'Please provide a query' };
    } else if (this.props.query.match(/^\d+$/) && this.props.query.length === 9) {
      return { veracity: true };
    } else if (this.props.query.match(/^\d+$/) && this.props.query.length !== 9) {
      return { veracity: false, errorMessage: 'The ID CARD NUMBER is NOT CORRECT' };
    } else if (this.props.query.match(/^\D+$/) && this.props.query.length > 3) {
      return { veracity: true };
    } else if (!this.props.query.match(/^\D+$/)) {
      return { veracity: false, errorMessage: 'SEARCH QUERY has both letters and Numbers' }
    } else {
      return { veracity: false, errorMessage: 'SEARCH QUERY is TOO SHORT' };
    }
  };

  showSearchScreen() {
    Keyboard.dismiss();
    this.props.dispatch(changeBackground(this.props.query, this.props.navigation));
    this.props.navigation.navigate('Search', {'query': this.props.query});
  };

  query() {  
    const queryState = this.validQuery();
    if (queryState.veracity) {
      NetInfo.isConnected.fetch().then(isConnected => {
        !isConnected ?
        this.props.alertWithType('info', 'NO CONNECTION', 
          'You are currently not connected to the internet') :
        this.showSearchScreen();
      });
    } else {
      this.props.alertWithType('error', 'Invalid Query!!!', queryState.errorMessage);
    }

  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle='light-content' />
        <KeyboardAvoidingView 
          behavior="padding" 
          style={{justifyContent: 'center', alignItems: 'center'}} 
          enabled={true}
          keyboardVerticalOffset={120}>
          <Logo />
          <InputWithButton
            buttonText={TEMP_QUERY}
            defaultValue={this.props.query}
            onQuery={this.query.bind(this)}
            textColor={this.props.primaryColor}
            onChangeText={this.changeQuery.bind(this)}
          />
        </KeyboardAvoidingView>
      </Container>
    )
  }
};

const mapStateToProps = state => {
  const query = state.myState.query;
  return {
    query,
  };
};

export default connect(mapStateToProps)(connectAlert(Home));
