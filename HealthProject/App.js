import React, { useState, createContext, useContext } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Create a context to share state across components
const ProfileContext = createContext();

const Profile = () => {
    const [currentValue, setCurrentValue] = useContext(ProfileContext);
    const [draftValue, setDraftValue] = useState(currentValue);
  
    const handleSaveProfile = () => setCurrentValue(draftValue);
  
    return (
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <Text style={{ textAlign: 'left', marginHorizontal: 20 }}>currentValue = {JSON.stringify(currentValue)}</Text>
  
        <View style={{ marginHorizontal: 70 }}>
          <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>Name:</Text>
            <TextInput 
              style={{height: 30, backgroundColor: '#9CF094', flex: 0.5, marginLeft: 10}}
              onChangeText={text => setDraftValue({...draftValue, name: text})}
              value={draftValue.name}
            />
          </View>
  
          <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>Age:</Text>
            <TextInput 
              style={{height: 30, backgroundColor: '#B7D6E5', flex: 0.5, marginLeft: 10}}
              onChangeText={text => setDraftValue({...draftValue, age: text})}
              value={draftValue.age}
            />
          </View>
  
          <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>Weight:</Text>
            <TextInput 
              style={{height: 30, backgroundColor: '#F7C2CA', flex: 0.5, marginLeft: 10}}
              onChangeText={text => setDraftValue({...draftValue, weight: text})}
              value={draftValue.weight}
            />
          </View>
  
          <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>Height:</Text>
            <TextInput 
              style={{height: 30, backgroundColor: '#6EFBFE', flex: 0.5, marginLeft: 10}}
              onChangeText={text => setDraftValue({...draftValue, height: text})}
              value={draftValue.height}
            />
          </View>
        </View>
  
        <View style={{ marginBottom: 0 }}>
          <Button title="SAVE PROFILE" onPress={handleSaveProfile} />
        </View>
      </View>
    );
  };
  
  
  

const BMI = () => {
    const [currentValue] = useContext(ProfileContext);
    const bmi = (parseFloat(currentValue.weight) / Math.pow(parseFloat(currentValue.height), 2) * 703).toFixed(4);
  
    return (
      <View>
        <Text>BMI Calculator</Text>
        <Text>height: {currentValue.height || "Please enter your height in the profile page."}</Text>
        <Text>weight: {currentValue.weight || "Please enter your weight in the profile page."}</Text>
        <Text>bmi: {isNaN(bmi) ? "Please enter your weight and height in the profile page." : bmi}</Text>
      </View>
    );
  };
  

const Age = () => {
    const [currentValue] = useContext(ProfileContext);
    const weeks = (parseFloat(currentValue.age) * 52.143).toFixed(2);
    const days = (parseFloat(currentValue.age) * 365.25).toFixed(2);
  
    return (
      <View>
        <Text>Age Calculator</Text>
        <Text>age in years: {currentValue.age || "Please enter your age in the profile page."}</Text>
        <Text>age in weeks: {isNaN(weeks) ? "Please enter your age in the profile page." : weeks}</Text>
        <Text>age in days: {isNaN(days) ? "Please enter your age in the profile page." : days}</Text>
      </View>
    );
  };

const Tab = createBottomTabNavigator();

export default function App() {
    const profileState = useState({
      name: '',
      age: '',
      weight: '',
      height: '',
    });
  
    return (
      <ProfileContext.Provider value={profileState}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Age" component={Age} />
            <Tab.Screen name="BMI" component={BMI} />
          </Tab.Navigator>
        </NavigationContainer>
      </ProfileContext.Provider>
    );
  }
  