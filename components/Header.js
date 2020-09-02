import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import {Header} from 'react-native-elements';

export default function MyHeader({title}){

    return (
        <Header
            centerComponent={{ text: title, style: { color: '#fff' } }}
            rightComponent={{ icon: 'account-circle', color: '#fff' }}
        />
    )
}

const styles = StyleSheet.create({
    header : {
        width: '100%',
        backgroundColor: 'white',
        height: 60,
        alignItems: 'center',
        justifyContent:'center',
        borderBottomColor: 'grey',
        borderBottomWidth: 1
      },
    headerText : {
        textAlign: 'center',
        fontWeight: 'bold'
    },
})