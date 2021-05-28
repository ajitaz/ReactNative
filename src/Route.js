import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BoxScreen from './Components/BoxScreen';
import Profile from './Screens/Profile';
import Search from './Screens/Search';
import SelectedRestaurant from './Components/SelectedResturant';



const Stack = createStackNavigator();


const Routes = ({ }) => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={BoxScreen}></Stack.Screen>
                <Stack.Screen name="Profile" component={Profile}></Stack.Screen>
                <Stack.Screen name="Search" component={Search}></Stack.Screen>
                <Stack.Screen name="SelectedRestaurant" component={SelectedRestaurant}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes