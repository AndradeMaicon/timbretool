import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, } from 'react-native';

export default function Tuner() {
  return (
    <View style={styles.bg}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/tipografia_timbre.png') }/>
      </View>

      <View style={styles.container}>
        <Text style={styles.note}>A</Text>
      </View>

      <View>
        <View style={styles.accidentsContainer}>
          <View style={styles.accidentsSubContainer}>
            <Text style={styles.accidents}>b</Text>
            <View style={styles.accidentsDote}/>
          </View>
          <View style={styles.accidentsSubContainer}>
            <View style={styles.accidentsDote}/>
            <Text style={styles.accidents}>#</Text>
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.notesContainer}>

          <TouchableOpacity style={styles.noteReference} onPress={() => {}}>
            <Text style={styles.noteReferenceText}>E</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.noteReference} onPress={() => {}}>
            <Text style={styles.noteReferenceText}>A</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.noteReference} onPress={() => {}}>
            <Text style={styles.noteReferenceText}>D</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.noteReference} onPress={() => {}}>
            <Text style={styles.noteReferenceText}>G</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.noteReference} onPress={() => {}}>
            <Text style={styles.noteReferenceText}>B</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.noteReference} onPress={() => {}}>
            <Text style={styles.noteReferenceText}>E</Text>
          </TouchableOpacity>

        </View>             
      </View>
    </ View>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#251605',
    flex: 1,
    flexDirection: 'column',
  },

  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    marginTop:30
  },

  accidentsContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
    paddingHorizontal: 30,
    paddingTop: 10,
    marginRight: 8,
  },

  accidentsSubContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',

  },

  accidents: {
    color: '#F1AB86',
    fontSize: 18,
  },

  accidentsDote:{
    height: 10,
    width: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginBottom: 4,
  },

  note: {
    color: '#F1AB86',
    fontSize: 200,
    fontFamily: 'OdibeeSans_400Regular',
    marginBottom: 50,
    marginTop: 100,
  },

  notesContainer: {
    flex: 1,
    flexDirection: 'row',
  },

  noteReference: {
    backgroundColor: '#F1AB86',
    height: 45,
    width: 45,
    borderRadius: 35,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'space-between',

    textAlign: 'center',
  },

  noteReferenceText: {
    color: '#251605',
    fontSize: 30,
    fontFamily: 'OdibeeSans_400Regular',
    textAlign: 'center',
    position: 'absolute',
    paddingVertical: 6
  }

  
});
