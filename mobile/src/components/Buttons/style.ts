import React from 'react';

import { StyleSheet } from 'react-native';

export const Button = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'space-between',
    width: '100%'
  },

  button: {
    flex: 1,
    backgroundColor: '#F1AB86',
    height: 50,
    width: 50,
    borderRadius: 70,
    paddingTop: 10,
    marginRight: 10,
    justifyContent:"center",
    alignItems: "center",

    paddingHorizontal: 25,
  },

  notes : {
    fontFamily: 'RobotoCondensed_400Regular',
    color: '#251605',
    fontSize: 30,
    position: 'absolute',
  }
})