import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Profile = ({})=>{
    return(
        <View style={style.viewStyle}>
            <Text style={style.textStyle}>This is Profile Screen</Text>
        </View>
    )
}

const style = StyleSheet.create({
    textStyle:{
        fontSize:18,
        color:'yellow'
    },
    viewStyle:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default Profile