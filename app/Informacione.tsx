import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
            <Text style={styles.header}>Smart Campus</Text>
      
         <Text style={styles.title}>Info Section</Text>     
         <Text style={styles.title}>Informactione te pergjithshme</Text>     

          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
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
    width: 200, 
    height: 200,
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
  squareButton: {
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
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
