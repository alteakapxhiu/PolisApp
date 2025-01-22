import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import axios from 'axios';
import { FontAwesome5 } from 'react-native-vector-icons';

// Replace this with your ESP32's actual IP address
const ESP32_IP = 'http://192.168.162.199';

export default function TabOneScreen() {
  const [temperature, setTemperature] = useState(null); // State to store temperature
  const [error, setError] = useState(null); // State to store errors

  // Function to fetch the temperature from ESP32
  const fetchTemperature = () => {
    axios
      .get(`${ESP32_IP}/temperature`)
      .then((response) => {
        setTemperature(response.data.temperature); // Update the temperature state
        setError(null); // Clear any previous errors
      })
      .catch((error) => {
        console.error('Error fetching temperature:', error);
        setError('Failed to fetch temperature.'); // Update error state
      });
  };

  // Function to turn the LED ON
  const turnOnLed = () => {
    axios.get(`${ESP32_IP}/on`).then(console.log).catch((error) =>
      console.error('Error turning on LED:', error)
    );
  };

  // Function to turn the LED OFF
  const turnOffLed = () => {
    axios.get(`${ESP32_IP}/off`).then(console.log).catch((error) =>
      console.error('Error turning off LED:', error)
    );
  };

  // Function to turn the fan ON
  const turnOnFan = () => {
    axios.get(`${ESP32_IP}/fan/on`).then(console.log).catch((error) =>
      console.error('Error turning on Fan:', error)
    );
  };

  // Function to turn the fan OFF
  const turnOffFan = () => {
    axios.get(`${ESP32_IP}/fan/off`).then(console.log).catch((error) =>
      console.error('Error turning off Fan:', error)
    );
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../Assets/Image/upolisLogo.png')}
        style={styles.logo}
      />

      {/* App Header */}
      <Text style={styles.header}>Smart Campus</Text>
      <Text style={styles.title}>POLIS SMART CAMPUS</Text>

      {/* Temperature Section */}
      <View style={styles.temperatureContainer}>
        <Text style={styles.temperatureHeader}>Current Temperature</Text>
        {temperature !== null ? (
          <Text style={styles.temperatureText}>{temperature} °C</Text>
        ) : (
          <Text style={styles.temperatureText}>No data available</Text>
        )}
        {error && <Text style={styles.error}>{error}</Text>}
        <Pressable style={styles.tempButton} onPress={fetchTemperature}>
          <Text style={styles.tempButtonText}>Fetch Temperature</Text>
        </Pressable>
      </View>

      {/* LED Controls */}
      <Text style={styles.sectionTitle}>LED Controls</Text>
      <View style={styles.buttonRow}>
        <Pressable
          style={({ pressed }) => [
            styles.iconButton,
            pressed ? styles.buttonOnActive : styles.buttonOn,
          ]}
          onPress={turnOnLed}
        >
          <FontAwesome5 name="lightbulb" size={50} color="white" />
          <Text style={styles.buttonText}>LED ON</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.iconButton,
            pressed ? styles.buttonOffActive : styles.buttonOff,
          ]}
          onPress={turnOffLed}
        >
          <FontAwesome5 name="lightbulb" size={50} color="white" />
          <Text style={styles.buttonText}>LED OFF</Text>
        </Pressable>
      </View>

      {/* Fan Controls */}
      <Text style={styles.sectionTitle}>Fan Controls</Text>
      <View style={styles.buttonRow}>
        <Pressable
          style={({ pressed }) => [
            styles.iconButton,
            pressed ? styles.buttonOnActive : styles.buttonOn,
          ]}
          onPress={turnOnFan}
        >
          <FontAwesome5 name="fan" size={50} color="white" />
          <Text style={styles.buttonText}>Fan ON</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.iconButton,
            pressed ? styles.buttonOffActive : styles.buttonOff,
          ]}
          onPress={turnOffFan}
        >
          <FontAwesome5 name="fan" size={50} color="white" />
          <Text style={styles.buttonText}>Fan OFF</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    height: 150,
    marginBottom: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#388E3C',
    marginBottom: 20,
  },
  temperatureContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  temperatureHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 10,
  },
  temperatureText: {
    fontSize: 18,
    color: '#4CAF50',
    marginBottom: 10,
  },
  error: {
    fontSize: 14,
    color: 'red',
    marginBottom: 10,
  },
  tempButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  tempButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginTop: 20,
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    marginVertical: 10,
  },
  iconButton: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  buttonOn: {
    backgroundColor: '#4CAF50',
  },
  buttonOnActive: {
    backgroundColor: '#388E3C',
  },
  buttonOff: {
    backgroundColor: '#F44336',
  },
  buttonOffActive: {
    backgroundColor: '#D32F2F',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    marginTop: 8,
    fontWeight: 'bold',
  },
});
