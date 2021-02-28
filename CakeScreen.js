import React, { useState } from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';

export default function CakeScreen() {

  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.question}>What's your favorite flavor of cake?</Text>

      <TextInput
        style={styles.textInput}
        placeholder="Strawberry Cheesecake"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />

      <Text style={styles.textOutput}>
        {text.split(' ').map((word) => word && '🍰').join(' ')}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    question: {
      fontSize: 25,
      fontWeight: "bold",
      color: '#FF9A9A',
      fontFamily: 'Noteworthy',
      textAlign: 'center'
    },
    textInput: {
      marginVertical: 15,
      height: 25,
      fontSize: 21,
    },
    textOutput: {
      padding: 10, 
      fontSize: 42,
    },
});