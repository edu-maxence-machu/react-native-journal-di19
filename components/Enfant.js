import React, { useState } from 'react';
import { StyleSheet,TouchableOpacity, Text, View, Image, Button, SafeAreaView, ScrollView } from 'react-native';


export default function Enfant(props){

    function direPrenom(){
        props.parler(props.prenom)
    }

    return (
        <View style={{marginTop: 10}}>
            <Text>Je suis l'enfant {props.prenom}</Text>

            <TouchableOpacity onPress={direPrenom}>
                <Text>Donner son prénom</Text>
            </TouchableOpacity>
        </View>
    )
}