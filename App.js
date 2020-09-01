import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, SafeAreaView, ScrollView } from 'react-native';

import Header from './components/Header'

export default function App() {

  const config = {
    title: "Les notes de",
    user: {
      name: "Maxence"
    }
  }

  function direBonjour(){
    alert('Bonjour Maxence');
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <Header 
      handleHeaderPress={direBonjour}
      title={config.title}
      user={config.user}
      /> 

      <ScrollView horizontal={true} style={styles.scrollHorizontal}>
          <Text style={styles.scrollText}>Maison</Text>
          <Text style={styles.scrollText}>Travail</Text>
          <Text style={styles.scrollText}>Amis</Text>
          <Text style={styles.scrollText}>Famille</Text>
      </ScrollView>

      <ScrollView style={styles.noteContainer}>
        <View style={styles.note}>
              <View style={styles.dragDrop}>

              </View>

              <View style={styles.noteTextContainer}>
                <Text style={styles.noteTitle}>Ma note</Text>
                <Text style={styles.noteDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
              </View>
          </View>
        <View style={styles.note}>
              <View style={styles.dragDrop}>

              </View>

              <View style={styles.noteTextContainer}>
                <Text style={styles.noteTitle}>Ma note</Text>
                <Text style={styles.noteDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
              </View>
          </View>
        <View style={styles.note}>
              <View style={styles.dragDrop}>

              </View>

              <View style={styles.noteTextContainer}>
                <Text style={styles.noteTitle}>Ma note</Text>
                <Text style={styles.noteDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
              </View>
          </View>
        <View style={styles.note}>
              <View style={styles.dragDrop}>

              </View>

              <View style={styles.noteTextContainer}>
                <Text style={styles.noteTitle}>Ma note</Text>
                <Text style={styles.noteDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
              </View>
          </View>
        <View style={styles.note}>
              <View style={styles.dragDrop}>

              </View>

              <View style={styles.noteTextContainer}>
                <Text style={styles.noteTitle}>Ma note</Text>
                <Text style={styles.noteDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
              </View>
          </View>
        <View style={styles.note}>
              <View style={styles.dragDrop}>

              </View>

              <View style={styles.noteTextContainer}>
                <Text style={styles.noteTitle}>Ma note</Text>
                <Text style={styles.noteDesc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
              </View>
          </View>
          
          
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  noteTextContainer : {
    paddingHorizontal: 10
  },
  noteTitle : {
    fontSize: 18,
    fontWeight: 'bold'
  },
  noteDesc: {
      fontWeight: '200',
      marginTop: 5,
      },
  note : {
    flexDirection: 'row',
    marginTop: 20
  },
  dragDrop: {
      width: 40,
      height: '100%',
  },
  noteContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
    //flex: 1,
    width: '100%'
  },
  scrollHorizontal: {
    backgroundColor: 'white',
    //height: 50,
    width: "100%",
    paddingVertical: 5,
    //flexDirection: 'row',
    //alignItems: 'center'
  },
  scrollText : {
      fontWeight: 'bold',
      fontSize: 24,
      marginHorizontal: 20,
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  tinyLogo: {
    width: 300,
    height: 70,
  },
});
