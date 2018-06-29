import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StatusBar, Text, Image, ScrollView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet'
import styles from './styles'

function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.flags.length; i++) {
    items.push(props.children(i));
  }

  return <View>{items}</View>;
};

function ListOfFlags(theFlags) {
  return (
    <Repeat flags={theFlags}>
      {(index) => <Text style={styles.item} key={index}>
        <Text>{theFlags[index].reason}</Text>
      </Text>}
    </Repeat>
  );
};


class Flags extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
    };
  };

  render() {
    const anyFlags = this.props.flags.length === 0 ? false : true;

    if (!anyFlags) {
      return(
        <View style={styles.container}>
          <Text style={styles.heading}>FLAGS</Text>
          <View style={styles.items}>
            <Text style={styles.clearHeading}>NO FLAGS</Text>         
          </View>
        </View>
      )
    } else {
      return(
        <View style={styles.container}>
          <Text style={styles.heading}>FLAGS</Text>
          <View style={styles.items}>
            <ScrollView>
              {ListOfFlags(this.props.flags)}
            </ScrollView>      
          </View>
        </View>
      )
    }
  }
}

export default Flags;
