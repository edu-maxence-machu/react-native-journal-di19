import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, SafeAreaView, ScrollView } from 'react-native';
import Enfant from '../components/Enfant'

export default function GestionPage(){

    const [page, setPage] = useState('MonCompte');

    const [prenomSelec, setPrenomSelect] = useState('Alfred');

    function selectUser(prenom){
        setPrenomSelect(prenom);
    }

    return (
        <ScrollView style={{flex: 1}}>

            <Text>{prenomSelec}</Text>

            <Enfant prenom="Alfred" parler={selectUser}/>

            <Enfant prenom="Maxence" parler={selectUser}/>

            <Enfant prenom="Simon" parler={selectUser}/>







            {/*
                page === 'MonCompte' && (
                    <View style={
                        {height: 100,
                        backgroundColor: 'orange',
                        alignItems: 'center', 
                        justifyContent: 'center'}}>
                        <Text>MON COMPTE</Text>
                    </View>
                )*/
            }

            {/*
                page === 'Login' && (
                    <View style={
                        {height: 100,
                        backgroundColor: 'blue',
                        alignItems: 'center', 
                        justifyContent: 'center'}}>
                        <Text>LOGIN</Text>
                    </View>
                )*/
            }


            {/*
                page === 'Register' && (
                    <View style={
                        {height: 100,
                        backgroundColor: 'green',
                        alignItems: 'center', 
                        justifyContent: 'center'}}>
                        <Text>REGISTER</Text>
                    </View>
                )*/
            }

        </ScrollView>
    )
}