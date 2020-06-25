import React from 'react';

import { Image, View } from 'react-native'
import { Logo } from './styles'

export default function Header() {
  return (
    <View style={Logo.container}>
      <Image source={require('../../../assets/tipografia_timbre.png') }/>
    </View>
  )
}