import React, { useState, useEffect } from 'react';
import {View, Button, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, TextInput} from 'react-native'
import Header from '../components/Header'

export default function MesComptes(props){

    /*
        +1000🤩
        +500😁 
        +200 😂
        +0 🥳
        -0 🤯
    */
    const [montant, setMontant] = useState(0);
    const [emoji, setEmoji] = useState('🥳');


    useEffect(() => {
        if(emoji === '🤩'){
            setMontant(0)
        }
    }, [emoji])

    useEffect(() => {
        if(montant > 1000){
            setEmoji('🤩')
        }
         
        if(montant > 500 && montant < 1000){
            setEmoji('😁')
        }

        if(montant > 200 && montant < 500){
            setEmoji('😂')
        }

        if(montant > 0 && montant < 200){
            setEmoji('🥳')
        }
        if(montant <= 0 ){
            setEmoji('🤯')
        }
    }, [montant]);


    function payer(nMontant){
        let _montant = montant;
        _montant += nMontant;

        setMontant(_montant)
    }

    return(
        <SafeAreaView style={style.container}>

        <Text style={{textAlign: 'center', fontSize: 50}}>{emoji}</Text>
        <Text style={{textAlign: 'center', fontSize: 50}}>{montant}</Text>
                
            <Button
                style={style.button}
                title="Loyer"
                onPress={() => payer(-300)}
            />

            <Button
                style={style.button}
                title="Miam"
                onPress={() => payer(-150)}
            />
            <Button
                style={style.button}
                title="Let's Party"
                onPress={() => payer(-100)}
            />
            <Button
                style={style.button}
                title="Help"
                onPress={() => payer(+40)}
            />
            <Button
                style={style.button}
                title="Salaire"
                onPress={() => payer(700)}
            />

        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    error : {
        borderColor: 'red'
    },
    container: {
        alignItems: 'stretch',
        paddingHorizontal: 5,
        paddingVertical: 15
    },
    textInput : {
        width: '100%',
        flex: 1,
        borderWidth: 1,
        borderColor: 'grey',
        marginTop: 10,
        paddingLeft: 5
    }
})