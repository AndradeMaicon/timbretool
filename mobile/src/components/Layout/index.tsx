import React from 'react';

import { View } from 'react-native';
import { BaseLayout } from './styles';

import Header from '../Header';
import Note from '../Notes';



export default function Layout(){
  return (
    <View style={BaseLayout.layout}>
      <Header />
      <Note />
    </View>
  )
}