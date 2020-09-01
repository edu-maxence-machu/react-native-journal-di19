import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export default function Header(props){ // 1: Ajout des props en parametre

    console.log(props); // 2: Test des props

    let fulltitle = props.title + ' ' + props.user.name;

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={props.handleHeaderPress}>
                <Text style={styles.headerText}>{props.title}</Text>
            </TouchableOpacity>
        </View>
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