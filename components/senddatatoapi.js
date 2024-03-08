import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

export const FormScreen = () => {

    const [name, setName] = useState("");
    const [salary, setSalary] = useState();
    const [age, setAge] = useState();

    // If your api key name & your variable name same don't write key in stringify function
    // If your api key name & your variable name not same please write key in stringify function like ex : body:JSON.stringify({keyname:variablename,keyname:variablename})
    const sendDataToAPi = async () => {
        const url = "https://dummy.restapiexample.com/api/v1/create";
        let result = await fetch(url, {
            method: 'Post',
            body: JSON.stringify({ name, salary, age })
        });
        result = await result.json();
        console.log("result" + JSON.stringify(result))

        if (result.status == "success") {
            alert(result.message);
            setName("");
            setSalary();
            setAge();
        }

    }

    return (
        <View>
            <Text style={styles.headingStyle}>Create form and send data to api</Text>

            <Text style={{ paddingHorizontal: 10, }}>Enter your name : </Text>
            <TextInput placeholder='Enter your name' style={styles.fieldDecoration} onChangeText={(nameValue) => setName(nameValue)}></TextInput>

            <Text style={{ paddingHorizontal: 10, }}>Enter your salary : </Text>
            <TextInput placeholder='Enter your salary' keyboardType="numeric" style={styles.fieldDecoration} onChangeText={(salaryValue) => setSalary(salaryValue)}></TextInput>

            <Text style={{ paddingHorizontal: 10, }}>Enter your age : </Text>
            <TextInput placeholder='Enter your age' keyboardType="numeric" style={styles.fieldDecoration} onChangeText={(ageValue) => setAge(ageValue)}></TextInput>

            <View style={styles.buttonstyle}>
                <Button title='Data Send to API' color='green' onPress={sendDataToAPi}></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingStyle: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        fontSize: 15,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    fieldDecoration: {
        fontSize: 15,
        color: 'black',
        borderWidth: 1,
        borderColor: 'black',
        marginVertical: 5,
        marginHorizontal: 10,
        padding: 5,
    },
    buttonstyle: {
        marginVertical: 15,
        marginHorizontal: 10,
    },
});
