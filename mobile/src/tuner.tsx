import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Tuner() {
  return (
    <View style={styles.container}>
      <Text style={styles.note}>A</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#251605',
    alignItems: 'center',
    justifyContent: 'center',
  },

  note: {
    color: '#F1AB86',
    fontSize: 200,
    fontFamily: 'OdibeeSans_400Regular'
  }
  
});
