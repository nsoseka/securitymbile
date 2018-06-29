import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';


import { AlertProvider } from './components/Alert';
import store from './config/store';
import Navigator from './config/routes';

EStyleSheet.build({
  $primaryBlue: '#052A3A',
  $primaryOrange: '#ff9933',
  $primaryGreen: '#009933',
  $primaryPurple: '#660066',
  $white: '#FFFFFF',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $lightGray: '#F0F0F0',
  $darkText: '#343434',
  $black: '#000000',
  $red: '#cc0000',
  $yellow: '#e6b800',
  $brown: '#800000',
  $dark: '#1a0000',
  $lightBlack: '#151a21',
  $lightBlue: '#3ad',
  $faintBlack: '#242424',
  $faintBlue: '#3b99fc',
});

export default () => {
  return (
    <Provider store={store}>
      <AlertProvider>
        <Navigator onNavigationStateChange={null}/>
      </AlertProvider>
    </Provider>  
  )
};



  


