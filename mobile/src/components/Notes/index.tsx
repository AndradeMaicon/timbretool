import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from 'react-native';

import { Button, NoteStyle } from './styles';

import { ShowToasts, toastMessage } from '../AndroidToast';
import Accidental from '../Accidental';

const Note: React.FC = () => {
  const [visibleToast, setvisibleToast] = useState(false);
  const [message, setMessage] = useState(String);
  const [tone, setTone] = useState(String);

  useEffect(() => setvisibleToast(false), [visibleToast]);
  useEffect(() => setMessage(String), [message]);
  useEffect(() => setTone(String), [tone]);

  const handleButtonPress = () => {
    setvisibleToast(true);
  };

  const activeButton = (stringTone: string) => {
    handleButtonPress()
    let alert = toastMessage(stringTone)
    setMessage(String(alert?.shift()))
    setTone(stringTone.toUpperCase())
  }

  return(
    <>
      <Text style={NoteStyle.note}>{tone}</Text>

      <Accidental />

      <ShowToasts visible={visibleToast} message={message} />
      
      <View style={Button.container} >
          <TouchableOpacity
            style={Button.button}
            onPress={() => activeButton('E')}>
            <Text style={Button.notes} >E</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={Button.button}
            onPress={() => activeButton('A')}>
            <Text style={Button.notes} >A</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={Button.button}
            onPress={() => activeButton('D')}>
            <Text style={Button.notes} >D</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={Button.button}
            onPress={() => activeButton('G')}>
            <Text style={Button.notes} >G</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={Button.button}
            onPress={() => activeButton('B')}>
            <Text style={Button.notes} >B</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={Button.button}
            onPress={() => activeButton('e')}>
            <Text style={Button.notes} >E</Text>
          </TouchableOpacity>
      </View>
    </>
  )
}

export default Note