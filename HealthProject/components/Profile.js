import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import {useValue} from './ContextDemos/ValueContext';

const Profile = () => {
    const {currentValue,setCurrentValue} = useValue();
    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [weight,setWeight] = useState('');
    const [height,setHeight] = useState('');
    const data = JSON.stringify({ name: name, age: age, weight: weight, height: height });

    return(
        <View style={{flex:1}}>
            <View style={styles.text}>
                <Text>currentValue = {JSON.stringify(currentValue)}</Text>
            </View>
            {/* add a border inside each view, or set the background view of each view to be different colors */}

            <View style={{flex:1,padding:20}}>
                <View>
                    <View style={styles.oneRow}>
                        <Text>name</Text>
                        <View style={styles.nameBackground}>
                            <TextInput
                                style={styles.textInput}
                                value={name}
                                onChangeText={setName}
                                placeholder="                      "
                            />
                        </View>
                    </View>
                    <View style={styles.oneRow}>
                        <Text>age</Text>
                        <View style={styles.ageBackground}>
                            <TextInput
                                style={styles.textInput}
                                value={age}
                                onChangeText={setAge}
                                placeholder="                      "
                            />
                        </View>
                    </View>
                    <View style={styles.oneRow}>
                        <Text>weight</Text>
                        <View style={styles.weightBackground}>
                            <TextInput
                                style={styles.textInput}
                                value={weight}
                                onChangeText={setWeight}
                                placeholder="                      "
                            />
                        </View>
                    </View>
                    <View style={styles.oneRow}>
                        <Text>height</Text>
                        <View style={styles.heightBackground}>
                            <TextInput
                                style={styles.textInput}
                                value={height}
                                onChangeText={setHeight}
                                placeholder="                      "
                            />
                        </View>
                    </View>
                </View>
            <View>
            </View>
        </View>
        <Button title="save profile" style={styles.button} onPress = {() => {
            setCurrentValue({
                name:name,
                age:age,
                weight:weight,
                height:height,
            });
                }}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        flexDirection: 'column',
        width: 10,
        backgroundColor:'blue',
    },
    oneRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 35,
        flex:-1,
    },
    oneColumn: {
        marginRight: 10,
    },
    text:{
      fontSize:15,
      borderColor:'#fff',
      flex:-1,
    },
    headerText2: {
      textAlign:'center',
      backgroundColor:'#fff',
      fontSize: 25,
      padding:10,
      fontWeight: 500,
      borderColor:'white',
      backgroundColor: '#fff',
      borderWidth: 1,
      textAlign:'left',
      marginTop:30,
      marginLeft: 10,
      marginRight: 10,
      padding:20,
    },
    nameBackground: {
        backgroundColor: '#B1EC8D',
    },
    ageBackground: {
        backgroundColor: '#B0DFEE',
    },
    weightBackground: {
        backgroundColor: '#F3D9E6',
    },
    heightBackground: {
        backgroundColor: '#15FFFF',
    },
  
  });

export default Profile;