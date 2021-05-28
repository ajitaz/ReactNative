import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';


const SearchBar = ({term, onTextChange, onPressDone}) => {
    return (
        <View style={style.searchBar}>
            <Feather name="search" size={24} color="black" style={style.iconStyle} />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={style.textInputStyle}
                placeholder='Search here'
                onChangeText={(newTerm)=>{onTextChange(newTerm)}}
                value={term}
                onEndEditing={onPressDone}
            />
        </View>
    )
}

const style = StyleSheet.create({
    searchBar: {
        backgroundColor: '#F0EEEE',
        height: 40,
        flexDirection: 'row',
        borderRadius: 20,
        marginTop: 20,
        marginHorizontal: 15,
        marginBottom:10
    },
    textInputStyle: {
        flex: 1,
    },
    iconStyle: {
        alignSelf: 'center',
        marginHorizontal:10
    }
})

export default SearchBar