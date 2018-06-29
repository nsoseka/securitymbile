import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from '../components/Container';
import { View, StatusBar, ScrollView, Linking } from 'react-native';
import { Text } from 'react-native';
import { connect } from 'react-redux';



import { connectAlert } from '../components/Alert';
import { Id } from '../components/Id';
import { Restrictions } from '../components/Restrictions';
import { Flags } from '../components/Flags';

class Background extends Component {
  static propTypes = {
    alertWithType: PropTypes.func,
    id: PropTypes.object,
    flags: PropTypes.array,
    restrictions: PropTypes.array,
  };

  componentDidMount() {
    if (this.props.flags.length === 0 && this.props.restrictions.length === 0) {
      this.props.alertWithType('success', 'Clear!!!', 'This citizen is clear');
    } else {
      this.props.alertWithType('error', 'Records of Concern!!!', 'This citizen has some restrictions or flags set up against them');
    }
  };

  changeText() {
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle='light-content' />
          <Id id={this.props.id}/>
          <Restrictions restrictions={this.props.restrictions} />
          <Flags flags={this.props.flags} />
      </Container>
    )
  }
};

const mapStateToProps = state => {
  const id = state.myState.background.id;
  const restrictions = state.myState.background.restrictions;
  const flags = state.myState.background.flags;
  const query = state.myState.query;

  return {
    id,
    restrictions,
    flags,
    query,
  };
};

export default connect(mapStateToProps)(connectAlert(Background));

