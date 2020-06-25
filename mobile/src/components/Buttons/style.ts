import React from 'react';

import { StyleSheet } from 'react-native';

export const Button = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // position: 'relative',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 8,
  },

  button: {
    flex: 1,
    backgroundColor: '#F1AB86',
    height: 50,
    width: 50,
    borderRadius: 100,
    paddingTop: 10,
    marginRight: 10,
    justifyContent:"center",
    alignItems: "center",

  },

  notes : {
    fontFamily: 'RobotoCondensed_400Regular',
    color: '#251605',
    fontSize: 25,
    position: 'absolute',
  }
})