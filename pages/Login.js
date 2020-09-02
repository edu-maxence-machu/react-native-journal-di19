import React, { useState } from 'react';
import {View, Button, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, TextInput} from 'react-native'
import Header from '../components/Header'

export default function Login(props){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function checkPassword(str)
    {
      var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
      return re.test(str);
    }

    function checkEmail(str)
    {
      var re = /[^@ \t\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
      return re.test(str);
    }

    function checkAndLoginIn(){
        if(!checkPassword(password)){
            alert('Veuillez entrer un mot de passe correct')
        } else if(!checkEmail(email)){
            alert('Veuillez entrer une adresse email valide')
        } else {
            if(email === 'contact@entreprise.com' && password === '$Motdepasse2'){
                props.login();
            } else {
                alert('Utilisateur introuvable')
            }
        }
    }

    return(
        <SafeAreaView>
            <Header title={'Login'}/>

            <TextInput
                value={email}
                onChangeText={(str) => setEmail(str)}

                placeholder="Votre adresse email"
                autoCompleteType="email"
                keyboardType="email-address"
                type="email"
            />

            <TextInput
                value={password}
                onChangeText={(str) => setPassword(str)}

                keyboardType="default"
                placeholder="Votre mot de passe"
                autoCompleteType="password"
                secureTextEntry={true}
            />

            <Button
                title="Se connecter"
                disabled={(email === '' || password === '')}
                onPress={checkAndLoginIn}
            />

        </SafeAreaView>
    )
}