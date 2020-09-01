import React from 'react'
import {View, Text, ScrollView, StyleSheet} from 'react-native'
import TextJournal from './Journal/TextJournal'
import TitleJournal from './Journal/TitleJournal';

export default function PreviewJournal(){

    return (
        <View style={styles.note}>
            <View style={styles.dragDrop}>

            </View>

            <View style={styles.noteTextContainer}>
                <TitleJournal>
                    Hello
                </TitleJournal>

                <TextJournal>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </TextJournal>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    noteTextContainer : {
      paddingHorizontal: 10
    },
    noteTitle : {
      fontSize: 18,
      fontWeight: 'bold'
    },
    note : {
      flexDirection: 'row',
      marginTop: 20
    },
    dragDrop: {
        width: 40,
        height: '100%',
    }
  });
  