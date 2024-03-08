import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, View, TouchableWithoutFeedback, Keyboard, } from 'react-native';
import { FirstPage } from './components/firstpage';
import { SecondScreen } from './components/secondscreen';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import { TabScreen } from './components/apiscreen';
import { FormScreen } from './components/senddatatoapi';


const App = () => {

  // For navigation use
  const stack = createNativeStackNavigator();

  return (

    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} accessible={false}>

      <View style={styles.container}>

        <StatusBar barStyle="default" hidden={false} translucent={true} />

        <ScrollView showsVerticalScrollIndicator={true} persistentScrollbar={true} contentContainerStyle={{ flexGrow: 1 }}>

          {/* Initilize all screen here */}

          <NavigationContainer>
            <stack.Navigator>
              <stack.Screen name='First Screen' component={FirstPage}></stack.Screen>
              <stack.Screen name='Second Screen' component={SecondScreen}></stack.Screen>
              <stack.Screen name='API Screen' component={TabScreen}></stack.Screen>
              <stack.Screen name='Form Screen' component={FormScreen}></stack.Screen>
            </stack.Navigator>
          </NavigationContainer>


        </ScrollView>

      </View >

    </TouchableWithoutFeedback >

  );
}


export default App;


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
    paddingVertical: 5
  },
  headingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 15,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

// const FirstPage = (props) => {
//   return (

//     <View style={styles.container}>
//       <Text style={styles.headingStyle}>All Screen Navigation</Text>
//       <View style={styles.buttonstyle}>
//         <Button title="Go to Second Page" onPress={() => props.navigation.navigate('Second Screen')}></Button>
//       </View>
//     </View>
//   );
// };


//  Below all code is used for navigation

// const stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <stack.Navigator>
//         <stack.Screen name='Login' component={LoginScreen}></stack.Screen>
//         <stack.Screen name='Home' component={HomeScreen}></stack.Screen>
//       </stack.Navigator>
//     </NavigationContainer>
//   );
// };

// const LoginScreen = (props) => {
//   return (
//     <View style={{ justifyContent: 'center' }}>
//       <Text style={{ fontSize: 20, justifyContent: 'center' }}>This is Login Screen.</Text>
//  <Button title="Go to Home Page" onPress={() => props.navigation.navigate('Home')}></Button>
//     </View>
//   );
// }

// const HomeScreen = () => {
//   return (
//     <View style={{ justifyContent: 'center' }}>
//       <Text style={{ fontSize: 20, justifyContent: 'center' }}>This is Home Screen.</Text>
//  <Button title="Go to Home Page" onPress={() => props.navigation.navigate('Home')}></Button>
//     </View>
//   );
// }

// export default App;