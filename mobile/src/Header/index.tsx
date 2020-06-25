import React from 'react';

import { Image } from 'react-native'
import { Logo } from './styles'

export default function Header() {
  return (
    <Image style={Logo.logo} source={require('../../assets/tipografia_timbre.png') }/>
  )
}