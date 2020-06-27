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

