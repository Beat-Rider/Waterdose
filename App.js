import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>So,I will help you drinking enough water every day...</Text>
      <StatusBar style="auto" />

      <View style={styles.buttonContainer}>
        <View style={{marginRight: '50px'}}>
        <Button title="Sign up" />
        </View>
        <Button title="Sign in" />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0FC0FC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    },
  buttonContainer: {
    marginTop: '24px',
    display:'flex',
    flexDirection: "row",
    
  }


});

