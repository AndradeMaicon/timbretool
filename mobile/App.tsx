import React from 'react';
import { StatusBar } from 'react-native';
import { AppLoading } from 'expo'
import { OdibeeSans_400Regular } from '@expo-google-fonts/odibee-sans';
import { PressStart2P_400Regular, useFonts } from '@expo-google-fonts/press-start-2p';

import Tuner from './src/tuner';

export default function App() {
  const [fontsLoader] = useFonts({
    PressStart2P_400Regular,
    OdibeeSans_400Regular,
  })
  
  if (!fontsLoader) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar translucent backgroundColor='#251605' />
      <Tuner />
    </>
  );
}

