import React from 'react';
import { StyleSheet, Text, View, Pressable, Switch, ScrollView } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
export default function TabTwoScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);

  const toggleNotifications = () => setNotificationsEnabled(!notificationsEnabled);
  const toggleDarkMode = () => setDarkModeEnabled(!darkModeEnabled);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Edit Profile</Text>
        <Pressable style={styles.actionButton}>
          <Text style={styles.actionText}>Manage</Text>
        </Pressable>
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Notifications</Text>
        <Switch value={notificationsEnabled} onValueChange={toggleNotifications} />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Dark Mode</Text>
        <Switch value={darkModeEnabled} onValueChange={toggleDarkMode} />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Privacy Policy</Text>
        <Pressable style={styles.actionButton}>
          <Text style={styles.actionText}>View</Text>
        </Pressable>
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Terms of Service</Text>
        <Pressable style={styles.actionButton}>
          <Text style={styles.actionText}>View</Text>
        </Pressable>
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingText}>About</Text>
        <Pressable style={styles.actionButton}>
          <Text style={styles.actionText}>Info</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#E8F5E9', // Light green background
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 30,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  settingText: {
    fontSize: 16,
    color: '#2E7D32',
  },
  actionButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },
  actionText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
