import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

export default function BankAccount(){

    const [bank, setBank] = useState(0);
    const [history,setHistory] = useState([]);

    /*
        mount et update
    */
    useEffect(() => {
        console.log('Je suis mis à jour');
    })

    /* Mount */
    useEffect(() => {
        console.log('Je suis crée');

        /*
            On va chercher la valeur au chargement = [];
        */
        async function updateBankWithLocal(){
            const value = await AsyncStorage.getItem('bank');
            setBank(parseInt(value))
        }

        updateBankWithLocal();
    }, [])

    useEffect(() => {

        function updateHistory(){
            setHistory([
                ...history, `Je suis à ${bank} €`
            ])
        }

        /*
            On ajout au AsyncStorage quand la valeur bank est modifiée
        */
        if(bank !== null){
            try {
                AsyncStorage.setItem('bank', bank.toString());
            } catch(e){
                console.log(e);
            }
        }

        updateHistory();
    }, [bank])


    function salaire(){
        let _new = bank;
        _new += 1000;
        setBank(_new)
    }

    function loyer(){
        let _new = bank;
        _new -= 600;
        setBank(_new)
    }

    return (
        <View style={{flex: 1}}>
            <View style={styles.amountContainer}>
                <Text style={styles.amount}>{bank} €</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                onPress={salaire}
                style={styles.button}>
                    <Text>Recevoir salaire</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={loyer}
                style={styles.button}>
                    <Text>Payer loyer</Text>
                </TouchableOpacity>
            </View>

            <View>
                {
                    history.map((el) => {
                        return <Text>{el}</Text>
                    })
                }
                
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    amountContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 10
    },
    amount : {
        fontSize: 28,
    },
    buttonContainer : {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    button : {
        backgroundColor: 'grey',
        borderRadius: 5,
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
    }
})