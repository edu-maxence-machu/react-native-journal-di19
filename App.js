import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, SafeAreaView, ScrollView } from 'react-native';
import MyHeader from './components/Header'
import Journal from './pages/Journal'
import BankAccount from './pages/BankAccount'
import AddForm from './pages/AddForm'
import Login from './pages/Login'
import TutorialImage from './pages/TutorialImage';

export default function App() {

  const [dataJournal, setDataJournal] = useState([])

  const [page, setPage] = useState('Journal');
  const [loggedIn, setLoggedIn] = useState(true);
  
  function navigate(page){
    setPage(page)
  }

  function login(){
    setLoggedIn(true);
  }
  function logout(){
    setLoggedIn(false);
  }

  /*
  Add to state ([dataJournal])
  */
  function addToJournal(title, desc){
  
    setDataJournal([
      ...dataJournal, {
        title: title,
        description: desc,
        done: false
      }
    ])

    navigate('Journal');
  }

  if(!loggedIn){
    return (
      <Login login={login}/>
    )
  }

  return (
    <SafeAreaView style={styles.container}>

      <MyHeader title={page}/>

      { page === 'Journal' && <Journal data={dataJournal} navigate={navigate}/> }

      { page === 'BankAccount' && <BankAccount />}

      { page === 'AddForm' && <AddForm handleAdd={addToJournal}/>}

      { page === 'Tutorial' && <TutorialImage/>}
      
      <View style={styles.topMenu}>
        <Button 
          title="Bank" 
          color={page === "BankAccount" ? "green" : 'grey'}
          onPress={() => navigate('BankAccount')}
          />

        <Button 
          title="Journal" 
          color={page === "Journal" ? 'green' : 'grey'}
          onPress={() => navigate('Journal')}
          />

        <Button 
          title="Image" 
          color={page === "Tutorial" ? 'green' : 'grey'}
          onPress={() => navigate('Tutorial')}
          />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topMenu: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
