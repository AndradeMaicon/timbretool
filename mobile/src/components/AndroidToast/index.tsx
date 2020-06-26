import React, { useState, useEffect } from "react";

import { ToastAndroid  } from 'react-native';

interface toastProps {
  visible: boolean,
  message: string,
}

export const ShowToasts: React.FC <toastProps> = ({ visible, message }) => {
  
  if(visible) {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
    );
    return null
  }
  return null
}

export const toastMessage = (stringTone: string) => {
  const guitarStrings = [
    ['Cora 1: Mi', 'e'],
    ['Cora 2: Si', 'B'],
    ['Cora 3: Sol', 'G'],
    ['Cora 4: Re', 'D'],
    ['Cora 5: La', 'A'],
    ['Cora 6: Mi', 'E'],
  ]


  const messages = guitarStrings.find(message => message[1] === stringTone)

 
  return messages
}