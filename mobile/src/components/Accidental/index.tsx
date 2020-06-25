import React from 'react';

import { Text, View } from 'react-native';

import { Accidental } from './style';

export default function Accidents(){
  return(
    <>
      <View style={Accidental.Container} >
        <View style={Accidental.SubContainer}>
          <Text style={Accidental.Accidents}>b</Text>
          <View style={Accidental.AccidentsDote} />
        </View>

        <View style={Accidental.SubContainer}>
          <View style={Accidental.AccidentsDote}/>
          <Text style={Accidental.Accidents}>#</Text>
          {/* <Hashtag name="Hashtag" size={24} color='#F1AB86' /> */}
        </View>
      </View>
    </>
  )
}