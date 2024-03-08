import React, { Component } from "react";
import { Text, TextInput, View, } from 'react-native';

class Student extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
        }
    }


    updateName(value) {
        this.setState({ name: value })
    }

    render() {
        return (
            <View>
                <Text style={{ color: 'red', fontSize: 20, backgroundColor: 'yellow' }}>
                    Class Component Demo : {this.state.name}
                </Text>

                <TextInput style={{
                    fontSize: 15,
                    color: 'black',
                    borderWidth: 1,
                    borderColor: 'black',
                    marginVertical: 10,
                    padding: 5,
                }}
                    placeholder="Enter your name"
                    onChangeText={(inputText) => this.updateName(inputText)}></TextInput>


            </View>
        )
    }
}

export default Student;