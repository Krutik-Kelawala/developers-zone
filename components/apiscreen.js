import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, FlatList, ScrollView } from "react-native";


export const TabScreen = () => {

    // For use single data
    const [apiData, setApiData] = useState(undefined);
    const getApiResponseData = async () => {
        // Api call here
        const url = "https://jsonplaceholder.typicode.com/posts/1";
        let result = await fetch(url);
        result = await result.json();
        setApiData(result);
        console.log("Api res" + JSON.stringify({ result }));
    }
    useEffect(() => {
        getApiResponseData();
    }, [])

    // For use Multiple data
    const [apiResonse, setApiRes] = useState(undefined);
    const getApiResponse = async () => {
        // Api call here
        const url = "https://fakestoreapi.com/users";
        let result = await fetch(url);
        result = await result.json();
        setApiRes(result);
        console.log("Api res" + JSON.stringify({ result }));
    }
    useEffect(() => {
        getApiResponse();
    }, [])


    return (
        <View >
            <Text style={styles.headingStyle}>Single data from api response :</Text>
            {apiData ?
                <View style={styles.borderBox}>
                    <Text style={styles.textStyle}>"Title" : {apiData.title}</Text>
                    <Text style={styles.textStyle}>"Description" : {apiData.body}</Text>
                </View> :
                <ActivityIndicator size='large' color={'blue'} style={styles.indicatorStyle}></ActivityIndicator>}


            <Text style={styles.headingStyle}>Multiple data from api response :</Text>
            {apiResonse ?
                <FlatList contentContainerStyle={{ paddingBottom: 200 }}
                    data={apiResonse} renderItem={({ item }) => <ScrollView style={styles.borderBox}>
                        <Text style={styles.textStyle}>"ID" : {item.id}</Text>
                        <Text style={styles.textStyle}>"Email" : {item.email}</Text>
                        <Text style={styles.textStyle}>"Name" : {item.name.firstname} {item.name.lastname}</Text>
                        <Text style={styles.textStyle}>"Phone" : {item.phone}</Text>
                    </ScrollView>}>

                </FlatList>
                :
                <ActivityIndicator size='large' color={'blue'} style={styles.indicatorStyle}></ActivityIndicator>}
        </View>
    );
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
    },
    borderBox: {
        borderWidth: 1,
        marginHorizontal: 10,
        marginVertical: 5,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: 'lightyellow',
    },
    textStyle: {
        fontSize: 14,
        color: 'black',
        fontWeight: '400'
    },
    indicatorStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    }
});