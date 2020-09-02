import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, SafeAreaView, ScrollView } from 'react-native';
import Header from './components/Header'
import Journal from './pages/Journal'
import Generator from './pages/Generator';
import Login from './pages/Login';
import MesComptes from './pages/MesComptes';

export default function App() {


  const [navigation, setNavigation] = useState('Journal')

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

      <Header title={navigation}/>

      {navigation === 'Journal' && <Journal data={dataJournal}/>}
      
      {/*<Generator/>*/}

      {
        navigation === 'Login' && <Login login={() => setNavigation('Journal')}/>
      }

      {/*<MesComptes/>*/}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
