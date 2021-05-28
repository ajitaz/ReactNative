import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import { useState } from 'react/cjs/react.development';
import Fake from '../Components/FakeRestaurant';
import Result from '../Components/Results';
import SearchBar from '../Components/SearchBar';

const Search = ({ navigation }) => {
    const [term, setTerm] = useState('')
    const [result, setResult] = useState([])

    const filterResultByPrice = (price) => {
        return result.filter((item) =>
            item.price === price
        )
    }

    return (
        <>
            <Text style={style.titleStyle}>SEARCH SCREEN</Text>
            <SearchBar
                term={term}
                onTextChange={(newTerm) => { setTerm(newTerm) }}
                onPressDone={() => { setResult(JSON.parse(Fake)) }}
            />
            {/* <Text>We have found {result.length} restaurants</Text> */}
            <ScrollView >
                <Result navigation={navigation} results={filterResultByPrice('$')} title="Cost Effective" />
                <Result navigation={navigation} results={filterResultByPrice('$$')} title="Bit Pricer" />
                <Result navigation={navigation} results={filterResultByPrice('$$$')} title="Big Spender!" />
            </ScrollView>
        </>
    )
}

const style = StyleSheet.create({
    titleStyle: {
        fontSize: 30,
        color: 'green',
        alignSelf: 'center'
    }
})

export default Search;