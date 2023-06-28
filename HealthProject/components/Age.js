import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import {useValue} from './ContextDemos/ValueContext';

const Age = () => {
    const {currentValue} = useValue();

    return (
        <View>
            <Text>Age Calculator</Text>
            <Text>Age in years: {currentValue.age}</Text>
            <Text>Age in weeks: {currentValue.age*52}</Text>
            <Text>Age in days: {currentValue.age*365.25}</Text>
        </View>
    )
};

export default Age;
