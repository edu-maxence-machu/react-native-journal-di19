import React from 'react';
import { StyleSheet, Text, View, Image, Button, SafeAreaView, ScrollView } from 'react-native';
import Header from './components/Header'
import Journal from './pages/Journal'
import Generator from './pages/Generator';
import Login from './pages/Login';

export default function App() {

  const dataJournal = [
    {
      title: 'Faire les courses',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      done: true
    },
    {
      title: 'Sortir les poubelles',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      done: false
    },
    {
      title: 'Donner à manger au chien',
      description: "Consectetur adipiscing elit",
      done: true
    }
  ]

  return (
    <SafeAreaView style={styles.container}>

      <Header title="Journal"/>

      {/*<Journal data={dataJournal}/>*/}
      
      {/*<Generator/>*/}


      <Login/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
