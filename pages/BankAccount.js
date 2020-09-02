import React, { useState } from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native'

export default function BankAccount(){

    const [bank, setBank] = useState(0);

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