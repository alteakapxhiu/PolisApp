import React, { useState } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

export default function TabOneScreen() {

  // State to track the status
  const [isActive, setIsActive] = useState(false); // 'false' means inactive initially

  // Toggle the status
  const toggleStatus = () => {
    setIsActive(!isActive);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PJESEMARRJA NE MESIM</Text>
      
      {/* Separator directly under the title */}
      <View style={styles.separator} />

      <View>
        <Image
          source={{ uri: 'https://www.portalistudentor.al/media/images/POLIS_1.2e16d0ba.fill-512x512.format-webp.webp' }}
          style={styles.PolisLogo} // Apply the style from the StyleSheet
        />
      </View>

      <View>
        <Text style={styles.text}>
          Ju lutem skanoni karten para cdo ore mesimore qe te regjistrohet pjesemarrja ne sistem !
        </Text>

        <Image
          source={{ uri: 'https://icons.veryicon.com/png/o/miscellaneous/effevo/attendance-1.png' }}
          style={styles.Status} // Apply the style from the StyleSheet
        />
      </View>

      {/* Status indicator */}
      <View style={[styles.statusIndicator, { backgroundColor: isActive ? 'green' : 'red' }]}>
        <Text style={styles.statusText}>{isActive ? 'Aktiv ne mesim' : 'Jo ne mesim'}</Text>
      </View>

      {/* Toggle the status on press */}
      <View style={styles.buttonContainer}>
        <Text style={styles.toggleButton} onPress={toggleStatus}>
          Zere se eshte NFC qe triggers it
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#50C878',
  },
  title: {
    fontSize: 20,
    marginTop: 40,
    fontWeight: 'bold',
    paddingBottom:5,
    color: 'white',
  },
  text: {
    fontSize: 15,
    marginTop: 10,
    fontWeight: '400',
    color: 'white',
    textAlign: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop:5,
    
    backgroundColor: '#50C878',
  },
  PolisLogo: {
    width: 100,
    height: 100,
    marginTop: -150,
  },
  Status: {
    width: 150,
    height: 150,
    marginTop: 80,
    marginLeft: 120,
    backgroundColor: '#50C878',
    position: 'absolute',
  },
  separator: {
    height: 1,
    width: '80%',  // Adjust the width as needed
    backgroundColor: 'white', // Color of the line
    position:'relative',
    marginBottom:-10,
  },
  statusIndicator: {
    marginTop: 200,
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginBottom: -150,
  },
  statusText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonContainer: {
    marginTop: 250,
  },
  toggleButton: {
    fontSize: 18,
    color: 'white',
    textDecorationLine: 'underline',
    marginBottom: -100,
  },
});
