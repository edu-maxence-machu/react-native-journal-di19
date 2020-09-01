import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function TitleJournal(props){
    return (
        <Text style={styles.noteTitle}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({

    noteTitle : {
        fontSize: 18,
        fontWeight: 'bold'
      },
})