import React from 'react';

import { Text } from 'react-native';

import { NoteStyle } from './style';

export default function Note(){
  return(
    <Text style={NoteStyle.note}>A</Text>
  )
}