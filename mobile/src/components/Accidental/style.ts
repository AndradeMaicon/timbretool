import React from 'react';

import { StyleSheet } from 'react-native';

export const Accidental = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
    paddingHorizontal: 30,
    paddingTop: 10,
    marginRight: 8,
    width: '100%'
  },

  SubContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  Accidents: {
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 24,

    color: '#F1AB86'
  },

  AccidentsDote: {
    height: 10,
    width: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginBottom: 4,
  }
})