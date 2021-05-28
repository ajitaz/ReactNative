import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Images } from './Imgaes'

const ResutlDetail = ({ result }) => {
    let rating = result.reviews.reduce((acc, current) => {
        return acc + current.rating
    },0) / 3

    
   

    return (
        <View style={{ margin: 10 }}>
            <Image source={Images[result.photograph]}
                style={styles.image}
            />
            <Text style={styles.title}>{result.name}</Text>
            <Text>Cuisine type : {result.cuisine_type}, Rating : {rating.toFixed(1)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 250,
        borderRadius: 5,
        height: 200
    },
    title: {
        fontWeight: "bold"
    }
})

export default ResutlDetail;