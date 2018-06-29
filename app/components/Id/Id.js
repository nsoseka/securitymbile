import React from 'react';
import PropTypes from 'prop-types';
import { View, StatusBar, Text, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet'
import { ImageLoader } from 'react-native-image-fallback';

import styles from './styles'

const ID_CARD1 = {
  name: 'Lukong Isaac Fonyuy Banla',
  date_of_issue: '16-04-2018',
  expiry_date: '17-04-2028',
  id_card_number: '123456789',
  avatar: 'https://pbs.twimg.com/profile_images/940933180076457986/hobMecIg_400x400.jpg',
};

const Id = ({id}) => {
  const ID_CARD = id;

  return(
    <View style={styles.container}>
      <View style={styles.image}>
        <ImageLoader 
          style={styles.passport}
          acessibilityLabel='Passport Photo'
          source={ID_CARD.avatar || 'not available'}
          fallback={[require('./images/holder.png')]} />
      </View>
      <View style={styles.idDetails}>
        <Text style={styles.item}>
          <Text style={styles.detail}>Name: </Text>
          <Text>{ID_CARD.name || 'not provided'}</Text>
        </Text>
        <Text style={styles.item}>
          <Text style={styles.detail}>Date of issue: </Text>
          <Text>{ID_CARD.date_of_issue || 'not provided'}</Text>
        </Text>
        <Text style={styles.item}>
          <Text style={styles.detail}>Expiry Date: </Text>
          <Text>{ID_CARD.expiry_date || 'not provided'}</Text>
        </Text>
        <Text style={styles.item}>
          <Text style={styles.detail}>Id Number: </Text>
          <Text>{ID_CARD.id_card_number || 'not provided'}</Text>
        </Text>
      </View>
    </View>
  )
};

export default Id;
