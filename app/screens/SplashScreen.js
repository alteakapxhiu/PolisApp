import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        // Navigate to Welcome screen after 3 seconds
        const timer = setTimeout(() => {
            navigation.replace('Welcome'); // Replace with your main screen
        }, 3000);

        return () => clearTimeout(timer); // Clear timer on unmount
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://example.com/your-logo.png' }} // Replace with your logo URL
                style={styles.logo}
            />
            <Text style={styles.text}>Welcome to MyApp!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6200ee', // Background color
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    text: {
        fontSize: 24,
        color: '#ffffff',
        fontWeight: 'bold',
    },
});

export default SplashScreen;
