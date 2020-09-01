import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function TextJournal(props){

    console.log(props);
    return (
        <Text style={styles.noteDesc}>{props.children}</Text>
    )
}


const styles = StyleSheet.create({
    noteTextContainer : {
      paddingHorizontal: 10
    },
    noteDesc: {
        fontWeight: '200',
        marginTop: 5,
    },
})