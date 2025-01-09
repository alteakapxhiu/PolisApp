import { StyleSheet, Text, View } from 'react-native';

export default function TabTwoScreen() {
  return (
   <View style={styles.container}>
         {/* Adding the image */}
         
         <Text style={styles.header}>Smart Campus</Text>
         <Text style={styles.title}>POLIS SMART CAMPUS</Text>
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
});
