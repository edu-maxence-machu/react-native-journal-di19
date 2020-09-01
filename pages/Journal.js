import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import PreviewNote from '../components/PreviewNote'

export default function Journal({data}){

    return( 
        <View style={{flex: 1}}>
            <View style={{height: 50}}>
                <ScrollView horizontal={true} style={styles.scrollHorizontal}>
                    <Text style={styles.scrollText}>Maison</Text>
                    <Text style={styles.scrollText}>Travail</Text>
                    <Text style={styles.scrollText}>Amis</Text>
                    <Text style={styles.scrollText}>Famille</Text>
                </ScrollView>
            </View>

            <View style={styles.countContainer}>
                <Text>{data.length} notes dans mon journal</Text>
            </View>

            <ScrollView style={styles.noteContainer}>
                {
                    data.map((el) => {
                        return <PreviewNote dataNote={el}/>
                    })
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    countContainer: {
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    noteTextContainer : {
      paddingHorizontal: 10
    },
    noteTitle : {
      fontSize: 18,
      fontWeight: 'bold'
    },
    noteDesc: {
        fontWeight: '200',
        marginTop: 5,
        },
    note : {
      flexDirection: 'row',
      marginTop: 20
    },
    dragDrop: {
        width: 40,
        height: '100%',
    },
    noteContainer: {
      paddingHorizontal: 20,
      paddingTop: 10,
      //flex: 1,
      width: '100%'
    },
    scrollHorizontal: {
      backgroundColor: 'white',
      //height: 50,
      width: "100%",
      paddingVertical: 10,
  
      borderBottomColor: 'grey',
      borderBottomWidth: 1
      
      //flexDirection: 'row',
      //alignItems: 'center'
    },
    scrollText : {
        fontWeight: 'bold',
        fontSize: 22,
        marginHorizontal: 20,
    },
    container: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
  });
  