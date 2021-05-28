import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResutlDetail from './ResultDetail';


const Result = ({ title, results, navigation }) => {
    return (
        <View>
            <Text style={style.titleStyle}>{title}</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={results}
                keyExtractor={(result) => result.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={()=>navigation.navigate('SelectedRestaurant')}>
                            <ResutlDetail result={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        color: '#999900',
        fontWeight: 'bold',
        marginLeft: 10
    }
})

export default Result