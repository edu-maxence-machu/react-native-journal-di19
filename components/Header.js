import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

export default function Header(){

    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Hello</Text>
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