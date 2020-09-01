import React from 'react'
import {View, Text, ScrollView, StyleSheet} from 'react-native'
import PreviewJournal from '../components/PreviewJournal'
import CreateButton from '../components/CreateButton'

export default function Journal(props){

    console.log(props);
    return (
        <View>
            <CreateButton/>

            <View style={{height: 40}}>
                <ScrollView horizontal={true} style={styles.scrollHorizontal}>
                    <Text style={styles.scrollText}>Maison</Text>
                    <Text style={styles.scrollText}>Travail</Text>
                    <Text style={styles.scrollText}>Amis</Text>
                    <Text style={styles.scrollText}>Famille</Text>
                </ScrollView>
            </View>
            

            <View style={{flex: 1}}>
                <ScrollView>
                    {
                        props.notes.map(
                            (el) => {
                                return <PreviewJournal note={el}/>
                            }
                        )
                    }
                </ScrollView>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    noteContainer: {
      
    },
    scrollHorizontal: {
      backgroundColor: 'white',
      width: "100%",
      paddingVertical: 5,
    },
    scrollText : {
        fontWeight: 'bold',
        fontSize: 24,
        marginHorizontal: 20,
    },
  });
  