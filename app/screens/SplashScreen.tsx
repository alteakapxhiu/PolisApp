import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase } from '@react-navigation/native';

// Define the type for the navigation prop
type SplashScreenNavigationProp = StackNavigationProp<ParamListBase, 'Splash'>;

interface SplashScreenProps {
  navigation: SplashScreenNavigationProp;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home'); // Replace 'Home' with your main screen route name
    }, 2000); // Splash screen duration (2 seconds)
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My App</Text>
      <ActivityIndicator size="large" color="#4CAF50" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50', // Green background
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF', // White text
    marginBottom: 20,
  },
});

export default SplashScreen;
