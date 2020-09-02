import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native'
import {Input, Button} from 'react-native-elements'


// [1] : Importer Firebase
import  firebase from '../utils/firebase'
// [2] : créer la variable db depuis firebase
let db = firebase.firestore();

export default function ListeCourses(){

    const [element, setElement] = useState('');

    const [liste, setListe] = useState([]);

    /*  [3] : Récupérer la liste de courses depuis Firebase*/

    useEffect(() => {
        db.collection("courses").onSnapshot(function(querySnapshot) {
            // Crée une variable temporaire
            let _tmpList = [];
            
            querySnapshot.forEach(function(doc) {
                // On ajoute chaque élément à la list
                _tmpList.push(doc.data());
            });
    
            //On met à jour la liste
            setListe(_tmpList);
        })
    }, [])

    function send(){
        // [2] : envoyer les données sur Firebase
        db.collection("courses").doc().set({
            name: element,
            quantity: 2,
        })
        .then(function() {
            setElement('');
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            alert('Erreur')
            console.error("Error writing document: ", error);
        });
    }

    return (
        <View style={{flex: 1, width: '100%'}}>
            
            <Input
                value={element}
                onChangeText={(str) => setElement(str)}
                placeholder="Votre élément"
            />

            <Button
                title="Ajouter"
                onPress={send}
            />

            {
                liste.map((el) => {return <Text>{el.name}</Text>})
            }
        </View>
    )
}