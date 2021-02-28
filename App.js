import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Linking, TouchableOpacity, ScrollView, Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import cake from './assets/cake.jpg'; 
import CakeScreen from './CakeScreen';

function HomeScreen({ navigation }) {

  function buttonPressed() {
    Linking.openURL('https://www.pinterest.com/bakerbynature/cake/');
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titleText}>Cake Flavors</Text>
      <Text style={styles.paragraph}>There's tons of tasty cake flavors out there :) My favorites are Matcha, Oreo, and Chocolate!
      But please, no peanut butter!</Text>
      <Image source={cake} style={{ width: 400, height: 300 }} />

      <TouchableOpacity
        onPress={buttonPressed}
        style={styles.buttonStyle}
      >
        <Text style={styles.buttonText}>Cake Pinterest Board</Text>
      </TouchableOpacity>

      <Button
        title="Want to see some cakes?"
        onPress={() => navigation.navigate('Cake')}
      />

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold"
  },
  paragraph: {
    fontSize: 20,
    color: '#FF9A9A',
    fontFamily: 'Noteworthy',
    textAlign: 'center',
    margin: 25
  },
  buttonStyle: {
    backgroundColor: '#C4A2FF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'Noteworthy',
    textAlign: 'center',
    fontWeight: 'bold',
  }
});

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cake" component={CakeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}