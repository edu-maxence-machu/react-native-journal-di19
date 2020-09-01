import React, { useState } from 'react';
import {View, Button, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, TextInput} from 'react-native'
import Header from '../components/Header'

export default function Login(props){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [hasEmailError, setEmailError] = useState(true);

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

    function checkAndSetEmail(str){
        setEmail(str);

        /*
        if(checkEmail(str)){
            setEmailError(false)
        }else {
            setEmailError(true)
        }*/

        setEmailError(!checkEmail(str))
    }

    function checkAndLogIn(){
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
        <SafeAreaView style={style.container}>
            <View style={{width: '100%', height: 50}}>
                <TextInput
                    style={[style.textInput, (hasEmailError && email !== '') && style.error]}
                    value={email}
                    onChangeText={(str) => checkAndSetEmail(str)}

                    placeholder="Votre adresse email"
                    autoCompleteType="email"
                    keyboardType="email-address"
                    type="email"
                />
            </View>

            <View style={{width: '100%', height: 50}}>
                <TextInput
                    style={style.textInput}
                    value={password}
                    onChangeText={(str) => setPassword(str)}
                    
                    keyboardType="default"
                    placeholder="Votre mot de passe"
                    autoCompleteType="password"
                    secureTextEntry={true}
                />
            </View>

            <Button
                style={style.button}
                title="Se connecter"
                disabled={(email === '' || password === '')}
                onPress={checkAndLogIn}
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