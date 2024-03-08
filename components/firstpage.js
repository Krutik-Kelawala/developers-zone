import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, } from 'react-native';


export const FirstPage = (props) => {
  return (

    <View style={styles.container}>

      <StatusBar backgroundColor="#b3e6ff" barStyle="default" hidden={true} translucent={true} />

      {/* All screen navigation ontap here */}

      <Text style={styles.headingStyle}>All Screens Navigation</Text>

      <View style={styles.buttonstyle}>
        <Button title="Go to Second Page" onPress={() => props.navigation.navigate('Second Screen')}></Button>
      </View>

      <View style={styles.buttonstyle}>
        <Button title="Go to API Page" onPress={() => props.navigation.navigate('API Screen')}></Button>
      </View>

      <View style={styles.buttonstyle}>
        <Button title="Go to Form Page" onPress={() => props.navigation.navigate('Form Screen')}></Button>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    // paddingHorizontal: 20,
  },
  buttonstyle: {
    paddingHorizontal: 20,
    paddingVertical:5
  },
  headingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 15,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
