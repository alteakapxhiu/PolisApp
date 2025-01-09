import React from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import axios from 'axios';
import { FontAwesome5 } from 'react-native-vector-icons';

const ESP32_IP = 'http://192.168.1.100'; // Replace with the IP address of your ESP32

export default function TabOneScreen() {
  const turnOnLed = () => {
    axios.get(`${ESP32_IP}/led/on`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const turnOffLed = () => {
    axios.get(`${ESP32_IP}/led/off`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const turnOnFan = () => {
    axios.get(`${ESP32_IP}/fan/on`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const turnOffFan = () => {
    axios.get(`${ESP32_IP}/fan/off`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../Assets/Image/upolisLogo.png')}
        style={styles.logo}
      />
      
      <Text style={styles.header}>Smart Campus</Text>
      <Text style={styles.title}>POLIS SMART CAMPUS</Text>

      <View style={styles.buttonRow}>
        <Pressable
          style={({ pressed }) => [
            styles.iconButton,
            pressed ? styles.buttonOnActive : styles.buttonOn,
          ]}
          onPress={turnOnLed}
        >
          <FontAwesome5 name="lightbulb" size={50} color="white" />
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.iconButton,
            pressed ? styles.buttonOffActive : styles.buttonOff,
          ]}
          onPress={turnOffLed}
        >
          <FontAwesome5 name="lightbulb" size={50} color="white" />
        </Pressable>
      </View>

      <View style={styles.buttonRow}>
        <Pressable
          style={({ pressed }) => [
            styles.iconButton,
            pressed ? styles.buttonOnActive : styles.buttonOn,
          ]}
          onPress={turnOnFan}
        >
          <FontAwesome5 name="fan" size={50} color="white" />
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.iconButton,
            pressed ? styles.buttonOffActive : styles.buttonOff,
          ]}
          onPress={turnOffFan}
        >
          <FontAwesome5 name="fan" size={50} color="white" />
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
    color: '#E8F5E9',
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#2E7D32',
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginVertical: 10,
  },
  iconButton: {
    width: 80,
    height: 80,
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
    backgroundColor: '#81C784',
  },
  buttonOffActive: {
    backgroundColor: '#66BB6A',
  },
});
