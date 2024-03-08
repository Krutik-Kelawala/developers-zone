import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, Keyboard, ActivityIndicator, Modal } from 'react-native';
import Student from './student';

export const SecondScreen = (props) => {

  const [count, setCount] = useState(0);
  const [data, setData] = useState(100);
  useEffect(() => {
    console.warn("Do some Animation " + JSON.stringify({ count }));
  }, [count]);
  useEffect(() => {
    console.warn("Call Api " + JSON.stringify({ data }));
  }, [data]);

  const fruit = (value) => {
    console.warn(value)
  }

  const [name, setName] = useState("");

  const [display, setDisplay] = useState(false);

  const users = [
    {
      id: 1,
      name: "Test"
    },
    {
      id: 2,
      name: "Test 1"
    },
    {
      id: 3,
      name: "Test 2"
    },
    {
      id: 4,
      name: "Test 3"
    },
    {
      id: 5,
      name: "Test 4"
    },
  ];

  // For show loader
  const [showLoader, setLoader] = useState(false);
  const displayLoader = () => {
    setLoader(true);

    // after few second loader dismiss
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }

  // For show/hide dialog
  const [showDialog, setDialog] = useState(false);

  return (

    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} accessible={false}>

      <View style={styles.container}>

        <ScrollView showsVerticalScrollIndicator={true} persistentScrollbar={true} contentContainerStyle={{ flexGrow: 1 }}>

          <Text style={{ paddingVertical: 10, fontSize: 15, color: 'black' }}>First React-Native Programme.</Text>

          <Text style={{ fontSize: 15, color: 'black' }}>Button</Text>

          <Button title='On Press' onPress={() => fruit("Hello, Welcome to React-Native.")} color={'red'}></Button>

          <Text style={styles.headingStyle}> Learning Text Input </Text>

          <Text style={{ paddingVertical: 5, fontSize: 15 }}>Your name is : {name}</Text>

          <TextInput style={styles.textinput} placeholder='Enter Your Name' value={name} onChangeText={(text) => setName(text)}></TextInput>

          <View style={styles.buttonstyle}>
            <Button title='Print value' color={'green'} onPress={() => setDisplay(true)}></Button>
          </View>

          <View style={styles.buttonstyle}>
            <Button title='Clear write value' onPress={() => {
              setName('');
              setDisplay(false);
            }}></Button>
          </View>

          <View>
            {
              display ?
                <View>
                  <Text>My name is {name}.</Text>
                </View>
                : null
            }
          </View>

          <Text style={styles.headingStyle}>FlatList learning</Text>

          <View style={{ flexWrap: 'wrap' }}>
            <FlatList
              data={users}
              renderItem={({ item }) => <Text>Name: {item.name} , ID: {item.id}</Text>}
              keyExtractor={item => item.id}>
            </FlatList>
          </View>

          <Text style={styles.headingStyle}>List with map function learning</Text>

          {/* <ScrollView> */}
          {users.map((item) => <Text>Name : {item.name}</Text>)}
          {/* </ScrollView> */}

          <Text style={styles.headingStyle}>Grid with map function dynamic data</Text>

          {/* <ScrollView> */}
          <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
            {users.map((item) => <Text style={styles.gridView}>{item.id}</Text>)}
          </View>
          {/* </ScrollView> */}

          <Text style={styles.headingStyle}>Component use with function</Text>

          <FlatList
            data={users}
            renderItem={({ item }) => <UserData item={item} />}>
          </FlatList>

          <Text style={styles.headingStyle}>Make individual component and how to used here</Text>
          <Student></Student>

          <Text style={styles.headingStyle}>{data} useEffect as componentDidUpdate {count}</Text>
          <View style={styles.buttonstyle}>
            <Button title='Update Count' color='green' onPress={() => setCount(count + 1)}></Button>
          </View>
          <View style={styles.buttonstyle}>
            <Button title='Update Data Count' color='red' onPress={() => setData(data + 1)}></Button>
          </View>

          <Text style={styles.headingStyle}>Show/Hide activity indicator</Text>
          <View style={styles.buttonstyle}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
              {showLoader ? <ActivityIndicator size={50} color={'blue'} style={{ paddingVertical: 10 }}></ActivityIndicator> : null}
              {/* {showLoader ? <ActivityIndicator size={50} color={'red'} style={{ paddingVertical: 10 }}></ActivityIndicator> : null} */}
              {/* {showLoader ? <ActivityIndicator size={50} color={'yellow'} style={{ paddingVertical: 10 }}></ActivityIndicator> : null} */}
            </View>
            <Button title='Show Loader' onPress={displayLoader}></Button>
          </View>

          <Text style={styles.headingStyle}>Open/Close Dialog or Modal</Text>
          <View style={{ flex: 1 }}>
            <Modal transparent={true} visible={showDialog} animationType='slide'>
              <View style={styles.centerView}>
                <View style={styles.modalView}>
                  <Text style={{ marginBottom: 20, fontSize: 20 }}>Hello this is React Dialog.</Text>
                  <Button title='Close Dialog' onPress={() => setDialog(false)}></Button>
                </View>
              </View>
            </Modal>
          </View>
          <View style={styles.buttonstyle}>
            <Button title='Open Dialog' onPress={() => setDialog(true)}></Button>
          </View>

          {/* <Text style={styles.headingStyle}>Go to Second Page</Text>
          <NavigationContainer>
            <stack.Navigator>
              <stack.Screen name='Second' component={SecondScreen}></stack.Screen>
            </stack.Navigator>
          </NavigationContainer>
          <Button title="Go to Second Page" onPress={() => props.navigation.navigate('Second')}></Button> */}

          <StatusBar backgroundColor="#b3e6ff" barStyle="default" hidden={true} translucent={true} />

        </ScrollView>

      </View >

    </TouchableWithoutFeedback >

  );
}

const UserData = (props) => {
  const item = props.item;
  return (
    <View style={styles.box}>
      <Text style={styles.tableStyle}>Name: {item.name}</Text>
      <Text style={styles.tableStyle}>ID: {item.id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  textinput: {
    fontSize: 15,
    color: 'black',
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 10,
    padding: 5,

  },
  buttonstyle: {
    marginVertical: 5,
  },
  headingStyle: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 15,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  gridView: {
    fontSize: 20,
    backgroundColor: 'blue',
    color: 'white',
    height: 70,
    width: 70,
    margin: 5,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  tableStyle: {
    fontSize: 15,
    flex: 1,
    margin: 2,
    color: 'black',
    textAlign: 'center',
    borderColor: 'grey',
    borderWidth: 1,
    padding: 5
  },
  box: {
    flexDirection: 'row',
    margin: 5,
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 20,
    shadowColor: 'black',
    elevation: 5
  }
});

