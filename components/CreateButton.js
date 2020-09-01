import React from 'react'
import {View, Text, ScrollView, StyleSheet, TouchableOpacity} from 'react-native'
import PreviewJournal from '../components/PreviewJournal'

export default function CreateButton(){

    return (
        <TouchableOpacity>
            <View style={styles.buttonView}>
                <Text>Ecrire une note</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonView : {
        height: 60,
        width: "100%",
        width: '100%',
        backgroundColor: "#8B00FF",
        justifyContent: 'center',
        alignItems: 'center'
    }
})