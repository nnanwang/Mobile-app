import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import {useValue} from './ContextDemos/ValueContext';


const BMI = () => {
    const {currentValue,setCurrentValue} = useValue();
    const [BMI, setBMI] = useState(0);

    return(
        <View>
            <View>
                <Text>BMI calculator</Text>
                <Text>height = {currentValue.height}</Text>
                <Text>weight = {currentValue.weight}</Text>
                <Text>BMI = {(703*currentValue.weight)/((currentValue.height)*(currentValue.height))}</Text>
            </View>
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
    text:{
      flexDirection:'row',
      fontSize:15,
      justifyContent:'space-between',
      borderColor:'#fff',
      backgroundColor: '#F6F5F5',
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

export default BMI;