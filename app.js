import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './app/screens/SplashScreen'; // Adjust the path to your SplashScreen
import TabOneScreen from './app/(tabs)/index'; // Adjust the path to your HomeScreen

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Home" component={TabOneScreen} /> {/* Replace with your actual Home screen */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
