import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput,Image, TouchableOpacity } from 'react-native';

export default function Generator() {

    //const [number, setNumber] = useState(10);
    const [ keyword, onChangeKeyword] = useState('Bonsoir');
    const [uri, setUri] = useState('https://loremflickr.com/320/240/dog')

    function generate(){
        /*let _number = number + 1;
        setNumber(_number)*/

        let _uri = 'https://loremflickr.com/320/240/' + keyword;
        setUri(_uri);
    }

    return (
        <View style={styles.container}>
            <Text>Votre mot clé</Text>

            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeKeyword(text)}
                value={keyword}
            />

            <TouchableOpacity onPress={generate}>
                <View style={styles.button}>
                    <Text>Charger l'image</Text>
                </View>
            </TouchableOpacity>


            <Image
                style={styles.image}
                source={{uri: uri}}
            />
        </View> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    button : {
        backgroundColor: 'grey',
        //height: 30,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image : {
        marginTop: 30,
        width: 320,
        height: 240
    }
})