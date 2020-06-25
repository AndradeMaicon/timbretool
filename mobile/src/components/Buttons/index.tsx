import React from 'react';

import { Text, View, TouchableOpacity } from 'react-native';

import { Button } from './style';

export default function Buttons(){
  return(
    <>
      <View style={Button.container} >
          <TouchableOpacity style={Button.button} >
            <Text style={Button.notes} >A</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={Button.button} >
            <Text style={Button.notes} >A</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Button.button} >
            <Text style={Button.notes} >A</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Button.button} >
            <Text style={Button.notes} >A</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Button.button} >
            <Text style={Button.notes} >A</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Button.button} >
            <Text style={Button.notes} >A</Text>
          </TouchableOpacity>
      </View>
    </>
  )
}