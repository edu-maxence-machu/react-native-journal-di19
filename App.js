import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, SafeAreaView, ScrollView } from 'react-native';

import Header from './components/Header'
import Journal from './pages/Journal';

export default function App() {

  const config = {
    title: "Les notes de",
    user: {
      name: "Maxence"
    }
  }


  let mesNotes = [
    {
      title: 'Résumé de ma rentrée',
      description: "Ca s'est super bien passé et Benoit est très gentil"
    },
    {
      title: 'Résumé de ma soirée de jeudi soir',
      description: "ERROR 500"
    }
  ]

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

      <Journal notes={mesNotes}/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
