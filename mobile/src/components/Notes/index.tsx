import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from 'react-native';

import { Button, NoteStyle } from './styles';

import { ShowToasts } from '../AndroidToast';
import Accidental from '../Accidental';

import { loadButton } from '../../services/loadButtons';

const listButtons = loadButton()

const Note: React.FC = () => {
  const [selectedString, setSelectedString] = useState<number>(6)
  const [visibleToast, setvisibleToast] = useState(false);
  const [message, setMessage] = useState(String);
  const [tone, setTone] = useState('E');

  useEffect(() => setvisibleToast(false), [visibleToast]);
  useEffect(() => setMessage(String), [message]);
  useEffect(() => setTone(String), [tone]);


  const handleButtonPress = () => {
    setvisibleToast(true);
  };

  const handleSelectString = (id: number) => {
    const alreadySelected = listButtons.find(item => item.id === id);

    const alreadySelectedId = alreadySelected?.id
    const alreadyTone = alreadySelected?.name
    const alreadyMessage = alreadySelected?.messageToast

    if (alreadySelectedId !== selectedString){
      setSelectedString(Number(alreadySelectedId))
      setTone(String(alreadyTone?.toUpperCase()))
      setMessage(String(alreadyMessage))
    }
  }

  return(
    <>
      <Text style={NoteStyle.note}>{tone}</Text>

      <Accidental />

      <ShowToasts visible={visibleToast} message={message} />
      
      <View style={Button.container} >
          {listButtons.map(item => (
            <TouchableOpacity
              key={item.id}
              style={[
                Button.button,
                selectedString === item.id ? Button.selectedbt : {}
              ]}
              onPress={() => {
                handleButtonPress()
                handleSelectString(item.id)}}>
            <Text
              style={[
                Button.notes,
                selectedString === item.id ? Button.selectednt : {}
              ]} >
                {item.name.toUpperCase()}
            </Text>

            </TouchableOpacity>
          ))}       
      </View>
    </>
  )
}

export default Note