import React from 'react';
import { StatusBar } from 'react-native';
import { AppLoading } from 'expo'
import {RobotoCondensed_400Regular, RobotoCondensed_700Bold, useFonts } from '@expo-google-fonts/roboto-condensed';

import Layout from './src/Layout';

export default function App() {
  const [fontsLoader] = useFonts({
    RobotoCondensed_400Regular,
    RobotoCondensed_700Bold,
  })
  
  if (!fontsLoader) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar translucent backgroundColor='#251605' />
      <Layout />
    </>
  );
}

