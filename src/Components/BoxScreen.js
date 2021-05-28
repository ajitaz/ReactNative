import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const BoxScreen = ({ navigation }) => {
    return (
        <View style={style.viewStyle}>
            <Text style={style.textStyle}> Hello this is Learning phase </Text>
            <Button
                title="home button"
                onPress={() => {
                    console.log(navigation)
                }}
            />
            <Button
                title="Profile button"
                onPress={() => {
                    navigation.navigate('Profile')
                }}
            />
            <Button
                title="Search page"
                onPress={()=>{
                    navigation.navigate('Search')
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    viewStyle: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'space-around'
    },
    textStyle: {
        fontSize: 20
    },
    buttonStyle: {
        color:'green'
    }
})

export default BoxScreen;