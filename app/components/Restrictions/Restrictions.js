import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StatusBar, Text, Image, ScrollView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet'
import styles from './styles'

function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.restrictions.length; i++) {
    items.push(props.children(i));
  }

  return <View>{items}</View>;
};

function ListOfRestrictions(theRestrictions) {
  return (
    <Repeat restrictions={theRestrictions}>
      {(index) => <Text style={styles.item} key={index}>
        <Text>{theRestrictions[index].description}</Text>
      </Text>}
    </Repeat>
  );
};


class Restrictions extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      restrictions: [],
    };
  }

  render() {
    const anyRestrictions = this.props.restrictions.length === 0 ? false : true;


    if (!anyRestrictions) {
      return(
        <View style={styles.container}>
          <Text style={styles.heading}>RESTRICTIONS</Text>
          <View style={styles.items}>
            <Text style={styles.clearHeading}>NO RESTRICTIONS</Text>         
          </View>
        </View>
      )
    } else {
      return(
        <View style={styles.container}>
          <Text style={styles.heading}>RESTRICTIONS</Text>
          <View style={styles.items}>
            <ScrollView>
              {ListOfRestrictions(this.props.restrictions)}
            </ScrollView>      
          </View>
        </View>
      )
    }
  }
}

export default Restrictions;
